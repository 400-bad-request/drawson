export const UPDATE_COMPILATION_OUTPUT = 'UPDATE_COMPILATION_OUTPUT'

export type EditorState = {
  compilationOutput: any[]
}

interface UpdateCompilationOutputAction {
  type: typeof UPDATE_COMPILATION_OUTPUT
  payload: {
    compilationOutput: any[]
  }
}

export type EditorActionTypes = UpdateCompilationOutputAction
