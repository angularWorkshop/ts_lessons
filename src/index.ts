export abstract class Shape {
  public abstract area(): number;
}

export class Circle extends Shape {
  constructor(public readonly radius: number) {}

  public override area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle extends Shape {
  constructor(public readonly width: number, public readonly height: number) {}

  public override area(): number {
    return this.width * this.height;
  }
}

export function sumAreas(shapes: readonly Shape[]): number {
  return shapes.reduce((total: number, shape: Shape) => total + shape.area(), 0);
}
