const { createSlice } = require('@reduxjs/toolkit')
const tokenManagerSlice = createSlice({
    name: "tokenManager",
    initialState: null,
    reducers: {
        setTokenManager(state, action) {
            state = action.payload;
        }
    }
})
export default tokenManagerSlice.reducer
export const { setTokenManager } = tokenManagerSlice.actions