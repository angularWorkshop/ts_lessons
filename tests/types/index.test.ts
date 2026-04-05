import { expect, test } from 'vitest';
import { assertNever, describeEvent, type AppEvent } from '../../src/index';

const describeEventMustReturnString: string = describeEvent({ type: 'click', x: 1, y: 2 });
const assertNeverMustAcceptNever: (value: never) => never = assertNever;
const eventUnionMustStayTyped: AppEvent = { type: 'keypress', key: 'Escape' };

void describeEventMustReturnString;
void assertNeverMustAcceptNever;
void eventUnionMustStayTyped;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
