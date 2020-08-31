import { Dispatch } from "redux";
import lotusApi from "../../api";
import { authenticating, loggingOut } from "./dispatchTypes";
import { UserAction } from "../interface";

export const addUser = (user: UserAction) => async () => {
  try {
    await lotusApi.post("/signUp", user);
    // dispatch(registering(response.data));
    return getUserSession();
  } catch (error) {
    console.log(error);

    return error;
  }
};
export const signIn = (user: Credential) => async () => {
  try {
    await lotusApi.post("/login", user);
    return getUserSession();
  } catch (error) {
    console.log(error);

    return error;
  }
};
export const getUserSession = () => async (dispatch: Dispatch) => {
  try {
    const response = await lotusApi.get("/");
    dispatch(authenticating(response.data));
  } catch (error) {
    console.log(error);

    return error;
  }
};
export const logout = () => async (dispatch: Dispatch) => {
  try {
    const response = await lotusApi.get("/logout");
    dispatch(loggingOut());
  } catch (error) {
    console.log(error);

    return error;
  }
};
