export const playbackVisibleReduser = (state = false, action) => {
    switch (action.type) {
        case "SET_PLAYBACK_VISIBLE":
            return action.payload;
        default:
            return state;
    }
}