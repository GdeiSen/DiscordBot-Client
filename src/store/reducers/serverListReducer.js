const defaultState = {
    serverList: null,
};
export const serverListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SERVER_LIST":
            return { ...state, serverList: action.payload };
        default:
            return state;
    }
}