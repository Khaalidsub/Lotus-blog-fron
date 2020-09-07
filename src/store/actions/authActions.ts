import { Dispatch, AnyAction } from "redux";
import lotusApi from "../../api";
import { authenticating, loggingOut } from "./dispatchTypes";
import { UserAction } from "../interface";
import { ThunkDispatch } from "redux-thunk";

export const addUser = (user: UserAction) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    await lotusApi.post("/signup", user);
    // dispatch(registering(response.data));
    dispatch(getUserSession());
  } catch (error) {
    console.log(error);

    return error;
  }
};
export const signIn = (user: Credential) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    console.log("in signing action", user);

    const response = await lotusApi.post("/login", user);
    console.log("in login", response, response.config.jar);

    dispatch(getUserSession());
  } catch (error) {
    console.log(error);

    return error;
  }
};
export const getUserSession = () => async (dispatch: Dispatch) => {
  try {
    const response = await lotusApi.get("/session");
    console.log("response session", response, response.config.jar);

    dispatch(authenticating(response.data));
  } catch (error) {
    console.log(error);

    return error;
  }
};
export const logout = () => async (dispatch: Dispatch) => {
  try {
    await lotusApi.get("/logout");
    dispatch(loggingOut());
  } catch (error) {
    console.log(error);

    return error;
  }
};
