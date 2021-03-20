/** @format */

export const useForm = (state, action) => {
  switch (action.type) {
    case "change":
      const newstate = { ...state };
      newstate[action.data.type] = action.data.payload;
      return newstate;
    case "edituserInitialState":
      var newState = { ...state };
      newState.Name = action.values.Name;
      newState.Bio = action.values.Bio;
      newState.Email = action.values.Email;
      return newState;
    default:
      return state;
  }
};

export const onChangehandler = (dispatch, name, value) => {
  dispatch({
    type: "change",
    data: {
      payload: value,
      type: name,
    },
  });
};
