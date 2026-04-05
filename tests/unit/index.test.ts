import { Circle, Rectangle, sumAreas } from '../../src/index';

describe('abstract shape exercise', () => {
  it('calculates the area of a circle', () => {
    expect(new Circle(2).area()).toBeCloseTo(Math.PI * 4);
  });

  it('calculates the area of a rectangle', () => {
    expect(new Rectangle(3, 4).area()).toBe(12);
  });

  it('sums areas for multiple shapes', () => {
    expect(sumAreas([new Circle(1), new Rectangle(2, 5)])).toBeCloseTo(Math.PI + 10);
  });
});
