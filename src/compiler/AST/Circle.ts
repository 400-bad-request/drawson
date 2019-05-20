export class Circle {
  readonly type: string;
  readonly lineColor: string;
  readonly lineThickness: number;
  readonly backgroundColor: string;
  readonly x: number;
  readonly y: number;
  readonly r: number;

  constructor(
    x: number,
    y: number,
    r: number,
    lineColor: string,
    lineThickness: number,
    backgroundColor: string
  ) {
    this.type = 'circle';
    this.lineColor = lineColor;
    this.lineThickness = lineThickness;
    this.backgroundColor = backgroundColor;
    this.x = x;
    this.y = y;
    this.r = r;
  }

  public toJSON(): string {
    let obj = {
      type: this.type,
      line_color: this.lineColor,
      line_thickness: this.lineThickness,
      background_color: this.backgroundColor,
      x: this.x,
      y: this.y,
      r: this.r,
    };
    return JSON.stringify(obj);
  }
}
