/** @format */

export const useForm = (state, action) => {
  switch (action.type) {
    case "change":
      const newstate = { ...state };
      newstate[action.data.type] = action.data.payload;
      return newstate;
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
