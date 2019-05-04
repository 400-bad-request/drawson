import {ISize} from "./ISize";
import {IPoint} from "./IPoint";
import {UnitUtil} from "./UnitUtil";
import {IRect} from "./IRect";

export class DrawUtil {
    public static applySizeToCanvas(canvas: HTMLCanvasElement, size: ISize): void {
        canvas.width = size.width;
        canvas.height = size.height;
    }

    public static clearCanvas(canvas: HTMLCanvasElement): void {
        let ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    public static drawLine(canvas: HTMLCanvasElement, startPoint: IPoint, endPoint: IPoint, color: string = "#000000", thickness: number = 1): void {
        let ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x + 1, endPoint.y + 1);
        ctx.stroke();
        ctx.restore();
    }

    public static drawCircle(canvas: HTMLCanvasElement, anchorPoint: IPoint, radius: number, startAngleDeg: number, endAngleDeg: number, color: string = "#000000", thickness: number = 1): void {
        let ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        let startAngleRad = UnitUtil.deg2rad(startAngleDeg);
        let endAngleRad = UnitUtil.deg2rad(endAngleDeg);
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctx.beginPath();
        ctx.arc(anchorPoint.x, anchorPoint.y, radius, startAngleRad, endAngleRad, false);
        ctx.stroke();
        ctx.restore();
    }

    public static drawCircleWithFill(canvas: HTMLCanvasElement, anchorPoint: IPoint, radius: number, color: string = "#000000"): void {
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        ctx.save();
        const startAngleRad = UnitUtil.deg2rad(0);
        const endAngleRad = UnitUtil.deg2rad(360);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(anchorPoint.x, anchorPoint.y, radius, startAngleRad, endAngleRad, false);
        ctx.fill();
        ctx.restore();
    }

    public static drawRect(canvas: HTMLCanvasElement, rect: IRect, color: string = "#000000", thickness: number = 1): void {
        let ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctx.beginPath();
        ctx.rect(rect.x, rect.y, rect.width, rect.height);
        ctx.stroke();
        ctx.restore();
    }

    public static drawRectWithFill(canvas: HTMLCanvasElement, rect: IRect, color: string = "#000000"): void {
        let ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        ctx.save();
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.rect(rect.x, rect.y, rect.width, rect.height);
        ctx.fill();
        ctx.restore();
    }
}