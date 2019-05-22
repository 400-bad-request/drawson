import { Action } from '../Action';
import { EditorActionTypes, EditorState } from './types';

const initialState: EditorState = {
  compilationOutput: '[]',
  codeEditorContent: '',
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
    default:
      return state;
  }
}
