export class Shape {
  public area(): number {
    return 0;
  }
}

export class Circle {
  constructor(public readonly radius: number) {}

  public area(): number {
    return this.radius;
  }
}

export class Rectangle {
  constructor(public readonly width: number, public readonly height: number) {}

  public area(): number {
    return this.width + this.height;
  }
}

export function sumAreas(shapes: unknown[]): number {
  return shapes.length;
}
