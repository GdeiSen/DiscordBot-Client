const defaultState = {
  currentServer: null,
};
export const currentServerReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_SERVER":
      return action.payload;
    default:
      return state;
  }
}