export class Rect {
  readonly type: string;
  public lineColor: string;
  public lineThickness: number;
  public backgroundColor: string;
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    this.type = 'rectangle';
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
