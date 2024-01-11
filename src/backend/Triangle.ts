import Point from "./Point";
import Shape from "./Shape";

export default class Triangle extends Shape {
  p1: Point;
  p2: Point;
  p3: Point;
  constructor(p1: Point, p2: Point, p3: Point) {
    super();
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }
  getP1() {
    return this.p1;
  }
  getP2() {
    return this.p2;
  }
  getP3() {
    return this.p3;
  }
  getFilled() {
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(this.p1.getX(), this.p1.getY());
    ctx.lineTo(this.p2.getX(), this.p2.getY());
    ctx.lineTo(this.p3.getX(), this.p3.getY());
    ctx.lineTo(this.p1.getX(), this.p1.getY());
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
    return true;
  }
  getPosition(): Point {
    return new Point(
      this.p1.getX() + this.p2.getX() + this.p3.getX() / 3,
      this.p1.getY() + this.p2.getY() + this.p3.getY() / 3
    );
  }
  translate(point: Point): void {
    this.p1 = this.p1.add(point);
    this.p2 = this.p2.add(point);
    this.p3 = this.p3.add(point);
  }
  getBoundingBox(): [Point, Point, Point, Point] {
    const topLeft = new Point(
      Math.min(this.p1.getX(), this.p2.getX(), this.p3.getX()),
      Math.max(this.p1.getY(), this.p2.getY(), this.p3.getY())
    );
    const topRight = new Point(
      Math.max(this.p1.getX(), this.p2.getX(), this.p3.getX()),
      Math.max(this.p1.getY(), this.p2.getY(), this.p3.getY())
    );
    const bottomLeft = new Point(
      Math.min(this.p1.getX(), this.p2.getX(), this.p3.getX()),
      Math.min(this.p1.getY(), this.p2.getY(), this.p3.getY())
    );
    const bottomRight = new Point(
      Math.max(this.p1.getX(), this.p2.getX(), this.p3.getX()),
      Math.min(this.p1.getY(), this.p2.getY(), this.p3.getY())
    );
    return [topLeft, topRight, bottomLeft, bottomRight];
  }
  draw(): void {
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(this.p1.getX(), this.p1.getY());
    ctx.lineTo(this.p2.getX(), this.p2.getY());
    ctx.lineTo(this.p3.getX(), this.p3.getY());
    ctx.lineTo(this.p1.getX(), this.p1.getY());
    ctx.stroke();
  }
}
