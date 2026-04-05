import { expect, test } from 'vitest';
import { err, ok, parseJsonResult, type MatchHandlers, type Result } from '../../src/index.js';

const okNumber: Result<number, never> = ok(1);
const errText: Result<never, string> = err('boom');
const mappedOk: Result<string, never> = ok(1).map((value) => value.toString());
const mappedErr: Result<never, number> = err('boom').mapErr((error) => error.length);
const parsed: Result<unknown, string> = parseJsonResult('{"ok":true}');
const handlers: MatchHandlers<number, string, string> = {
  ok: (value) => value.toString(),
  err: (error) => error,
};

void okNumber;
void errText;
void mappedOk;
void mappedErr;
void parsed;
void handlers;

// @ts-expect-error ok(1).map(...) must change the success type to string.
const invalidMappedOk: Result<number, never> = ok(1).map((value) => value.toString());

// @ts-expect-error err('x').mapErr(...) must change the error type to number.
const invalidMappedErr: Result<never, string> = err('boom').mapErr((error) => error.length);

void invalidMappedOk;
void invalidMappedErr;

test('Result type contracts compile', () => {
  expect(true).toBe(true);
});
