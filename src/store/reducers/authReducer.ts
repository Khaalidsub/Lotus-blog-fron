import { AuthActions } from "../types";
import { AuthAction, AuthReducer } from "../interface";
import { initialData } from "./initialData";

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
