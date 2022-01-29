const defaultState = {
    tokenManager: null
};
export const tokenManagerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_TOKEN_MANAGER":
            return { ...state, tokenManager: action.payload };
        default:
            return state;
    }
}