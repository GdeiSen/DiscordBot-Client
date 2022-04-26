const defaultState = {
    queue: [],
};
export const serverQueueReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_SERVER_QUEUE":
            return action.payload;
        default:
            return state;
    }
}