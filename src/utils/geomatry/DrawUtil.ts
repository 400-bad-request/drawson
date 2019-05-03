import {ISize} from "./ISize";
import {IPoint} from "./IPoint";
import {UnitUtil} from "./UnitUtil";
import {IRect} from "./IRect";

export class DrawUtil {
    public static applySizeToCanvas(canvas:HTMLCanvasElement, size:ISize):void {
        canvas.width = size.width;
        canvas.height = size.height;
    }

    public static clearCanvas(canvas:HTMLCanvasElement): void {
        let ctx:CanvasRenderingContext2D = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    public static drawLine(canvas:HTMLCanvasElement, startPoint:IPoint, endPoint:IPoint,
                           color:string = "#000", thickness:number = 4): void {

        let ctx:CanvasRenderingContext2D = canvas.getContext('2d');
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.stroke();
        ctx.restore();
    }

    public static drawCircle(canvas:HTMLCanvasElement, anchorPoint:IPoint, radius:number,
                             startAngleDeg:number, endAngleDeg:number, color:string = "#000", thickness:number = 4): void {

        let ctx:CanvasRenderingContext2D = canvas.getContext('2d');
        let startAngleRad = UnitUtil.deg2rad(startAngleDeg);
        let endAngleRad = UnitUtil.deg2rad(endAngleDeg);
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctx.beginPath();
        ctx.arc(anchorPoint.x, anchorPoint.y, radius, startAngleRad, endAngleRad, false);
        ctx.stroke();
    }

    public static fillRectWithColor(canvas:HTMLCanvasElement, cellRect:IRect, color:string = "#000") {
        let ctx:CanvasRenderingContext2D = canvas.getContext('2d');
        ctx.save();
        ctx.fillStyle = color;
        ctx.fillRect(cellRect.x, cellRect.y, cellRect.width, cellRect.height);
        ctx.restore();
    }
}