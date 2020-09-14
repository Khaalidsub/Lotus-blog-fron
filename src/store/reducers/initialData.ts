import { dataTypes, data } from "../types";
import {
  CategoryAction,
  UserAction,
  PostAction,
  ModelReducer,
  AuthReducer,
} from "../interface";

export const initialData = {
  modelData: {
    [dataTypes.post]: [] as PostAction[],

    [dataTypes.category]: [] as CategoryAction[],

    [dataTypes.user]: [] as UserAction[],

    [dataTypes.select]: {} as data,
  } as ModelReducer,
  stateData: {
    isSignedIn: false,
    [dataTypes.user]: {
      id: "",
      name: "",
      email: "",
    } as UserAction,
  } as AuthReducer,
};
