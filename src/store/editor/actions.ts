import {EditorActionTypes, UPDATE_COMPILATION_OUTPUT} from "./types";

export function updateCompilationOutput(compilationOutput: any[]): EditorActionTypes {
    return {
        type: UPDATE_COMPILATION_OUTPUT,
        payload: {
            compilationOutput
        }
    }
}