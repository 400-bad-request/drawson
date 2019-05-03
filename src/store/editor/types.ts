import { Action } from '../Action'

export type EditorState = {
  compilationOutput: any[]
}

interface UpdateCompilationOutputAction {
  type: typeof Action.UPDATE_COMPILATION_OUTPUT
  payload: {
    compilationOutput: any[]
  }
}

export type EditorActionTypes = UpdateCompilationOutputAction
