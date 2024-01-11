import Item from "./Item";
import Point from "./Point";

export default class TextItem extends Item {
  text: string;
  position: Point;
  fontSize: number;
  constructor(text: string, position: Point, fontSize: number = 20) {
    super();
    this.text = text;
    this.position = position;
    this.fontSize = fontSize;
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
    const bottomLeft = this.position;
    const bottomRight = this.position.add(new Point(this.text.length * this.fontSize, 0));
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
}
