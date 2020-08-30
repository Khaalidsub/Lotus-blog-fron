import {
  dataTypes,
  ModelActions,
  AuthActions,
  data,
  collection,
} from "../types";

export interface PostAction {}

export interface CategoryAction {}

export interface CredentialAction {}

export interface UserAction {}

// export interface Types {
//   type:
// }

export interface Action {
  dataType: dataTypes;
  payload: data | collection;
  type: ModelActions | AuthActions;
}
