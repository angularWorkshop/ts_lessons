import { expect, test } from 'vitest';
import { logMessage, throwError } from '../../src/index';

const throwErrorParametersMustBeString: [string] = null as unknown as Parameters<typeof throwError>;
const throwErrorReturnMustBeNever: never = null as unknown as ReturnType<typeof throwError>;

const logMessageParametersMustBeString: [string] = null as unknown as Parameters<typeof logMessage>;
const logMessageReturnMustBeVoid: void = null as unknown as ReturnType<typeof logMessage>;

void throwErrorParametersMustBeString;
void throwErrorReturnMustBeNever;
void logMessageParametersMustBeString;
void logMessageReturnMustBeVoid;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
