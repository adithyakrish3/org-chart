export function setSearchInfo(payload) {
  const ACTION_NAME = "SET_SEARCH";
  return function(dispatch) {
    dispatch({ type: ACTION_NAME, payload: payload });
  };
}