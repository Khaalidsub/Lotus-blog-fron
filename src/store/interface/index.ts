import {
  dataTypes,
  ModelActions,
  AuthActions,
  data,
  collection,
} from "../types";
import { OutputData } from "@editorjs/editorjs";
import { Blocks } from "@editorjs/editorjs/types/api";

export interface IModel {
  id?: string;
}
export interface PostAction extends IModel {
  id?: string;
  title: string;
  subtitle: string;
  blocks: Blocks;
  createdAt: Date;
  category?: CategoryAction | string;
  user?: UserAction | string;
  image?: string;
}

export interface CategoryAction extends IModel {
  id?: string;
  name: string;
}

export interface CredentialAction {
  email: string;
  password?: string;
}

export interface UserAction extends CredentialAction, IModel {
  id?: string;
  name: string;
  image?: string;
}

export interface AuthReducer {
  isSignedIn: boolean;
  [dataTypes.user]: UserAction;
}

export interface ModelReducer {
  [dataTypes.post]: PostAction[];
  [dataTypes.category]: CategoryAction[];
  [dataTypes.user]: UserAction[];
  [dataTypes.select]: data;
}

export interface CombinedReducer {
  modelData: ModelReducer;
  stateData: AuthReducer;
}
// export interface Types {
//   type:
// }

interface PayLoad<T> {
  id: string;
}

export interface Action<T> {
  dataType: dataTypes;
  payload: T | Array<T>;
  type: ModelActions | AuthActions;
}

export interface AuthAction {
  dataType: dataTypes;
  payload: UserAction;
  type: AuthActions;
}
