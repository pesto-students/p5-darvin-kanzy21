import { LIGHT_OFF, LIGHT_DIM, LIGHT_FULL } from "../actionType/actionTypes";

const initialState = {
  colorShade: '#000000',
};

const lightReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIGHT_OFF:
      return {
        ...state,
        colorShade: '#000000',
      };

      case LIGHT_DIM:
        return {
          ...state,
          colorShade: '#F0FFFF',
        };
      case LIGHT_FULL:
      return {
        ...state,
          colorShade: '#FFFFFF',
      };
    default:
      return state;
  }
};
export default lightReducer;