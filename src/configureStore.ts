import {createStore} from "redux";
import {rootReducer} from "./store";

export default function configureStore() {
    return createStore(rootReducer)
}