import {EditorActionTypes, EditorState, UPDATE_COMPILATION_OUTPUT, UPDATE_CODE_EDITOR_CONTENT} from "./types";
import {MockState} from "../../data/MockState";

const initialState: EditorState = {
    compilationOutput: MockState,
    codeEditorContent: ""
};

export function editorReducer(
    state = initialState,
    action: EditorActionTypes
): EditorState {
    switch (action.type) {
        case UPDATE_COMPILATION_OUTPUT: {
            return {
                ...state,
                compilationOutput: action.payload.compilationOutput
            }
        }
        case UPDATE_CODE_EDITOR_CONTENT: {
            return {
                ...state,
                codeEditorContent: action.payload.codeEditorContent
            }
        }
        default:
            return state;
    }
}