import { createStore } from "redux";
import  lightReducer  from "./reducers/lightReducer";

const store = createStore(lightReducer);

export default store;