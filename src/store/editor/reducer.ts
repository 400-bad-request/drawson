import { EditorActionTypes, EditorState } from './types'
import { MockState } from '../../data/MockState'
import { Action } from '../Action'

const initialState: EditorState = {
  compilationOutput: MockState,
}

export function editorReducer(
  state = initialState,
  action: EditorActionTypes
): EditorState {
  switch (action.type) {
    case Action.UPDATE_COMPILATION_OUTPUT: {
      return {
        ...state,
        compilationOutput: action.payload.compilationOutput,
      }
    }
    default:
      return state
  }
}
