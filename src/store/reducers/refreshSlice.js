const { createSlice } = require('@reduxjs/toolkit')
const refreshSlice = createSlice({
    name: "refresh",
    initialState: {
        timer: null
    },
    reducers: {
        setRefreshTimer(state, action) {
            state.timer = action.payload;
        },
    }
})
export default refreshSlice.reducer
export const { setRefreshTimer } = refreshSlice.actions