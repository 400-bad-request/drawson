import {EditorActionTypes, UPDATE_COMPILATION_OUTPUT, UPDATE_CODE_EDITOR_CONTENT} from "./types";

export function updateCompilationOutput(compilationOutput: any[]): EditorActionTypes {
    return {
        type: UPDATE_COMPILATION_OUTPUT,
        payload: {
            compilationOutput
        }
    }
}

export function updateCodeEditorContent(codeEditorContent: string): EditorActionTypes {
    return {
        type: UPDATE_CODE_EDITOR_CONTENT,
        payload: {
            codeEditorContent: codeEditorContent
        }
    }
}