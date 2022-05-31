const { createSlice } = require('@reduxjs/toolkit')
const serversSlice = createSlice({
    name: "servers",
    initialState: {
        list: null,
        stats: null,
        currentServer: {
            server: null,
            playback: null,
            queue: null,
            users: null,
            stats: null,
        }
    },
    reducers: {
        setStats(state, action) {
            state.stats = action.payload;
        },
        setServerList(state, action) {
            state.list = action.payload;
        },
        setUserList(state, action) {
            let index = state.indexOf({ serverId: action.payload });
            state.list[index].userList = action.payload;
        },
        setCurrentPlayback(state, action) {
            state.currentServer.playback = action.payload;
        },
        setCurrentServer(state, action) {
            state.currentServer.server = action.payload;
        },
        setCurrentQueue(state, action) {
            state.currentServer.queue = action.payload;
        },
        setCurrentUsers(state, action) {
            state.currentServer.users = action.payload;
        },
        setCurrentStats(state, action) {
            state.currentServer.stats = action.payload;
        }
    }
})
export default serversSlice.reducer
export const { setServerList, setCurrentPlayback, setUserList, setCurrentQueue, setCurrentServer, setCurrentUsers, setStats, setCurrentStats } = serversSlice.actions