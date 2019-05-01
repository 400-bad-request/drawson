import React from "react";
import classNames from "classnames";
import "./UnderlineTextButton.scss";

interface IProps {
    under?:boolean;
    over?:boolean;
    active?:boolean;
    key?:string;
    label:string;
    onClick?:() => any;
    rout?:string,
    style?:React.CSSProperties;
}

export const UnderlineTextButton = (props:IProps) => {
    const getClassName = () => {
        return classNames(
            "UnderlineTextButton",
            {
                "under": props.under,
                "over": props.over,
                "active": props.active
            }
        );
    };
    return(
        <div
            className={getClassName()}
            onClick={props.onClick}
            key={props.key}
            style={props.style}
        >
            {!props.rout && props.label}
        </div>
    )
};