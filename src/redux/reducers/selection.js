const defaultProperty = { default: true }

export default (state = defaultProperty, action) => {
  switch(action.type) {
    case "SET_TEAM":
      return action.payload;
    default:
      return state;
  }
};