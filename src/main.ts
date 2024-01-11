import Circle from "./backend/Circle";
import ComplexItem from "./backend/ComplexItem";
import Point from "./backend/Point";
import Rect from "./backend/Rect";
import Scene from "./backend/Scene";
import Segment from "./backend/Segment";
import TextItem from "./backend/TextItem";
import Triangle from "./backend/Triangle";
import Star from "./backend/Star";

const rectTest = new Rect(200, 100, new Point(50, 20));
//rectTest.draw();
const triangleTest = new Triangle(new Point(20, 20), new Point(120, 20), new Point(150, 120));
//triangleTest.draw();
const textTest = new TextItem("Hello World", new Point(20, 20));
//textTest.draw();
const segmentTest = new Segment(new Point(10, 20), new Point(220, 120));
//segmentTest.draw();
const circleTest = new Circle(10, new Point(100, 100));
//circleTest.draw();
const circleTest2 = new Circle(5, new Point(50, 50));
const complexItemTest = new ComplexItem(
  [rectTest, triangleTest, textTest, segmentTest, circleTest],
  new Point(200, 200)
);
//complexItemTest.draw();
const sceneTest = new Scene([complexItemTest]);
sceneTest.addItem(circleTest2);
sceneTest.draw();
sceneTest.translate(new Point(10, 10));
sceneTest.draw();
circleTest.getFilled();
rectTest.getFilled();
triangleTest.getFilled();

const startTest = new Star(
  [new Point(50, 50), new Point(75, 75), new Point(100, 50), new Point(75, 150), new Point(50, 50)],
  new Point(50, 50)
);
startTest.draw();
startTest.getFilled();
