import Item from "./Item";
import Point from "./Point";

export default class ComplexItem extends Item {
  children: Item[];
  position: Point;
  id: string;
  constructor(items: Item[], position: Point, id: string = "") {
    super();
    this.children = items;
    this.position = position;
    this.id = id;
  }
  getChilkdren(): Item[] {
    return this.children;
  }
  getPosition(): Point {
    return this.position;
  }
  translate(point: Point): void {
    this.children.forEach((item) => {
      item.translate(point);
    });
  }
  getBoundingBox(): [Point, Point, Point, Point] {
    let maxY: number | undefined;
    let minY: number | undefined;
    let maxX: number | undefined;
    let minX: number | undefined;
    this.children.forEach((item) => {
      const [topLeft, topRight, bottomLeft, bottomRight] = item.getBoundingBox();
      if (maxY === undefined || maxY < topRight.getY()) {
        maxY = topRight.getY();
      }
      if (minY === undefined || minY > bottomRight.getY()) {
        minY = bottomRight.getY();
      }
      if (maxX === undefined || maxX < topRight.getX()) {
        maxX = topRight.getX();
      }
      if (minX === undefined || minX > bottomLeft.getX()) {
        minX = topLeft.getX();
      }
    });
    if (!(maxY === undefined || minY === undefined || maxX === undefined || minX === undefined)) {
      return [new Point(minX, maxY), new Point(maxX, maxY), new Point(minX, minY), new Point(maxX, minY)];
    } else {
      return [new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0)];
    }
  }
  draw(): void {
    this.children.forEach((item) => {
      item.draw();
    });
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
