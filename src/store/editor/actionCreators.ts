import { EditorActionTypes } from './types';
import { Action } from '../Action';

export function updateCompilationOutput(
  compilationOutput: string
): EditorActionTypes {
  return {
    type: Action.UPDATE_COMPILATION_OUTPUT,
    payload: {
      compilationOutput,
    },
  };
}

export function updateCodeEditorContent(
  codeEditorContent: string
): EditorActionTypes {
  return {
    type: Action.UPDATE_CODE_EDITOR_CONTENT,
    payload: {
      codeEditorContent,
    },
  };
}
