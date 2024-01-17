import Point from "./Point";

type Constructor<T> = new (...args: any[]) => T;

export function MakeSingletonTriangle<
  T extends Constructor<{
    getPosition(): Point;
  }>
>(Base: T) {
  return class SingletonTriangle extends Base {
    public static instance: SingletonTriangle | null = null;
    constructor(...args: any[]) {
      super(...args);
      SingletonTriangle.instance = this;
    }
    getInstance() {
      return SingletonTriangle.instance;
    }
  };
}
