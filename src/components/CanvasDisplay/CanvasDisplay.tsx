import React from "react";
import "./CanvasDisplay.scss";
import {DrawEngine} from "../../logic/DrawEngine";
import {AppState} from "../../store";
import {connect} from "react-redux";

interface IProps {
    width: number;
    height: number;
    compilationOutput: any[];
}

export class CanvasDisplayComponent extends React.Component<IProps, {}> {

    protected displayCanvas:HTMLCanvasElement;
    protected drawEngine:DrawEngine;

    public componentDidMount(): void {
        this.drawEngine = new DrawEngine(this.displayCanvas, this.props.compilationOutput);
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

const mapStateToProps = (state: AppState) => ({
    compilationOutput: state.editor.compilationOutput,
});

export const CanvasDisplay = connect(mapStateToProps)(CanvasDisplayComponent);