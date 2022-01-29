import { useRef } from "react";
const EventEmitter = require('events');
export default class websocketManager extends EventEmitter {
  constructor() {
    super();
    this.socket = useRef();
    this.token = 'test'
  }

  connect() {
    this.socket = new WebSocket('ws://localhost:5000')

    this.socket.onclose = () => {
      console.log('[INFO] Socket is closed!')
      this.emit('CLOSED');
    }

    this.socket.onerror = () => {
      console.log('[ERROR] Socket connection error!');
      this.emit('ERROR');
    }

    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
      //if(message.token !== this.token) return 0;
      this.emit('MESSAGE', message.type, message.data);
    }

    this.socket.onopen = () => {
      this.sendData('getServers');
    }

  }

  async sendData(request, data) {
    if (this.socket.readyState === 1) {
      const message = {
        request:{ name: request, src: 'server'},
        token: this.token,
        data: data,
        recipient: 'client'
      }
      console.log(message);
      this.socket.send(JSON.stringify(message))
    }
  }

}
