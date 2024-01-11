import Point from "./Point";

export default abstract class Item {
  abstract getPosition(): Point;

  abstract translate(point: Point): void;

  abstract getBoundingBox(): [Point, Point, Point, Point];

  abstract draw(): void;
}
