import { useDispatch, useSelector } from "react-redux";
import { setCurrentPlayback, setCurrentQueue, setCurrentUsers, setServerList, setUserList } from "../store/reducers/serversSlice";
import { setSocketStatus } from "../store/reducers/serverStatusSlice";
const { io } = require("socket.io-client");
const EventEmitter = require('events');
const axios = require('axios').default;
const MessageEmitter = new EventEmitter;
export default class ConnectionManager extends EventEmitter {
  constructor() {
    super();
    MessageEmitter.removeAllListeners('message');
    MessageEmitter.on('message', (message) => { this.dataResolver(message) })
    this.dispatch = useDispatch();
    this.store = useSelector(state => state);
  }

  connect() {
    this.socket = io("http://localhost:5000", { reconnectionDelayMax: 10000 });
    this.socket.on('connect', () => {
      this.getData('test', {}, 'socket')
      this.dispatch(setSocketStatus('connected'))
    })

    this.socket.on('disconnect', () => {
      this.emit('CLOSED');
    })

    this.socket.on('data', (message) => {
      this.emit('message', message)
    })

  }

  dataResolver(message) {
    try {
      switch (message.data.responce.contentType) {
        case "serverList": {this.dispatch(setServerList(message.data.responce.content)); break;}
        case "userList": this.dispatch(setCurrentUsers(message.data.responce.content)); break;
        case "currentPlayback": this.dispatch(setCurrentPlayback(message.data.responce.content)); break;
        case "serverQueue": this.dispatch(setCurrentQueue(message.data.responce.content)); break;
        case "error": this.errorAnalys(message); break;
        case "test": this.testAnalys(message); break;
        default: break
      }
    } catch(error) {console.log(error)}
  }

  async testAnalys(message) {
    if (message.data.status === "200") { }
  }


  getData(path, args, options) {
    if ((path && args) || options === 'socket') {this.getData_SOCKET(path, args);}
    else if ((path && !args) || options === 'http') {this.getData_HTTP(path)}
  }

  sendData(path, data, options) {
    if (options === 'socket') {this.sendData_SOCKET(path, data);}
    else if (options === 'http') {this.sendData_HTTP(path, data)}
    else { this.sendData_SOCKET(path, data) }
  }

  async getData_SOCKET(path, args) {
    const message = {
      type: 'request',
      token: this.token,
      path: path,
      args: args,
      recipient: 'client_server',
      destination: 'app_server',
    }
    this.socket.emit('request', message)
  }

  async sendData_SOCKET(path, data) {
    const message = {
      type: 'data',
      token: this.token,
      path: path,
      data: data,
      recipient: 'client_server',
      destination: 'app_server',
    }
    this.socket.emit('data', message);
  }

  async getData_HTTP(path) {
    axios.get(`http://localhost:5000/${path}`, {})
      .then(function (responce) {
        MessageEmitter.emit('message', responce)
        console.log(responce);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  async sendData_HTTP(path, data) {
    axios.post(`http://localhost:5000/${path}`, { data })
      .then(function (responce) {
        MessageEmitter.emit('message', responce)
      })
      .catch(function (error) {
        console.log(error);
      });
  }




}