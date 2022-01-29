const defaultState = {
  currentServer: null,
};
export const currentServerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_CURRENT_SERVER":
      return { ...state, currentServer: action.payload };
    default:
      return state;
  }
}