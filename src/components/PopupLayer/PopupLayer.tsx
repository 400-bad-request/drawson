import React from 'react'
import './PopupLayer.scss'
import {PopupType} from "../../data/PopupType";
import {AppState} from "../../store";
import {updateActivePopupType} from "../../store/general/actionCreators";
import {connect} from "react-redux";

interface IProps {
    updateActivePopupType: (activePopupType: PopupType) => any
    activePopupType: PopupType
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
                </div>
            </div> : null
    )
}

const mapStateToProps = (state: AppState) => ({
    activePopupType: state.general.activePopupType
})

const dispatchToProps = {
    updateActivePopupType: updateActivePopupType
}

export const PopupLayer = connect(
    mapStateToProps,
    dispatchToProps
)(PopupLayerComponent)