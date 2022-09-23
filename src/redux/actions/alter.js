//----------------------------------------------------------------
// SET INITIAL VALUE
//----------------------------------------------------------------

export function setAlterValue(payload) {
  const ACTION_NAME = "SET_ALTER";
  return function(dispatch) {
    dispatch({ type: ACTION_NAME, payload: payload });
  };
}