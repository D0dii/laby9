export default class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  add(point: Point) {
    return new Point(this.x + point.getX(), this.y + point.getY());
  }
}
