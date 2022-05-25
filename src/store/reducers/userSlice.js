const { createSlice } = require('@reduxjs/toolkit')
const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        isAuth: false,
        nikName: 'user',
        isLoading: false,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setIsAuth(state, action) {
            state.isAuth = action.payload;
        },
        setNikName(state, action) {
            state.nikName = action.payload;
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        }
    }
})
export default userSlice.reducer
export const { setUser, setIsAuth, setNikName, setIsLoading } = userSlice.actions