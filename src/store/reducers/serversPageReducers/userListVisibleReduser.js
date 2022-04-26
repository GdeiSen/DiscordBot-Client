export const userListVisibleReducer = (state = false, action) => {
    switch (action.type) {
        case "SET_USER_LIST_VISIBLE":
            return action.payload;
        default:
            return state;
    }
}