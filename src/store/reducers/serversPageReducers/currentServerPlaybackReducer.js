const defaultState = {
    currentServerPlayback: null,
};
export const currentServerPlaybackReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_CURRENT_SERVER_PLAYBACK":
            return action.payload;
        default:
            return state;
    }
}