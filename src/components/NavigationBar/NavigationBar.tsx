import React from "react";
import "./NavigationBar.scss";
import {UnderlineTextButton} from "../UnderlineTextButton/UnderlineTextButton";
import {AppState} from "../../store";
import {connect} from "react-redux";

interface IProps {
    isImportPopupOpen: boolean;
}

const NavigationBarComponent = (props:IProps) => {
    console.log(props.isImportPopupOpen);
    return(
        <div className="NavigationBar">
            <div className="NavigationBarGroup">
                <div className="Logo">
                    <img alt={"Drawson"}
                         src={"/images/Logo.png"}
                         style={{maxHeight: 30}}
                    />
                </div>
                <UnderlineTextButton
                    label={"IMPORT"}
                    under={true}
                    active={props.isImportPopupOpen}
                />
                <UnderlineTextButton
                    label={"EXPORT"}
                    under={true}
                />
                <UnderlineTextButton
                    label={"OPTIONS"}
                    under={true}
                />
                <UnderlineTextButton
                    label={"COMPILE"}
                    under={true}
                />
            </div>
            <div className="NavigationBarGroup">
                <UnderlineTextButton
                    label={"ABOUT"}
                    under={true}
                />
            </div>
        </div>
    )
};

const mapStateToProps = (state: AppState) => ({
    isImportPopupOpen: state.general.isImportPopupOpen
});

export const NavigationBar = connect(mapStateToProps)(NavigationBarComponent);