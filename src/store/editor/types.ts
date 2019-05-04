export const UPDATE_COMPILATION_OUTPUT = 'UPDATE_COMPILATION_OUTPUT';
export const UPDATE_CODE_EDITOR_CONTENT = 'UPDATE_CODE_EDITOR_CONTENT';

export type EditorState = {
    codeEditorContent: string;
    compilationOutput: any[];
}

interface UpdateCompilationOutputAction {
    type: typeof UPDATE_COMPILATION_OUTPUT;
    payload: {
        compilationOutput: any[];
    }
}

interface UpdateCodeEditorContentAction {
    type: typeof UPDATE_CODE_EDITOR_CONTENT;
    payload: {
        codeEditorContent: string;
    }
}

export type EditorActionTypes =
    | UpdateCompilationOutputAction
    | UpdateCodeEditorContentAction