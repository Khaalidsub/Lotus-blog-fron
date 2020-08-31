import { AuthActions, collection, data } from "../types";
import { Action, UserAction, AuthAction, AuthReducer } from "../interface";
import { initialData } from "./initialData";
import { Reducer } from "react";

export default (storeData: AuthReducer, action: AuthAction): any => {
  switch (action.type) {
    case AuthActions.login:
      return {
        ...storeData,
        ...action.payload,
        isSignedIn: true,
      };
    case AuthActions.logout:
      return {
        ...storeData,
        ...action.payload,
        isSignedIn: false,
      };
    case AuthActions.session:
      return {
        ...storeData,
        ...action.payload,
        isSignedIn: true,
      };
    case AuthActions.signUp:
      return {
        ...storeData,
        ...action.payload,
        isSignedIn: true,
      };
    default:
      return storeData || initialData.stateData;
  }
};
