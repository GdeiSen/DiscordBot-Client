import { useDispatch } from "react-redux";
import { setSocketStatus } from "../store/reducers/serverStatusSlice";
const { io } = require("socket.io-client");
export default class Socket {
    constructor() {
        this.dispatch = useDispatch()
    }
    connect() {
        try {
            this.socket = io("http://localhost:5000", { reconnectionDelayMax: 10000 });
            this.socket.on('connect', () => {
                this.dispatch(setSocketStatus('connected'))
            })
        } catch (error) { console.log(error) }
    }

    async send(path, args) {
        try {
            const message = {
                type: 'message',
                token: this.token,
                path: path,
                args: args,
            }
            this.socket.emit('message', message)
        } catch (error) { console.log(error) }
    }

}