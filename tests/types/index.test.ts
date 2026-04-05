import { expect, test } from 'vitest';
import { Stack, numberStack, stringStack } from '../../src/index';

const pushArgumentsMustBeTyped: Parameters<Stack<string>['push']> = ['hello'];
const popMustReturnTypedValueOrUndefined: string | undefined = stringStack.pop();
const peekMustReturnTypedValueOrUndefined: number | undefined = numberStack.peek();
const inferredNumberStack: Stack<number> = numberStack;
const inferredStringStack: Stack<string> = stringStack;

void pushArgumentsMustBeTyped;
void popMustReturnTypedValueOrUndefined;
void peekMustReturnTypedValueOrUndefined;
void inferredNumberStack;
void inferredStringStack;

// @ts-expect-error Stack<string> must reject numbers.
stringStack.push(42);

test('type contracts compile', () => {
  expect(true).toBe(true);
});
