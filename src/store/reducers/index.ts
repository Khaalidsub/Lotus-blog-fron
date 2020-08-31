import modelReduce from "./modelReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import {
  createForms, // optional
} from "react-redux-form";
import {
  initialUserRegister,
  initialUserLogin,
  initialUserEdit,
} from "./formReducer";
export default combineReducers({
  modelData: modelReduce,
  stateData: authReducer,
  ...createForms({
    userRegister: initialUserRegister,
    userLogin: initialUserLogin,
    userEdit: initialUserEdit,
  }),
});
