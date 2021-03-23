/** @format */
/* eslint-disable no-redeclare */

export const CHANGE="change"
export const EDITUSERINITIALSTATE="edituserInitialState"
export const PUSHARRAY="pushArray"
export const POPWITHINDEXARRAY="popWithIndexArray"
export const useForm = (state, action) => {
  switch (action.type) {
    case CHANGE:
      const newstate = { ...state };
      newstate[action.data.key] = action.data.value;
      return newstate;
    case EDITUSERINITIALSTATE:
      var newState = { ...state, ...action.values };
      console.log("from new state", newState);
      return newState;
    case PUSHARRAY:
      var newState = { ...state };
      // console.log(newState["skills"],'array',action.data.key,newState);
      newState[action.data.key] = [
        ...newState[action.data.key],
        action.data.value,
      ];
      console.log("after append", newState[action.data.key]);
      return newState;
    case POPWITHINDEXARRAY:
      var newState = { ...state };
      const newSkills = [...(newState[action.data.key] || [])];
      newSkills.splice(action.data.index, 1);
      newState[action.data.key] = newSkills;
      return newState;

    default:
      return state;
  }
};

export const onChangehandler = (dispatch, key, value) => {
  dispatch({
    type: "change",
    data: {
      key: key,
      value: value,
    },
  });
};
