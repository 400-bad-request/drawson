import React, { FunctionComponent } from 'react'
import AceEditor from 'react-ace'
import './CodeEditor.scss'

import 'brace/theme/monokai'
import { AppState } from '../../store'
import { connect } from 'react-redux'
import { EditorState } from '../../store/editor/types'

interface Props {
  width: number
  height: number
}

const CodeEditorComponent: FunctionComponent<Props> = ({ width, height }) => {
  return (
    <AceEditor
      theme={'github'}
      width={width + 'px'}
      height={height + 'px'}
      fontSize={16}
    />
  )
}

export const mapDispatchToProps = (dispatch) => ({

});

export const mapStateToProps = (state: EditorState) => ({

});

export const CodeEditor =  connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeEditorComponent)


