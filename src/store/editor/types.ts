import { Action } from '../Action';

export type EditorState = {
  codeEditorContent: string;
  compilationOutput: string;
};

interface UpdateCompilationOutputAction {
  type: typeof Action.UPDATE_COMPILATION_OUTPUT;
  payload: {
    compilationOutput: string;
  };
}

interface UpdateCodeEditorContentAction {
  type: typeof Action.UPDATE_CODE_EDITOR_CONTENT;
  payload: {
    codeEditorContent: string;
  };
}

export type EditorActionTypes =
  | UpdateCompilationOutputAction
  | UpdateCodeEditorContentAction;
