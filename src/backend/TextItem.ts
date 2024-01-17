import Item from "./Item";
import Point from "./Point";

export default class TextItem extends Item {
  text: string;
  position: Point;
  fontSize: number;
  id: string;
  constructor(text: string, position: Point, fontSize: number = 20, id: string = "") {
    super();
    this.text = text;
    this.position = position;
    this.fontSize = fontSize;
    this.id = id;
  }
  getText(): string {
    return this.text;
  }
  getPosition(): Point {
    return this.position;
  }
  translate(point: Point): void {
    this.position = this.position.add(point);
  }
  getBoundingBox(): [Point, Point, Point, Point] {
    const bottomLeft = this.position.add(new Point(0, -this.fontSize));
    const bottomRight = this.position.add(new Point((this.text.length * this.fontSize) / 2, -this.fontSize));
    const topLeft = bottomLeft.add(new Point(0, this.fontSize));
    const topRight = bottomRight.add(new Point(0, this.fontSize));
    return [topLeft, topRight, bottomLeft, bottomRight];
  }
  draw(): void {
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.font = `${this.fontSize}px serif`;
    ctx.fillText(this.text, this.position.getX(), this.position.getY());
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
