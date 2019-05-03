import React from 'react'
import './NavigationBar.scss'
import { UnderlineTextButton } from '../UnderlineTextButton/UnderlineTextButton'
import { AppState } from '../../store'
import { connect } from 'react-redux'
import {
  updateAboutPopupStatus,
  updateExportPopupStatus,
  updateImportPopupStatus,
  updateOptionsPopupStatus,
} from '../../store/general/actions'

interface IProps {
  updateImportPopupStatus: (status: boolean) => any
  updateExportPopupStatus: (status: boolean) => any
  updateOptionsPopupStatus: (status: boolean) => any
  updateAboutPopupStatus: (status: boolean) => any
  isImportPopupOpen: boolean
  isExportPopupOpen: boolean
  isOptionsPopupOpen: boolean
  isAboutPopupOpen: boolean
}

const NavigationBarComponent = (props: IProps) => {
  return (
    <div className="NavigationBar">
      <div className="NavigationBarGroup">
        <div className="Logo">
          <img
            alt={'Drawson'}
            src={'/images/Logo.png'}
            style={{ maxHeight: 30 }}
          />
        </div>
        <UnderlineTextButton
          label={'IMPORT'}
          under={true}
          active={props.isImportPopupOpen}
          onClick={() =>
            props.updateImportPopupStatus(!props.isImportPopupOpen)
          }
        />
        <UnderlineTextButton
          label={'EXPORT'}
          under={true}
          active={props.isExportPopupOpen}
          onClick={() =>
            props.updateExportPopupStatus(!props.isExportPopupOpen)
          }
        />
        <UnderlineTextButton
          label={'OPTIONS'}
          under={true}
          active={props.isOptionsPopupOpen}
          onClick={() =>
            props.updateOptionsPopupStatus(!props.isOptionsPopupOpen)
          }
        />
        <UnderlineTextButton label={'COMPILE'} under={true} />
      </div>
      <div className="NavigationBarGroup">
        <UnderlineTextButton
          label={'ABOUT'}
          under={true}
          active={props.isAboutPopupOpen}
          onClick={() => props.updateAboutPopupStatus(!props.isAboutPopupOpen)}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  isImportPopupOpen: state.general.isImportPopupOpen,
  isExportPopupOpen: state.general.isExportPopupOpen,
  isOptionsPopupOpen: state.general.isOptionsPopupOpen,
  isAboutPopupOpen: state.general.isAboutPopupOpen,
})

const dispatchToProps = {
  updateImportPopupStatus: updateImportPopupStatus,
  updateExportPopupStatus: updateExportPopupStatus,
  updateOptionsPopupStatus: updateOptionsPopupStatus,
  updateAboutPopupStatus: updateAboutPopupStatus,
}

export const NavigationBar = connect(
  mapStateToProps,
  dispatchToProps
)(NavigationBarComponent)
