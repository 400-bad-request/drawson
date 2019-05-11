import React, { FunctionComponent } from 'react';
import AceEditor from 'react-ace';
import './CodeEditor.scss';

import 'brace/theme/monokai';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { updateCodeEditorContent } from '../../store/editor/actionCreators';
import { Compilator } from '../../utils/Compilator';

interface Props {
  width: number;
  height: number;
  codeEditorContent: string;
  updateCodeEditorContent: (codeEditorContent: string) => any;
}

let timeout: any;

const compile = (code: string) => {
  const match = Compilator.grammar.match(code);
  if (match.succeeded()) {
    console.log('code compiled properly');
  } else {
    console.log('compilation failed');
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

  const deferredCompilation = (code: string) => {
    const cmp = () => compile(code);
    if (timeout) {
      clearTimeout(timeout);
      timeout = setTimeout(cmp, 1500);
    } else {
      timeout = setTimeout(cmp, 1500);
    }
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
