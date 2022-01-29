const defaultState = {
  userList: null,
};
export const userListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER_LIST":
      return { ...state, userList: action.payload };
    default:
      return state;
  }
}