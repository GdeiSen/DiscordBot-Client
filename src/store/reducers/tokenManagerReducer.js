const defaultState = {
    tokenManager: null
};
export const tokenManagerReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_TOKEN_MANAGER":
            return action.payload
        default:
            return state;
    }
}