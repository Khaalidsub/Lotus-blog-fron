import { Action } from "../interface";
import { collection } from "../types";
import { initialData } from "./initialData";

export default (storeData: collection = [], action: Action): any => {
  switch (action.type) {
    default:
      return storeData || initialData.modelData;
  }
};
