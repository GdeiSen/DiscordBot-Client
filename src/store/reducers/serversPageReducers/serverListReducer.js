const defaultState = {
    serverList: null,
};
export const serverListReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_SERVER_LIST":
            return action.payload;
        default:
            return state;
    }
}