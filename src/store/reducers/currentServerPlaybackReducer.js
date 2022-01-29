const defaultState = {
    currentServerPlayback: null,
};
export const currentServerPlaybackReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_CURRENT_SERVER_PLAYBACK":
            return { ...state, currentServerPlayback: action.payload };
        default:
            return state;
    }
}