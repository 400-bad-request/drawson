import React from 'react';
import './PopupLayer.scss';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { updateActivePopupType } from '../../../store/general/actionCreators';
import { PopupType } from '../../../utils/types/PopupType';
import { GenericYesNoPopup } from '../GenericYesNoPopup/GenericYesNoPopup';
import { FileUtil } from '../../../utils/FileUtil';

interface Props {
  updateActivePopupType: (activePopupType: PopupType) => any;
  activePopupType: PopupType;
  codeEditorContent: string;
}

const PopupLayerComponent: React.FC<Props> = ({
  activePopupType,
  codeEditorContent,
  updateActivePopupType,
}) => {
  const getPopupTopic = () => {
    switch (activePopupType) {
      case PopupType.IMPORT:
        return 'Import saved project from your device';
      case PopupType.EXPORT:
        return 'Save project on your device';
      case PopupType.OPTIONS:
        return 'Options';
      case PopupType.ABOUT:
        return 'About';
      default:
        return null;
    }
  };

  const getPopupContent = () => {
    switch (activePopupType) {
      case PopupType.EXPORT:
        return (
          <GenericYesNoPopup
            text={
              "Would you like to save your project on your device? Next time, you'll be able to load it up and get back to work."
            }
            successLabel={'Save'}
            onSuccess={saveAndClose}
            failureLabel={'No thanks'}
            onFailure={() => updateActivePopupType(null)}
          />
        );
      default:
        return null;
    }
  };

  const saveAndClose = () => {
    FileUtil.saveTextToFile(codeEditorContent);
    updateActivePopupType(null);
  };

  return activePopupType ? (
    <div className="PopupLayer" onClick={() => updateActivePopupType(null)}>
      <div className="PopupContent" onClick={e => e.stopPropagation()}>
        <div className="PopupTopBar">{getPopupTopic()}</div>
        {getPopupContent()}
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state: AppState) => ({
  activePopupType: state.general.activePopupType,
  codeEditorContent: state.editor.codeEditorContent,
});

const dispatchToProps = {
  updateActivePopupType,
};

export const PopupLayer = connect(
  mapStateToProps,
  dispatchToProps
)(PopupLayerComponent);
