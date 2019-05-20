import React, {FunctionComponent} from 'react';
import AceEditor from 'react-ace';
import './CodeEditor.scss';

import 'brace/theme/monokai';
import {AppState} from '../../store';
import {connect} from 'react-redux';
import {updateCodeEditorContent} from '../../store/editor/actionCreators';
import {Compiler} from '../../compiler/Compiler';

interface Props {
  width: number;
  height: number;
  codeEditorContent: string;
  updateCodeEditorContent: (codeEditorContent: string) => any;
}

let timeout: any;

const deferredCompilation = (code: string) => {
  const cmp = () => Compiler.compile(code);
  if (timeout) {
    clearTimeout(timeout);
    timeout = setTimeout(cmp, 1500);
  } else {
    timeout = setTimeout(cmp, 1500);
  }
};

export const CodeEditorComponent: FunctionComponent<Props> = ({
  width,
  height,
  codeEditorContent,
  updateCodeEditorContent,
}) => {
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
  updateCodeEditorContent: updateCodeEditorContent,
};

export const CodeEditor = connect(
  mapStateToProps,
  dispatchToProps
)(CodeEditorComponent);
