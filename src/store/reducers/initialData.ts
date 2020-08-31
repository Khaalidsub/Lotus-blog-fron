import { dataTypes } from "../types";

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
