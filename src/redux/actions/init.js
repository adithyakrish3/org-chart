//----------------------------------------------------------------
// SET INITIAL VALUE
//----------------------------------------------------------------
export function setInitValue(payload) {
  const ACTION_NAME = "SET_VALUE";
  return function(dispatch) {
    dispatch({ type: ACTION_NAME, payload: payload });
  };
}