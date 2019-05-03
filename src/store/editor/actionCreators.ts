import { EditorActionTypes } from './types'
import { Action } from '../Action'

export function updateCompilationOutput(
  compilationOutput: any[]
): EditorActionTypes {
  return {
    type: Action.UPDATE_COMPILATION_OUTPUT,
    payload: {
      compilationOutput,
    },
  }
}
