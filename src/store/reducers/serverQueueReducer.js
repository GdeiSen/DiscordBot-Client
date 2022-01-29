const defaultState = {
    queue: [],
};
export const serverQueueReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SERVER_QUEUE":
            return { ...state, queue: action.payload };
        default:
            return state;
    }
}