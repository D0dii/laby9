import Point from "./Point";
import Shape from "./Shape";

export default class Circle extends Shape {
  radius: number;
  position: Point;
  id: string;
  constructor(radius: number, position: Point, id: string = "") {
    super();
    this.radius = radius;
    this.position = position;
    this.id = id;
  }
  getRadius() {
    return this.radius;
  }
  getFilled() {
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(this.position.getX(), this.position.getY(), this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
    return false;
  }
  getPosition(): Point {
    return this.position;
  }
  translate(point: Point): void {
    this.position = this.position.add(point);
  }
  getBoundingBox(): [Point, Point, Point, Point] {
    const topLeft = new Point(this.position.getX() - this.radius, this.position.getY() + this.radius);
    const topRight = new Point(this.position.getX() + this.radius, this.position.getY() + this.radius);
    const bottomLeft = new Point(this.position.getX() - this.radius, this.position.getY() - this.radius);
    const bottomRight = new Point(this.position.getX() + this.radius, this.position.getY() - this.radius);
    return [topLeft, topRight, bottomLeft, bottomRight];
  }
  draw(): void {
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(this.position.getX(), this.position.getY(), this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
  drawBoundingBox(): void {
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const [topLeft, topRight, bottomLeft, bottomRight] = this.getBoundingBox();
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.moveTo(topLeft.getX(), topLeft.getY());
    ctx.lineTo(topRight.getX(), topRight.getY());
    ctx.lineTo(bottomRight.getX(), bottomRight.getY());
    ctx.lineTo(bottomLeft.getX(), bottomLeft.getY());
    ctx.lineTo(topLeft.getX(), topLeft.getY());
    ctx.stroke();
  }
}
