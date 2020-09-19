import { dataTypes, ModelActions, AuthActions, data } from "../types";
import { Action, UserAction, AuthAction } from "../interface";

//toggle
export const toggling = <T>(data: data): Action<T> => ({
  type: ModelActions.select,
  dataType: dataTypes.select,
  payload: data,
});

//model
export const selecting = <T>(data: T): Action<T> => ({
  type: ModelActions.select,
  dataType: dataTypes.select,
  payload: data,
});

export const fetching = <T>(
  data: Array<T>,
  dataType: dataTypes
): Action<T> => ({
  type: ModelActions.fetch,
  dataType: dataType,
  payload: data,
});

export const deleting = <T>(data: T, dataType: dataTypes): Action<T> => ({
  type: ModelActions.delete,
  dataType: dataType,
  payload: data,
});

export const editing = <T>(data: T, dataType: dataTypes): Action<T> => ({
  type: ModelActions.edit,
  dataType: dataType,
  payload: data,
});

export const adding = <T>(data: T, dataType: dataTypes): Action<T> => ({
  type: ModelActions.add,
  dataType: dataType,
  payload: data,
});

export const loggingOut = (): AuthAction => ({
  type: AuthActions.logout,
  dataType: dataTypes.user,
  payload: {
    name: "",
    email: "",
    password: "",
    image: "",
    id: "",
    bookMarkedPosts: [],
    likedPosts: [],
  },
});

export const authenticating = (data: UserAction): AuthAction => ({
  type: AuthActions.session,
  dataType: dataTypes.user,
  payload: data,
});
