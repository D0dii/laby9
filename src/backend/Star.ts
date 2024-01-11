import Point from "./Point";
import Shape from "./Shape";

export default class Star extends Shape {
  position: Point;
  points: Point[];
  constructor(points: Point[], position: Point) {
    super();
    this.points = points;
    this.position = position;
  }
  getFilled(): boolean {
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    this.points.forEach((point) => {
      ctx.lineTo(point.getX(), point.getY());
    });
    ctx.stroke();
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
    let maxY: number | undefined;
    let minY: number | undefined;
    let maxX: number | undefined;
    let minX: number | undefined;
    this.points.forEach((point) => {
      if (maxY === undefined || maxY < point.getY()) {
        maxY = point.getY();
      }
      if (minY === undefined || minY > point.getY()) {
        minY = point.getY();
      }
      if (maxX === undefined || maxX < point.getX()) {
        maxX = point.getX();
      }
      if (minX === undefined || minX > point.getX()) {
        minX = point.getX();
      }
    });
    if (!(maxY === undefined || minY === undefined || maxX === undefined || minX === undefined)) {
      return [new Point(minX, maxY), new Point(maxX, maxY), new Point(minX, minY), new Point(maxX, minY)];
    } else {
      return [new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0)];
    }
  }
  draw(): void {
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    this.points.forEach((point) => {
      ctx.lineTo(point.getX(), point.getY());
    });
    ctx.stroke();
  }
}
