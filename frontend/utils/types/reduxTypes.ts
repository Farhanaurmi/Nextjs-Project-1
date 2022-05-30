import { SingleProductProps } from "./landingpage";

export interface UserLoginProps {
  status: boolean;
  data: UserDataProps;
}

export interface UserDataProps {
  user_id: number;
  email: string;
  access_token: string;
  refresh_token: string;
}


export interface AuthRootStateType {
  userInfo: UserLoginProps | null;
  isLoggedIn: boolean;
}


export interface RootAppStateProps {
  AuthReducer: AuthRootStateType;
}

export interface userSignupProps {
  status: boolean;
  data: UserDataProps;
}
