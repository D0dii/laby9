import Point from "./Point";
import Primitive from "./Primitive";

export default class Segment extends Primitive {
  start: Point;
  end: Point;

  constructor(start: Point, end: Point) {
    super();
    this.start = start;
    this.end = end;
  }
  getPosition(): Point {
    return this.start;
  }
  translate(point: Point): void {
    this.start = this.start.add(point);
    this.end = this.end.add(point);
  }
  getBoundingBox(): [Point, Point, Point, Point] {
    const bottomLeft = new Point(
      Math.min(this.start.getX(), this.end.getX()),
      Math.min(this.start.getY(), this.end.getY())
    );
    const topRight = new Point(
      Math.max(this.start.getX(), this.end.getX()),
      Math.max(this.start.getY(), this.end.getY())
    );
    const topLeft = new Point(bottomLeft.getX(), topRight.getY());
    const bottomRight = new Point(topRight.getX(), bottomLeft.getY());
    return [topLeft, topRight, bottomLeft, bottomRight];
  }
  draw(): void {
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.beginPath();
    ctx.moveTo(this.start.getX(), this.start.getY());
    ctx.lineTo(this.end.getX(), this.end.getY());
    ctx.stroke();
  }

  getLength(): number {
    const dx = this.end.getX() - this.start.getX();
    const dy = this.end.getY() - this.start.getY();
    return Math.sqrt(dx * dx + dy * dy);
  }

  getStart(): Point {
    return this.start;
  }

  getEnd(): Point {
    return this.end;
  }
}
