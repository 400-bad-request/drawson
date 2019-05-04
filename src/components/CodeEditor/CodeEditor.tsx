import React, {FunctionComponent} from "react";
import AceEditor from "react-ace";
import "./CodeEditor.scss";

import "brace/theme/monokai";
import {AppState} from "../../store";
import {connect} from "react-redux";
import {updateCodeEditorContent} from "../../store/editor/actions";

interface IProps {
  width: number;
  height: number;
  codeEditorContent: string;
  updateCodeEditorContent: (codeEditorContent: string) => any;
}

export const CodeEditorComponent = (props: IProps) => {
    const onChange = (newValue: string) => {
        props.updateCodeEditorContent(newValue);
    };

    return (
      <AceEditor
          theme={"github"}
          width={props.width + "px"}
          height={props.height + "px"}
          fontSize={16}
          value={props.codeEditorContent}
          onChange={onChange}
      />
  );
};

const mapStateToProps = (state: AppState) => ({
    codeEditorContent: state.editor.codeEditorContent
});

const dispatchToProps = {
    updateCodeEditorContent: updateCodeEditorContent
};

export const CodeEditor = connect(mapStateToProps, dispatchToProps)(CodeEditorComponent);