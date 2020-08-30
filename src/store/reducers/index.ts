import modelReduce from "./modelReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
export default combineReducers({
  modelData: modelReduce,
  stateData: authReducer,
});
