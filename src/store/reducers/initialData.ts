import { dataTypes } from "../types";
import { PostAction } from "../interface";

export const initialData = {
  modelData: {
    [dataTypes.post]: [],
    [dataTypes.category]: [],
    [dataTypes.user]: [],
  },
  stateData: {
    isSignedIn: false,
    [dataTypes.user]: {
      name: "",
      email: "",

      password: "",
    },
  },
};
