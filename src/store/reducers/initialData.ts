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

    [dataTypes.category]: [
      { id: "5f2d1e270b0f544e0cd38ada", name: "Programming" },
    ] as CategoryAction[],

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
