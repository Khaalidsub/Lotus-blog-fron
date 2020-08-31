import {
  dataTypes,
  ModelActions,
  AuthActions,
  data,
  collection,
} from "../types";

export interface PostAction {
  id?: string;
  title: string;
  blocks: any;
  time: number;
  category?: CategoryAction;
  user?: UserAction;
  image?: string;
}

export interface CategoryAction {
  id?: string;
  name: string;
}

export interface CredentialAction {
  email: string;
  password?: string;
}

export interface UserAction extends CredentialAction {
  id?: string;
  name: string;
  image?: string;
}

export interface AuthReducer {
  isSignedIn: boolean;
  USER: UserAction;
}

// export interface Types {
//   type:
// }

export interface Action {
  dataType: dataTypes;
  payload: data | collection | null;
  type: ModelActions | AuthActions;
}

export interface AuthAction {
  dataType: dataTypes;
  payload: UserAction;
  type: AuthActions;
}
