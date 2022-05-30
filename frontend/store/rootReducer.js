import { ProductReducer } from "./products/product_reducer";
import { combineReducers } from "redux";
import { RootAppStateProps } from "../utils/types/reduxTypes";
import { AuthReducer } from "./user/auth_reducer";

export const combinedReducer = combineReducers<RootAppStateProps>({
//   UserReducer: UserReducer,
//   ProductReducer: ProductReducer,
});
