import React from "react";
import "./NavigationBar.scss";
import {UnderlineTextButton} from "../UnderlineTextButton/UnderlineTextButton";

export const NavigationBar = () => {
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
                />
                <UnderlineTextButton
                    label={"EXPORT"}
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