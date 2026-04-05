import { expect, test } from 'vitest';
import { greet, greetAll } from '../../src/index';

// These assignments intentionally surface direct TypeScript mismatch errors.
const greetParametersMustBeString: [string] = null as unknown as Parameters<typeof greet>;
const greetReturnMustBeString: string = null as unknown as ReturnType<typeof greet>;

const greetAllParametersMustBeReadonlyStringArray: [readonly string[]] = null as unknown as Parameters<typeof greetAll>;
const greetAllReturnMustBeStringArray: string[] = null as unknown as ReturnType<typeof greetAll>;

void greetParametersMustBeString;
void greetReturnMustBeString;
void greetAllParametersMustBeReadonlyStringArray;
void greetAllReturnMustBeStringArray;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
