/** @format */
/* eslint-disable no-redeclare */

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
      newState.skills = action.values.Skills;
      return newState;
    case "addNewSkill":
      var newState = { ...state };
      newState.skills = [...newState.skills, action.data.newSkill];
      return newState;
    case "removeSkill":
      var newState = { ...state };
      const newSkills = [...newState.skills];
      newSkills.splice(action.data.index, 1);
      newState.skills = newSkills;
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
