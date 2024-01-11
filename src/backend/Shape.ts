import Primitive from "./Primitive";

export default abstract class Shape extends Primitive {
  abstract getFilled(): boolean;
}
