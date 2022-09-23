const defaultProperty = { default: true }

export default (state = defaultProperty, action) => {
  switch(action.type) {
    case "SET_ALTER":
      return action.payload
    default:
      return defaultProperty;
  }
};