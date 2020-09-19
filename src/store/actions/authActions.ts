import { Dispatch, AnyAction } from "redux";
import lotusApi from "../../api";
import { authenticating, loggingOut } from "./dispatchTypes";
import { CredentialAction, UserAction } from "../interface";
import { ThunkDispatch } from "redux-thunk";
const auth = "Bearer ";
export const addUser = (user: UserAction) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    const response = await lotusApi.post("/signup", user);
    // dispatch(registering(response.data));
    localStorage.setItem("token", response.data);
    dispatch(getUserSession());
    return true;
  } catch (error) {
    console.log(error);

    return error;
  }
};
export const signIn = (user: CredentialAction) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    console.log("in signing action", user);

    const response = await lotusApi.post("/login", user);
    // console.log("in login", response, response.headers);

    localStorage.setItem("token", response.data);

    dispatch(getUserSession());
    return true;
  } catch (error) {
    console.log(error);

    return error;
  }
};
export const getUserSession = () => async (dispatch: Dispatch) => {
  try {
    const response = await lotusApi.get("/session", {
      headers: {
        Authorization: auth + localStorage.getItem("token"),
      },
    });
    console.log("response session", response, response.config);

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
    localStorage.setItem("token", "");
  } catch (error) {
    console.log(error);

    return error;
  }
};
