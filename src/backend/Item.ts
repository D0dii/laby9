import Point from "./Point";

export default abstract class Item {
  abstract id: string;

  abstract getPosition(): Point;
  abstract translate(point: Point): void;
  abstract getBoundingBox(): [Point, Point, Point, Point];
  abstract drawBoundingBox(): void;
  abstract draw(): void;
}
