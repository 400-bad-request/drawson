import React from "react";
import "./CanvasDisplay.scss";
import {DrawEngine} from "../../logic/DrawEngine";

interface IProps {
    width: number;
    height: number;
}

export class CanvasDisplay extends React.Component<IProps, {}> {

    protected displayCanvas:HTMLCanvasElement;
    protected drawEngine:DrawEngine;

    public componentDidMount(): void {
        this.drawEngine = new DrawEngine(this.displayCanvas, []);
        this.resizeCanvas();
    }

    public componentDidUpdate(): void {
        this.resizeCanvas()
    }

    private resizeCanvas() {
        if (!!this.displayCanvas && !!this.drawEngine) {
            this.drawEngine.updateSize({width: this.props.width, height: this.props.height})
        }
    }

    render() {
        return (
            <div className="CanvasDisplay">
                <canvas className={"Board"} ref={ref => this.displayCanvas = ref}/>
            </div>
        );
    }
}