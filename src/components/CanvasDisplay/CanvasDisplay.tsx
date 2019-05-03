import React from "react";
import "./CanvasDisplay.scss";

interface IProps {
    width: number;
    height: number;
}

export class CanvasDisplay extends React.Component<IProps, {}> {

    protected displayCanvas:HTMLCanvasElement;

    public componentDidMount(): void {
        this.resizeCanvas(this.props.width, this.props.height)
    }

    public componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{}>): void {
        this.resizeCanvas(this.props.width, this.props.height)
    }

    private resizeCanvas(width: number, height: number) {
        if (!!this.displayCanvas) {
            this.displayCanvas.width = width;
            this.displayCanvas.height = height;
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