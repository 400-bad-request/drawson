import React from 'react'
import './GenericYesNoPopup.scss'
import {SimpleButton} from "../../Buttons/SimpleButton/SimpleButton";

interface IProps {
    text: string
    successLabel: string
    onSuccess: () => any
    failureLabel: string
    onFailure: () => any
}

export const GenericYesNoPopup = (props: IProps) => {
    return (
        <div className="GenericYesNoPopup">
            <div className="Content">
                {props.text}
            </div>
            <div className="Footer">
                <SimpleButton
                    label={props.successLabel}
                    onClick={props.onSuccess}
                    filled={true}
                />
                <SimpleButton
                    label={props.failureLabel}
                    onClick={props.onFailure}
                />
            </div>
        </div>
    )
}