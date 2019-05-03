import {combineReducers} from "redux";
import {generalReducer} from "./general/reducer";
import {editorReducer} from "./editor/reducer";

export const rootReducer = combineReducers({
   general: generalReducer,
   editor: editorReducer
});

export type AppState = ReturnType<typeof rootReducer>