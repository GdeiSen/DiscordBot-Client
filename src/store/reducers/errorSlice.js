const { createSlice } = require('@reduxjs/toolkit')
const errorSlice = createSlice({
    name: "errors",
    initialState: {
        authError: null,
    },
    reducers: {
        setAuthError(state, action) {
            state.authError = action.payload;
        }
    }
})
export default errorSlice.reducer
export const { setAuthError } = errorSlice.actions