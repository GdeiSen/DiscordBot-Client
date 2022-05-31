import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import api from "../http";
import { Store } from "../store";
import { setCurrentPlayback, setCurrentQueue, setCurrentServer, setCurrentStats, setCurrentUsers, setServerList, setStats, setUserList } from "../store/reducers/serversSlice";
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
                this.dispatch(setServerStatus('connected'))
            })
        } catch (error) { console.log(error) }
    }

    testPlaybackEmit(serverId) {
        if (Store.getState().servers?.currentServer?.server?.id == serverId){
             this.getPlayback(serverId); this.getWeekStats();
             if(Store.getState().servers.currentServer?.server?.id) this.getWeekStats(Store.getState().servers.currentServer.server.id);
            }
    }

    async getStatsByDate(date) {
        try {
            const promise = new Promise(async (resolve, reject) => {
                api.post(`/serverStats`, { where: { date: date } }).then(responce => resolve(responce.data))
            })
            return await promise;
        } catch (error) { console.log(error) }
    }

    async getStats(where) {
        try {
            const promise = new Promise(async (resolve, reject) => {
                api.post(`/serverStats`, { where: where }).then(responce => resolve(responce.data))
            })
            return await promise;
        } catch (error) { console.log(error) }
    }

    async getWeekStats(serverId) {
        const promise = new Promise(async (resolve, reject) => {
            let dates = [];
            for (let index = 0; index < 7; index++) {
                let date = moment().subtract(index, "days").format("ddd MMMM DD YYYY");
                dates.unshift(date);
            }
            let stats = [{}];
            for (let index = 0; index < dates.length; index++) {
                let stat;
                if(serverId) stat = await this.getStats({date: dates[index], serverId: serverId});
                else stat = await this.getStats({date: dates[index]});
                let obj = {date: dates[index], stats: stat }
                stats[index] = obj;
                if (index >= dates.length - 1) resolve(stats);
            }
        })
        if(serverId) this.dispatch(setCurrentStats(await promise))
        else this.dispatch(setStats(await promise))
    }
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}