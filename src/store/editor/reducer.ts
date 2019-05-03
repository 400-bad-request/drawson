import {
  EditorActionTypes,
  EditorState,
  UPDATE_COMPILATION_OUTPUT,
} from './types'
import { MockState } from '../../data/MockState'

const initialState: EditorState = {
  compilationOutput: MockState,
}

export function editorReducer(
  state = initialState,
  action: EditorActionTypes
): EditorState {
  switch (action.type) {
    case UPDATE_COMPILATION_OUTPUT: {
      return {
        ...state,
        compilationOutput: action.payload.compilationOutput,
      }
    }
    default:
      return state
  }
}
