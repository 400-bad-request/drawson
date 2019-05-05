import React from 'react'
import './PopupLayer.scss'
import {connect} from "react-redux";
import {AppState} from "../../../store";
import {updateActivePopupType} from "../../../store/general/actionCreators";
import {PopupType} from "../../../data/PopupType";
import {GenericYesNoPopup} from "../GenericYesNoPopup/GenericYesNoPopup";
import {FileUtil} from "../../../utils/FileUtil";

interface IProps {
    updateActivePopupType: (activePopupType: PopupType) => any
    activePopupType: PopupType
    codeEditorContent: string
}

const PopupLayerComponent = (props: IProps) => {
    const getPopupTopic = () => {
        switch (props.activePopupType) {
            case PopupType.IMPORT:
                return ("Import saved project from your device");
            case PopupType.EXPORT:
                return ("Save project on your device");
            case PopupType.OPTIONS:
                return ("Options");
            case PopupType.ABOUT:
                return ("About");
            default:
                return null;
        }
    };

    const getPopupContent = () => {
        switch (props.activePopupType) {
            case PopupType.EXPORT:
                return (
                    <GenericYesNoPopup
                        text={"Would you like to save your project on your device? Next time, you'll be able to load it up and get back to work."}
                        successLabel={"Save"}
                        onSuccess={saveAndClose}
                        failureLabel={"No thanks"}
                        onFailure={() => props.updateActivePopupType(null)}
                    />
                )
            default:
                return null;
        }
    }

    const saveAndClose = () => {
        FileUtil.saveTextToFile(props.codeEditorContent)
        props.updateActivePopupType(null)
    }

    return (
        props.activePopupType ?
            <div
                className="PopupLayer"
                onClick={() => props.updateActivePopupType(null)}
            >
                <div className="PopupContent"
                     onClick={(e) => e.stopPropagation()}
                >
                    <div className="PopupTopBar">
                        {getPopupTopic()}
                    </div>
                    {getPopupContent()}
                </div>
            </div> : null
    )
}

const mapStateToProps = (state: AppState) => ({
    activePopupType: state.general.activePopupType,
    codeEditorContent: state.editor.codeEditorContent
})

const dispatchToProps = {
    updateActivePopupType: updateActivePopupType
}

export const PopupLayer = connect(
    mapStateToProps,
    dispatchToProps
)(PopupLayerComponent)