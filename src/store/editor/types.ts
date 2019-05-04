import { Action } from '../Action'

export type EditorState = {
    codeEditorContent: string
    compilationOutput: any[]
}

interface UpdateCompilationOutputAction {
  type: typeof Action.UPDATE_COMPILATION_OUTPUT
  payload: {
    compilationOutput: any[]
  }
}

interface UpdateCodeEditorContentAction {
    type: typeof Action.UPDATE_CODE_EDITOR_CONTENT
    payload: {
        codeEditorContent: string
    }
}

export type EditorActionTypes =
    | UpdateCompilationOutputAction
    | UpdateCodeEditorContentAction