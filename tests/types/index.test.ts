import { expect, test } from 'vitest';
import { resolveValue, type UnwrapPromise } from '../../src/index';

const unwrapSinglePromise: string = null as unknown as UnwrapPromise<Promise<string>>;
const unwrapNestedPromise: number = null as unknown as UnwrapPromise<Promise<Promise<number>>>;
const keepPlainValue: boolean = null as unknown as UnwrapPromise<boolean>;
const resolvedPromiseType: Promise<string> = resolveValue(Promise.resolve(Promise.resolve('ts')));

void unwrapSinglePromise;
void unwrapNestedPromise;
void keepPlainValue;
void resolvedPromiseType;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
