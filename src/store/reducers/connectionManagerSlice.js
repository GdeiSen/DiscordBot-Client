const { createSlice } = require('@reduxjs/toolkit')
const connectionManagerSlice = createSlice({
    name: "connectionManager",
    initialState: { manager: null },
    reducers: {
        setConnectionManager(state, action) {
            state.manager = action.payload;
        }
    }
})
export default connectionManagerSlice.reducer
export const { setConnectionManager } = connectionManagerSlice.actions