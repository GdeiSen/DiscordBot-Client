import { useDispatch, useSelector } from "react-redux";
const { io } = require("socket.io-client");
const EventEmitter = require('events');

export default class websocketManager extends EventEmitter {

  constructor() {
    super();
    this.token = 'test';
    this.dispatch = useDispatch();
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
      try {
        console.log(message, 1111111111)
        switch (message.dataType) {
          case "servers": this.dispatch({ type: "SET_SERVER_LIST", payload: message.data }); break;
          case "serverUsers": this.dispatch({ type: "SET_USER_LIST", payload: message.data }); break;
          case "currentPlayback": this.dispatch({ type: "SET_CURRENT_SERVER_PLAYBACK", payload: message.data }); break;
          case "serverQueue": this.dispatch({ type: "SET_SERVER_QUEUE", payload: message.data }); break;
          case "error": this.errorAnalys(message); break;
          case "test": this.testAnalys(message); break;
          default: break
        }
        this.emit('MESSAGE', message.type, message.data);
      } catch { }
    })

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

  async getData(path, args) {
    const message = {
      type: 'request',
      token: this.token,
      path: path,
      args: args,
      recipient: 'client_server',
      destination: 'app_server',
    }
    console.log(message);
    this.socket.emit('request', message)
  }

  async sendData(dataType, data) {
    const message = {
      type: 'data',
      token: this.token,
      dataType: dataType,
      data: data,
      recipient: 'client_server',
      destination: 'app_server',
    }
    console.log(message);
    this.socket.emit('data', message);
  }
}