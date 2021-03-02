/** @format */

export const useForm = (state, action) => {
  switch (action.type) {
    case "change":
      const newstate = { ...state };
      newstate[action.data.type] = action.data.payload;
      console.log("new state", newstate);
      return newstate;
    default:
      return state;
  }
};
