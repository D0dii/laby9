import Point from "./Point";
import Shape from "./Shape";

export default class Rect extends Shape {
  width: number;
  height: number;
  position: Point;
  id: string;
  constructor(width: number, height: number, position: Point, id: string = "") {
    super();
    this.width = width;
    this.height = height;
    this.position = position;
    this.id = id;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  getFilled() {
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = "black";
    ctx.rect(this.getPosition().getX(), this.getPosition().getY(), this.getWidth(), this.getHeight());
    ctx.fillStyle = "red";
    ctx.fill();
    return true;
  }
  getPosition(): Point {
    return this.position;
  }
  translate(point: Point): void {
    this.position = this.position.add(point);
  }
  getBoundingBox(): [Point, Point, Point, Point] {
    const bottomLeft = this.position;
    const topLeft = new Point(this.position.getX(), this.position.getY() + this.height);
    const topRight = new Point(topLeft.getX() + this.width, topLeft.getY());
    const bottomRight = new Point(topRight.getX(), bottomLeft.getY());
    return [topLeft, topRight, bottomLeft, bottomRight];
  }
  draw(): void {
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = "black";
    ctx.strokeRect(this.getPosition().getX(), this.getPosition().getY(), this.getWidth(), this.getHeight());
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
