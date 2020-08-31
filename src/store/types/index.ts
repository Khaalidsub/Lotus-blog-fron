import {
  PostAction,
  CategoryAction,
  CredentialAction,
  UserAction,
} from "../interface";

export enum ModelActions {
  fetch = "FETCH", //ffetch as a list
  select = "SELECT", //select one with an id
  edit = "EDIT", //edit one model
  delete = "DELETE", //delete a model
  add = "ADD", //add a new data
}
export enum AuthActions {
  login = "LOGIN", //login
  session = "SESSION", //fetch if there is any session
  logout = "LOGOUT", //logout
  signUp = "REGISTER",
}

export enum dataTypes {
  post = "POST",
  category = "CATEGORY",
  user = "USER",
}
export type data =
  | PostAction
  | CategoryAction
  | CredentialAction
  | UserAction
  | number;
export type collection =
  | PostAction[]
  | CategoryAction[]
  | CredentialAction[]
  | UserAction[];

export type auth = Credential | PostAction;
