import { INC_STEP, RESET_STEP } from "../actionType/actionTypes";

const initialState = {
  steps: 0,
};

const stepReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC_STEP:
      return {
        ...state,
        steps: state.steps + 1,
      };

      case RESET_STEP:
        return {
          ...state,
          steps: 0,
        };
    default:
      return state;
  }
};
export default stepReducer;