import { Dispatch } from "redux";
import lotusApi from "../../api";
import {
  registering,
  logging,
  authenticating,
  loggingOut,
} from "./dispatchTypes";
import { UserAction } from "../interface";
import { dataTypes } from "../types";

export const addUser = (user: UserAction) => async (dispatch: Dispatch) => {
  try {
    const response = await lotusApi.post("/signUp", user);
    dispatch(registering(response.data));
  } catch (error) {
    console.log(error);

    return error;
  }
};
export const signIn = (user: Credential) => async (dispatch: Dispatch) => {
  try {
    const response = await lotusApi.post("/login", user);
    dispatch(logging(response.data, dataTypes.user));
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
