export class Circle {
  readonly type: string;
  public lineColor: string;
  public lineThickness: number;
  public backgroundColor: string;
  readonly x: number;
  readonly y: number;
  readonly r: number;

  constructor(x: number, y: number, r: number) {
    this.type = 'circle';
    this.x = x;
    this.y = y;
    this.r = r;
  }

  public toJSON(): any {
    return {
      type: this.type,
      line_color: this.lineColor,
      line_thickness: this.lineThickness,
      background_color: this.backgroundColor,
      x: this.x,
      y: this.y,
      r: this.r,
    };
  }
}
