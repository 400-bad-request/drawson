import { EditorActionTypes, EditorState } from './types';
import { Action } from '../Action';

const initialState: EditorState = {
  compilationOutput: '[]',
  codeEditorContent: '',
  compilationError: null,
};

export function editorReducer(
  state = initialState,
  action: EditorActionTypes
): EditorState {
  switch (action.type) {
    case Action.UPDATE_COMPILATION_OUTPUT: {
      return {
        ...state,
        compilationOutput: action.payload.compilationOutput,
      };
    }
    case Action.UPDATE_CODE_EDITOR_CONTENT: {
      return {
        ...state,
        codeEditorContent: action.payload.codeEditorContent,
      };
    }
    case Action.UPDATE_COMPILATION_ERROR: {
      return {
        ...state,
        compilationError: action.payload.compilationError,
      };
    }
    default:
      return state;
  }
}
