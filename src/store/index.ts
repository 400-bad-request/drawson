import {combineReducers} from "redux";
import {generalReducer} from "./general/reducer";

export const rootReducer = combineReducers({
   general: generalReducer
});

export type AppState = ReturnType<typeof rootReducer>