const { createSlice } = require('@reduxjs/toolkit')
const serverStatusSlice = createSlice({
    name: "serverStatus",
    initialState: {
        socketStatus: 'disconnected',
        dataStatus: 'untested',
        tokenStatus: 'disconnected',
        serverStatus: 'disconnected',
        appStatus: 'disconnected'
    },
    reducers: {
        setSocketStatus(state, action) {
            state.socketStatus = action.payload;
        },
        setDataStatus(state, action) {
            state.dataStatus = action.payload;
        },
        setTokenStatus(state, action) {
            state.tokenStatus = action.payload;
        },
        setAppStatus(state, action) {
            state.appStatus = action.payload;
        },
        setServerStatus(state, action) {
            state.serverStatus = action.payload;
        },
    }
})
export default serverStatusSlice.reducer
export const { setSocketStatus, setTokenStatus, setAppStatus, setDataStatus, setServerStatus } = serverStatusSlice.actions

