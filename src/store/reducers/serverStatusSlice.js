const { createSlice } = require('@reduxjs/toolkit')
const serverStatusSlice = createSlice({
    name: "serverStatus",
    initialState: {
        socketStatus: 'disconnected',
        httpStatus: 'untested',
        appStatus: 'disconnected',
        dataStatus: 'disconnected'
    },
    reducers: {
        setSocketStatus(state, action) {
            state.socketStatus = action.payload;
        },
        setHttpStatus(state, action) {
            state.httpStatus = action.payload;
        },
        setAppStatus(state, action) {
            state.appStatus = action.payload;
        },
        setDataStatus(state, action) {
            state.dataStatus = action.payload;
        },
    }
})
export default serverStatusSlice.reducer
export const { setSocketStatus, setHttpStatus, setAppStatus, setDataStatus } = serverStatusSlice.actions

