import React from 'react';
import AceEditor from 'react-ace';
import './CodeEditor.scss';

import 'brace/theme/monokai';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import {
  updateCodeEditorContent,
  updateCompilationOutput,
  updateErrorOutput,
} from '../../store/editor/actionCreators';
import { Compiler } from '../../compiler/Compiler';

interface Props {
  width: number;
  height: number;
  codeEditorContent: string;
  updateCodeEditorContent(codeEditorContent: string): void;
  updateCompilationOutput(output: string): void;
  updateErrorOutput(string): void;
}

let timeout: any;

export const CodeEditorComponent: React.FC<Props> = ({
  width,
  height,
  codeEditorContent,
  updateCodeEditorContent,
  updateCompilationOutput,
  updateErrorOutput,
}) => {
  async function compile(code) {
    updateErrorOutput(null);
    const result = await Compiler.compile(code);

    if (result.status) {
      updateCompilationOutput(result.compilationOutput);
    } else {
      console.error(result.error);
      updateErrorOutput(result.error);
    }
  }

  function deferredCompilation(code: string) {
    let cmp = () => compile(code);
    if (timeout) {
      clearTimeout(timeout);
      timeout = setTimeout(cmp, 1500);
    } else {
      timeout = setTimeout(cmp, 1500);
    }
  }

  const onChange = (newValue: string) => {
    updateCodeEditorContent(newValue);
    deferredCompilation(newValue);
  };

  return (
    <AceEditor
      theme={'github'}
      width={width + 'px'}
      height={height + 'px'}
      fontSize={16}
      value={codeEditorContent}
      onChange={onChange}
    />
  );
};

const mapStateToProps = (state: AppState) => ({
  codeEditorContent: state.editor.codeEditorContent,
});

const mapDispatchToProps = {
  updateCodeEditorContent,
  updateCompilationOutput,
  updateErrorOutput,
};

export const CodeEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeEditorComponent);
