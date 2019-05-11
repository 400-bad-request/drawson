import React, { FunctionComponent } from 'react';
import AceEditor from 'react-ace';

import 'brace/theme/monokai';
import { MockState } from '../../data/MockState';
import { AppState } from '../../store';
import { connect } from 'react-redux';

interface Props {
  width: number;
  height: number;
  compilationOutput: any[];
}

const CodeDisplayComponent: FunctionComponent<Props> = ({ width, height }) => {
  return (
    <AceEditor
      theme={'github'}
      width={width + 'px'}
      height={height + 'px'}
      fontSize={16}
      readOnly={true}
      mode={'json'}
      value={JSON.stringify(MockState, null, 3)}
    />
  );
};

const mapStateToProps = (state: AppState) => ({
  compilationOutput: state.editor.compilationOutput,
});

export const CodeDisplay = connect(mapStateToProps)(CodeDisplayComponent);
