import { INC_STEP, RESET_STEP } from "../actionType/actionTypes";

const resetStep = () => {
  return {
    type: RESET_STEP,
  };
};

const incStep = () => {
  return {
    type: INC_STEP,
  };
};

export { resetStep, incStep };