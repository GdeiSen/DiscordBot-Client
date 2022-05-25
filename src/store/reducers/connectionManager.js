const { createSlice } = require('@reduxjs/toolkit')
const connectionManager = createSlice({
    name: "connectionManager",
    initialState: {},
    reducers: {
        setSocketManager(state, action) {
            state.socketManager = action.payload;
        },
        setHttpManager(state, action) {
            state.httpManager = action.payload;
        },
        setAuthService(state, action) {
            state.authService = action.payload;
        },
        setServerService(state, action) {
            state.serverService = action.payload;
        },
        setUserService(state, action) {
            state.userService = action.payload;
        },

    }
})
export default connectionManager.reducer
export const { setSocketManager, setHttpManager, setAuthService, setServerService, setUserService } = connectionManager.actions