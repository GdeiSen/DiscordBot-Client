import { useDispatch, useSelector } from "react-redux";
import api from "../http";
import { Store } from "../store";
import { setCurrentPlayback, setCurrentQueue, setCurrentServer, setCurrentUsers, setServerList, setUserList } from "../store/reducers/serversSlice";
import { setAppStatus, setDataStatus, setServerStatus, setSocketStatus, setTokenStatus } from "../store/reducers/serverStatusSlice";
export default class ServerService {
    constructor() {
        this.dispatch = useDispatch();
        this.store = useSelector(state => state)
    }
    async getServerList(delay) {
        await timeout(delay || 0)
        try {
            return api.get('/serverList').then(response => this.dispatch(setServerList(response.data)))
        } catch (error) { console.log(error) }
    }

    async getUserList(serverId, delay) {
        await timeout(delay || 0)
        try {
            return api.get(`/userList/${serverId}`).then(response => this.dispatch(setCurrentUsers(response.data)))
        } catch (error) { console.log(error) }
    }

    async getPlayback(serverId, delay) {
        await timeout(delay || 0)
        try {
            api.get(`/currentPlayback/${serverId}`).then(response => this.dispatch(setCurrentPlayback(response.data)));
            api.get(`/serverQueue/${serverId}`).then(response => this.dispatch(setCurrentQueue(response.data)))
        } catch (error) { console.log(error) }
    }

    async setCurrentServer(serverId, delay) {
        await timeout(delay || 0)
        try {
            api.get(`/server/${serverId}`).then(response => this.dispatch(setCurrentServer(response.data)))
        } catch (error) { console.log(error) }
    }

    async getStatus() {
        try {
            api.get(`/status`).then(response => {
                this.dispatch(setAppStatus(response.data?.appStatus));
                this.dispatch(setDataStatus(response.data?.dataStatus))
                this.dispatch(setTokenStatus(response.data?.tokenStatus))
                this.dispatch(setSocketStatus(response.data?.socketStatus))
                this.dispatch(setServerStatus('connected'))
            })
        } catch (error) { console.log(error) }
    }

    testPlaybackEmit(serverId) {
        if (Store.getState().servers.currentServer.server.id == serverId) this.getPlayback(serverId);
    }
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}