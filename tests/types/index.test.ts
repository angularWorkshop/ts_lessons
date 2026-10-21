import { expect, expectTypeOf, test } from 'vitest';
import { isValid, validate } from '../../src/index.js';
import type { ValidationResult, ValidationSchema } from '../../src/index.js';

interface Profile { name: string; age: number; nick?: string }
function typeContracts(result: ValidationResult<Profile>) {
  const rules: ValidationSchema<Profile> = {
    name: [value => { expectTypeOf(value).toEqualTypeOf<string>(); return null; }],
    age: [value => { expectTypeOf(value).toEqualTypeOf<number>(); return null; }],
    nick: [value => { expectTypeOf(value).toEqualTypeOf<string | undefined>(); return null; }],
  };
  const data: Profile = { name: 'Anna', age: 24 };
  expectTypeOf(validate(data, rules)).toEqualTypeOf<ValidationResult<Profile>>();
  // @ts-expect-error Every form field needs a schema entry, including optional-valued fields.
  const missingField: ValidationSchema<Profile> = { name: [], age: [] };
  const wrongRule: ValidationSchema<Profile> = {
    name: [], nick: [],
    // @ts-expect-error An age validator cannot accept a string.
    age: [(value: string) => value.trim() ? null : 'Missing'],
  };
  void [missingField, wrongRule];
  if (isValid(result)) {
    expectTypeOf(result.data).toEqualTypeOf<Profile>();
    // @ts-expect-error A valid result has no errors.
    result.errors;
  } else {
    expectTypeOf(result.errors.age).toEqualTypeOf<string | undefined>();
    // @ts-expect-error Unknown fields cannot be accessed.
    result.errors.nonExistentField;
    // @ts-expect-error An invalid result has no data.
    result.data;
  }
}
void typeContracts;
test('type contracts are checked by npm run typecheck', () => expect(true).toBe(true));
