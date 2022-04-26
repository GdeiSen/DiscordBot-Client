export const externalServerStatusReducer = (state = 'disconnected', action) => {
    switch (action.type) {
        case "SET_EXTERNAL_SERVER_STATUS":
            return action.payload;
        default:
            return state;
    }
}