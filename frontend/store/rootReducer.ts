import { combineReducers } from "redux";
import { RootAppStateProps } from "../utils/types/reduxTypes";
import { AuthReducer } from "./users/user_reducer";

export const combinedReducer = combineReducers<RootAppStateProps>({
  AuthReducer: AuthReducer,
});