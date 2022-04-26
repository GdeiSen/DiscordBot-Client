const defaultState = {
    websocketManager: null
};
export const websocketManagerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_WEBSOCKET_MANAGER":
            return action.payload;
        default:
            return state;
    }
}