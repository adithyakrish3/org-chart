export function setTeamSelected(payload) {
  const ACTION_NAME = "SET_TEAM";
  return function(dispatch) {
    dispatch({ type: ACTION_NAME, payload: payload });
  };
}