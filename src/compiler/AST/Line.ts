export class Line {
  readonly type: string;
  readonly lineColor: string;
  readonly lineThickness: number;
  readonly x1: number;
  readonly y1: number;
  readonly x2: number;
  readonly y2: number;

  constructor(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    lineColor: string,
    lineThickness: number
  ) {
    this.type = 'line';
    this.lineColor = lineColor;
    this.lineThickness = lineThickness;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  public toJSON(): string {
    let obj = {
      type: this.type,
      line_color: this.lineColor,
      line_thickness: this.lineThickness,
      x1: this.x1,
      y1: this.y1,
      x2: this.x2,
      y2: this.y2,
    };
    return JSON.stringify(obj);
  }
}
