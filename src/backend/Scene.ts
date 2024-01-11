import Item from "./Item";
import Point from "./Point";

export default class Scene {
  children: Item[];
  constructor(children: Item[]) {
    this.children = children;
  }
  addItem(item: Item) {
    this.children.push(item);
  }
  draw() {
    this.children.forEach((item) => {
      item.draw();
    });
  }
  translate(point: Point) {
    this.children.forEach((item) => {
      item.translate(point);
    });
  }
}
