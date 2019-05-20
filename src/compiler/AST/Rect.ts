export class Rect {
  readonly type: string;
  readonly lineColor: string;
  readonly lineThickness: number;
  readonly backgroundColor: string;
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    lineColor: string,
    lineThickness: number,
    backgroundColor: string
  ) {
    this.type = 'rectangle';
    this.lineColor = lineColor;
    this.lineThickness = lineThickness;
    this.backgroundColor = backgroundColor;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  public toJSON(): string {
    let obj = {
      type: this.type,
      line_color: this.lineColor,
      line_thickness: this.lineThickness,
      background_color: this.backgroundColor,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
    return JSON.stringify(obj);
  }
}
