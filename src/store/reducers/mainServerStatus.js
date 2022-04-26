export const mainServerStatusReducer = (state = "disconnected", action) => {
    switch (action.type) {
        case "SET_MAIN_SERVER_STATUS":
            return action.payload;
        default:
            return state;
    }
}