import {
  dataTypes,
  ModelActions,
  AuthActions,
  data,
  collection,
} from "../types";
import { Action } from "../interface";

//model
export const selecting = (data: data, dataType: dataTypes): Action => ({
  type: ModelActions.select,
  dataType: dataType,
  payload: data,
});
export const fetching = (data: collection, dataType: dataTypes): Action => ({
  type: ModelActions.fetch,
  dataType: dataType,
  payload: data,
});
export const deleting = (data: number, dataType: dataTypes): Action => ({
  type: ModelActions.delete,
  dataType: dataType,
  payload: data,
});
export const editing = (data: data, dataType: dataTypes): Action => ({
  type: ModelActions.edit,
  dataType: dataType,
  payload: data,
});
export const adding = (data: data, dataType: dataTypes): Action => ({
  type: ModelActions.add,
  dataType: dataType,
  payload: data,
});

//auth
export const registering = (data: data): Action => ({
  type: AuthActions.signUp,
  dataType: dataTypes.user,
  payload: data,
});

export const loggingOut = (): Action => ({
  type: AuthActions.logout,
  dataType: dataTypes.user,
  payload: null,
});
export const authenticating = (data: data): Action => ({
  type: AuthActions.session,
  dataType: dataTypes.user,
  payload: data,
});
export const logging = (data: data, dataType: dataTypes): Action => ({
  type: AuthActions.login,
  dataType: dataType,
  payload: data,
});
