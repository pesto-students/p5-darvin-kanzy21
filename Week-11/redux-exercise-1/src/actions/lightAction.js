import { LIGHT_OFF, LIGHT_DIM,LIGHT_FULL } from "../actionType/actionTypes";

const lightOff = () => {
  return {
    type: LIGHT_OFF,
  };
};

const lightDim = () => {
  return {
    type: LIGHT_DIM,
  };
};
const lightFull = () => {
    return {
      type: LIGHT_FULL,
    };
  };

export { lightOff, lightDim, lightFull };