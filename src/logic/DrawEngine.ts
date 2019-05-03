import {IPoint} from "../utils/geomatry/IPoint";
import {DrawUtil} from "../utils/geomatry/DrawUtil";
import {Settings} from "../settings/Settings";
import {ISize} from "../utils/geomatry/ISize";

export class DrawEngine {
    private canvas: HTMLCanvasElement;
    private anchor: IPoint;
    private zoom: number;
    private content: any[];

    private width: number;
    private height: number;

    private isDragging: boolean = false;
    private translationAnchor: IPoint = null;
    private lastAnchor: IPoint = null;

    constructor(canvas: HTMLCanvasElement, content: any[]) {
        this.canvas = canvas;
        this.content = content;

        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.zoom = 1;
        this.anchor = {
            x: Math.round(this.width / 2 - 0.5) + 0.5,
            y: Math.round(this.height / 2 - 0.5) + 0.5
        };
        this.armListeners();
    }

    private armListeners() {
        this.canvas.addEventListener('mousedown', this.onMouseDown);
        this.canvas.addEventListener('wheel', this.onMouseScroll);
        window.addEventListener('mouseup', this.onMouseUp);
        window.addEventListener('mousemove', this.onMouseMove);
    }

    public defuseListeners() {
        this.canvas.removeEventListener('mousedown', this.onMouseDown);
        this.canvas.removeEventListener('wheel', this.onMouseScroll);
        window.removeEventListener('mouseup', this.onMouseUp);
        window.removeEventListener('mousemove', this.onMouseMove);
    }

    private onMouseScroll = (e: WheelEvent) => {
        this.zoom = Math.max(1, this.zoom + Math.sign(e.deltaY) * Settings.DEFAULT_ZOOM_STEP);
        this.draw();
    };

    private onMouseDown = (e: MouseEvent) => {
        this.isDragging = true;
        this.translationAnchor = {x: e.clientX, y: e.clientY};
        this.lastAnchor = this.anchor;
    };

    private onMouseMove = (e: MouseEvent) => {
        if (this.isDragging) {
            this.anchor = {
                x: Math.round(this.lastAnchor.x + e.clientX - this.translationAnchor.x - 0.5) + 0.5,
                y: Math.round(this.lastAnchor.y + e.clientY - this.translationAnchor.y - 0.5) + 0.5
            };
            this.draw();
        }
    };

    private onMouseUp = (e: MouseEvent) => {
        if (this.isDragging) {
            this.isDragging = false;
            this.anchor = {
                x: Math.round(this.lastAnchor.x + e.clientX - this.translationAnchor.x - 0.5) + 0.5,
                y: Math.round(this.lastAnchor.y + e.clientY - this.translationAnchor.y - 0.5) + 0.5
            };
            this.translationAnchor = null;
            this.lastAnchor = null;
            this.draw();
        }
    };

    public updateSize(size: ISize) {
        DrawUtil.applySizeToCanvas(this.canvas, size);
        this.anchor = {
            x: Math.round(this.anchor.x - (this.width - size.width) / 2 - 0.5) + 0.5,
            y: Math.round(this.anchor.y - (this.height - size.height) / 2 - 0.5) + 0.5
        };

        this.width = size.width;
        this.height = size.height;
        this.draw();
    }

    public updateContent(content: any[]) {
        this.content = content;
        this.draw();
    }

    public draw() {
        DrawUtil.clearCanvas(this.canvas);
        this.drawGrid();
        this.drawContent();
    }

    public drawGrid() {
        DrawUtil.drawLine(this.canvas, {x: 0, y: this.anchor.y}, {x: this.width, y: this.anchor.y}, "#b2b2b2", 1);
        DrawUtil.drawLine(this.canvas, {x: this.anchor.x, y: 0}, {x: this.anchor.x, y: this.height}, "#b2b2b2", 1);
    }

    public drawContent() {
        this.content.forEach((object:any) => {
            if (object.hasOwnProperty("type")) {
                switch (object.type) {
                    case "circle":
                        DrawUtil.drawCircle(this.canvas, {x: object.x + this.anchor.x, y: object.y + this.anchor.y}, object.r, 0, 360, object.line_color, object.line_thickness);
                    break;
                }
            }
        })
    }
}