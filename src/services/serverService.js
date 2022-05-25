import { useDispatch, useSelector } from "react-redux";
import api from "../http";
import { setCurrentPlayback, setCurrentQueue, setCurrentServer, setCurrentUsers, setServerList, setUserList } from "../store/reducers/serversSlice";
export default class ServerService {
    constructor() {
        this.dispatch = useDispatch();
        this.store = useSelector(state => state)
    }
    async getServerList(delay) {
        await timeout(delay || 0)
        try {
            return api.get('/serverList').then(response => this.dispatch(setServerList(response.data)))
        } catch (err) { }
    }

    async getUserList(serverId, delay) {
        await timeout(delay || 0)
        try {
            return api.get(`/userList/${serverId}`).then(response => this.dispatch(setCurrentUsers(response.data)))
        } catch (err) { }
    }

    async getPlayback(serverId, delay) {
        await timeout(delay || 0)
        try {
            api.get(`/currentPlayback/${serverId}`).then(response => this.dispatch(setCurrentPlayback(response.data)));
            api.get(`/serverQueue/${serverId}`).then(response => this.dispatch(setCurrentQueue(response.data)))
        } catch (err) { }
    }

    async setCurrentServer(serverId, delay) {
        await timeout(delay || 0)
        try {
            api.get(`/server/${serverId}`).then(response => this.dispatch(setCurrentServer(response.data)))
        } catch (error) { console.log(error) }
    }

}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}