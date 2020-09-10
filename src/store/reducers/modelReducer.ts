import { ModelActions } from "../types";
import { Action, IModel, ModelReducer } from "../interface";
import { initialData } from "./initialData";

export default (
  storeData: ModelReducer,
  action: Action<IModel>
): ModelReducer => {
  switch (action.type) {
    case ModelActions.add:
      return {
        ...storeData,
        [action.dataType]: storeData[action.dataType].concat(action.payload),
      };

    case ModelActions.fetch:
      return {
        ...storeData,
        [action.dataType]: action.payload,
      };

    case ModelActions.delete:
      // action.payload  as IModel
      return {
        ...storeData,
        [action.dataType]: storeData[action.dataType].filter(
          (data: IModel) => data.id !== (action.payload as IModel).id
        ),
      };
    case ModelActions.select:
      return {
        ...storeData,
        [action.dataType]: action.payload,
      };
    case ModelActions.edit:
      return {
        ...storeData,
        [action.dataType]: storeData[action.dataType].map((data: IModel) =>
          data.id === (action.payload as IModel).id ? action.payload : data
        ),
      };
    default:
      return storeData || initialData.modelData;
  }
};
