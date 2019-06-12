import React from 'react';
import AceEditor from 'react-ace';
import 'brace/theme/github';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import './CodeDisplay.scss';

interface Props {
  width: number;
  height: number;
  compilationOutput: string;
  error: string;
}

const CodeDisplayComponent: React.FC<Props> = ({
  width,
  height,
  compilationOutput,
  error,
}) => {
  if (error === null) {
    return (
      <AceEditor
        theme={'github'}
        width={width + 'px'}
        height={height + 'px'}
        fontSize={16}
        readOnly={true}
        mode={'json'}
        value={compilationOutput}
      />
    );
  } else {
    return (
      <div
        className="ErrorBox"
        style={{ width: width + 'px', height: height + 'px' }}
      >
        <pre>
          <code className={"BoldTitle"}>Error:</code>
        </pre>
        <pre>
          <code>{error}</code>
        </pre>
      </div>
    );
  }
};

const mapStateToProps = (state: AppState) => ({
  compilationOutput: state.editor.compilationOutput,
  error: state.editor.compilationError,
});

export const CodeDisplay = connect(mapStateToProps)(CodeDisplayComponent);
