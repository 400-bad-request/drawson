import React, { FunctionComponent } from 'react';
import AceEditor from 'react-ace';
import './CodeEditor.scss';

import 'brace/theme/monokai';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import {
  updateCodeEditorContent,
  updateCompilationOutput,
} from '../../store/editor/actionCreators';
import { Compiler } from '../../compiler/Compiler';

interface Props {
  width: number;
  height: number;
  codeEditorContent: string;
  updateCodeEditorContent: (codeEditorContent: string) => void;
  updateCompilationOutput: (output: string) => void;
}

let timeout: any;

export const CodeEditorComponent: FunctionComponent<Props> = ({
  width,
  height,
  codeEditorContent,
  updateCodeEditorContent,
  updateCompilationOutput,
}) => {
  const compile = async code => {
    let output = await Compiler.compile(code);
    updateCompilationOutput(output);
  };

  const deferredCompilation = (code: string) => {
    let cmp = () => compile(code);
    if (timeout) {
      clearTimeout(timeout);
      timeout = setTimeout(cmp, 1500);
    } else {
      timeout = setTimeout(cmp, 1500);
    }
  };

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

const dispatchToProps = {
  updateCodeEditorContent,
  updateCompilationOutput,
};

export const CodeEditor = connect(
  mapStateToProps,
  dispatchToProps
)(CodeEditorComponent);
