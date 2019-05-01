import React from "react";
import "./NavigationBar.scss";
import {UnderlineTextButton} from "../UnderlineTextButton/UnderlineTextButton";

export const NavigationBar = () => {
    return(
        <div className="NavigationBar">
            <div className="NavigationBarGroup">
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