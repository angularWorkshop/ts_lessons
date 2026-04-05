import { expectTypeOf } from 'vitest';
import {
  MinLength,
  RegistrationForm,
  Required,
  getValidationMetadata,
  type ValidationRule,
  validate,
} from '../../src/index';

describe('validation typing', () => {
  it('keeps form properties strongly typed', () => {
    const form = new RegistrationForm();

    expectTypeOf(form.email).toEqualTypeOf<string>();
    expectTypeOf(form.password).toEqualTypeOf<string>();
    expectTypeOf(form.displayName).toEqualTypeOf<string>();
  });

  it('types decorators and helpers', () => {
    expectTypeOf(Required).toBeFunction();
    expectTypeOf(MinLength(8)).toBeFunction();
    expectTypeOf(validate(new RegistrationForm())).toEqualTypeOf<string[]>();
    expectTypeOf(getValidationMetadata(RegistrationForm.prototype)).toEqualTypeOf<
      Record<string, ValidationRule[]>
    >();
  });
});
