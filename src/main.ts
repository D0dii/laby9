import Circle from "./backend/Circle";
import ComplexItem from "./backend/ComplexItem";
import Point from "./backend/Point";
import Rect from "./backend/Rect";
import Scene from "./backend/Scene";
import Segment from "./backend/Segment";
import TextItem from "./backend/TextItem";
import Triangle from "./backend/Triangle";
import Star from "./backend/Star";
import Item from "./backend/Item";

const rectTest = new Rect(200, 100, new Point(50, 20), "rect1");
//rectTest.draw();
const triangleTest = new Triangle(new Point(20, 20), new Point(120, 20), new Point(150, 120), "triangle1");
//triangleTest.draw();
const textTest = new TextItem("Hello World", new Point(20, 20), 20, "text1");
//textTest.draw();
const segmentTest = new Segment(new Point(10, 20), new Point(220, 120), "segment1");
//segmentTest.draw();
const circleTest = new Circle(10, new Point(100, 100), "circle1");
//circleTest.draw();
const circleTest2 = new Circle(5, new Point(50, 50), "circle2");
const complexItemTest = new ComplexItem(
  [rectTest, triangleTest, textTest, segmentTest, circleTest],
  new Point(200, 200),
  "complex1"
);
//complexItemTest.draw();
const sceneTest = new Scene([rectTest, triangleTest, textTest, segmentTest, circleTest]);
sceneTest.addItem(circleTest2);
sceneTest.draw();
// sceneTest.translate(new Point(10, 10));
// sceneTest.draw();
// circleTest.getFilled();
// rectTest.getFilled();
// triangleTest.getFilled();

// const startTest = new Star(
//   [new Point(50, 50), new Point(75, 75), new Point(100, 50), new Point(75, 150), new Point(50, 50)],
//   new Point(50, 50)
// );
// startTest.draw();
// startTest.getFilled();
function decorate(figure: Item) {
  const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  const [topLeft, topRight, bottomLeft, bottomRight] = figure.getBoundingBox();
  ctx.strokeStyle = "purple";
  ctx.beginPath();
  ctx.moveTo(topLeft.getX(), topLeft.getY());
  ctx.lineTo(topRight.getX(), topRight.getY());
  ctx.lineTo(bottomRight.getX(), bottomRight.getY());
  ctx.lineTo(bottomLeft.getX(), bottomLeft.getY());
  ctx.lineTo(topLeft.getX(), topLeft.getY());
  ctx.stroke();
}

const selectFigure = document.getElementById("select-figure") as HTMLSelectElement;

sceneTest.children.forEach((figure) => {
  let option = document.createElement("option");
  option.value = figure.id;
  option.text = figure.id;
  selectFigure.add(option);
});

selectFigure.addEventListener("change", () => {
  sceneTest.children.forEach((figure) => {
    if (figure.id === selectFigure.value) {
      const figurePrototype = Object.getPrototypeOf(figure);

      const descriptor: any = Object.getOwnPropertyDescriptor(figurePrototype, "draw");
      const originalMethod = descriptor.value;
      descriptor.value = function (...args: any[]) {
        const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        const [topLeft, topRight, bottomLeft, bottomRight] = figure.getBoundingBox();
        ctx.strokeStyle = "purple";
        ctx.beginPath();
        ctx.moveTo(topLeft.getX(), topLeft.getY());
        ctx.lineTo(topRight.getX(), topRight.getY());
        ctx.lineTo(bottomRight.getX(), bottomRight.getY());
        ctx.lineTo(bottomLeft.getX(), bottomLeft.getY());
        ctx.lineTo(topLeft.getX(), topLeft.getY());
        ctx.stroke();
        const result = originalMethod.apply(this, args);
        return result;
      };
      Object.defineProperty(figurePrototype, "draw", descriptor);
    }
  });
  sceneTest.draw();
});

const btnClear = document.getElementById("button-clear") as HTMLButtonElement;
btnClear.addEventListener("click", () => {
  const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
