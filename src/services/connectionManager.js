import { useDispatch, useSelector } from "react-redux";
const { io } = require("socket.io-client");
const EventEmitter = require('events');
const axios = require('axios').default;
const MessageEmmiter = new EventEmitter;

export default class ConnectionManager extends EventEmitter {

  constructor() {
    super();
    this.token = 'test';
    this.dispatch = useDispatch();
    MessageEmmiter.on('message', (message) => { this.dataResolver(message) })
  }

  connect() {
    this.socket = io("http://localhost:5000", { reconnectionDelayMax: 10000 });
    this.socket.on('connect', () => {
      this.status = 'connected';
      this.getData('servers')
      this.dispatch({ type: "SET_EXTERNAL_SERVER_STATUS", payload: 'connected' });
    })

    this.socket.on('disconnect', () => {
      this.dispatch({ type: "SET_EXTERNAL_SERVER_STATUS", payload: 'disconnected' });
      this.dispatch({ type: "SET_MAIN_SERVER_STATUS", payload: 'disconnected' });
      this.emit('CLOSED');
    })

    this.socket.on('data', (message) => {
      this.emit('message', message)
    })

  }

  dataResolver(message) {
    try {
      switch (message.data.contentType) {
        case "servers": this.dispatch({ type: "SET_SERVER_LIST", payload: message.data.content }); break;
        case "serverUsers": this.dispatch({ type: "SET_USER_LIST", payload: message.data.content }); break;
        case "currentPlayback": this.dispatch({ type: "SET_CURRENT_SERVER_PLAYBACK", payload: message.data.content }); break;
        case "serverQueue": this.dispatch({ type: "SET_SERVER_QUEUE", payload: message.data.content }); break;
        case "error": this.errorAnalys(message); break;
        case "test": this.testAnalys(message); break;
        default: break
      }
      MessageEmmiter.emit('message', message.type, message.data);
    } catch { }
  }

  async errorAnalys(message) {
    if (!message.type == 'error') return 0;
    if (message.data == 'Main Server Connection Error') this.dispatch({ type: "SET_MAIN_SERVER_STATUS", payload: 'disconnected' });
    if (message.data == 'Main Server Connection Lost') this.dispatch({ type: "SET_MAIN_SERVER_STATUS", payload: 'disconnected' });
  }

  async testAnalys(message) {
    if (!message.type == 'test') return 0;
    if (message.data == "Test Completed") this.dispatch({ type: "SET_MAIN_SERVER_STATUS", payload: 'connected' });
  }


  getData(path, args, options) {
    if ((path && args) || options == 'socket') {
      this.getData_SOCKET(path, args);
    }
    else if ((path && !args) || options == 'http') {
      this.getData_HTTP(path)
    }
  }

  sendData(path, data, options) {
    if (options == 'socket') {
      this.sendData_SOCKET(path, data);
    }
    else if (options == 'http') {
      this.sendData_HTTP(path, data)
    }
    else {this.sendData_SOCKET(path, data)}
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
      .then(function (response) {
        MessageEmmiter.emit('message', response)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  async sendData_HTTP(path, data) {
    axios.post(`http://localhost:5000/${path}`, { data })
      .then(function (response) {
        MessageEmmiter.emit('message', response)
      })
      .catch(function (error) {
        console.log(error);
      });
  }




}