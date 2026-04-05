import { expect, test } from 'vitest';
import { Circle, Rectangle, Shape, sumAreas } from '../../src/index';

const circleAreaMustBeNumber: number = new Circle(3).area();
const rectangleAreaMustBeNumber: number = new Rectangle(4, 5).area();
const totalAreaMustBeNumber: number = sumAreas([new Circle(1), new Rectangle(2, 3)]);

// @ts-expect-error Shape must stay abstract
new Shape();

void circleAreaMustBeNumber;
void rectangleAreaMustBeNumber;
void totalAreaMustBeNumber;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
