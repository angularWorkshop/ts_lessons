import { RegistrationForm, getValidationMetadata, validate } from '../../src/index';

describe('validate(instance)', () => {
  it('returns no errors for a valid form', () => {
    const form = new RegistrationForm({
      email: 'max@example.com',
      password: 'strong-pass',
      displayName: 'Max',
    });

    expect(validate(form)).toEqual([]);
  });

  it('reports required and min-length violations', () => {
    const form = new RegistrationForm({
      email: '',
      password: '123',
      displayName: 'A',
    });

    expect(validate(form)).toEqual([
      'email is required',
      'password must be at least 8 characters',
      'displayName must be at least 2 characters',
    ]);
  });
});

describe('validation metadata', () => {
  it('stores rules by property name', () => {
    expect(getValidationMetadata(RegistrationForm.prototype)).toEqual({
      email: [{ type: 'required' }],
      password: [
        { type: 'required' },
        { type: 'minLength', value: 8 },
      ],
      displayName: [{ type: 'minLength', value: 2 }],
    });
  });
});
