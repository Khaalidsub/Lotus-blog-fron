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
import { CombinedReducer } from "../interface";
export default combineReducers<CombinedReducer>({
  modelData: modelReduce,
  stateData: authReducer,
  ...createForms({
    userRegister: initialUserRegister,
    userLogin: initialUserLogin,
    userEdit: initialUserEdit,
  }),
});
