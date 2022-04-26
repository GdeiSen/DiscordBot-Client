const defaultState = {
  userList: null,
};
export const userListReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER_LIST":
      return action.payload
    default:
      return state;
  }
}