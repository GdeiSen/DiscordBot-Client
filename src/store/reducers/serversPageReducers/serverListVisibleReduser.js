export const serverListVisibleReduser = (state = true, action) => {
    switch (action.type) {
        case "SET_SERVER_LIST_VISIBLE":
            return action.payload;
        default:
            return state;
    }
}