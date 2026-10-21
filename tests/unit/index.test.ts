import { describe, expect, it, vi } from 'vitest';
import { isValid, validate } from '../../src/index.js';
import type { ValidationSchema } from '../../src/index.js';

interface Profile { name: string; age: number; agreed: boolean }
const schema: ValidationSchema<Profile> = {
  name: [value => value.trim() ? null : 'Name required'],
  age: [value => value >= 18 ? null : 'Adults only'],
  agreed: [value => value ? null : 'Consent required'],
};

describe('generic form validator', () => {
  it('returns the original data object for a valid form', () => {
    const data = { name: 'Anna', age: 22, agreed: true };
    const result = validate(data, schema);
    expect(result).toEqual({ valid: true, data });
    if (result.valid) expect(result.data).toBe(data);
  });
  it('returns errors for every invalid field and no data property', () => {
    const result = validate({ name: '', age: 15, agreed: false }, schema);
    expect(result).toEqual({ valid: false, errors: {
      name: 'Name required', age: 'Adults only', agreed: 'Consent required',
    } });
    expect(result).not.toHaveProperty('data');
  });
  it('records only the first failing rule for a field', () => {
    const later = vi.fn(() => 'Second error');
    expect(validate({ name: '' }, { name: [() => 'First error', later] })).toEqual({ valid: false, errors: { name: 'First error' } });
    expect(later).not.toHaveBeenCalled();
  });
  it('continues to later fields after a failure', () => {
    expect(validate({ a: '', b: '' }, { a: [() => 'A'], b: [() => 'B'] })).toEqual({ valid: false, errors: { a: 'A', b: 'B' } });
  });
  it('runs successive rules while previous rules return null', () => {
    expect(validate({ password: 'abc' }, { password: [value => value ? null : 'Required', value => value.length >= 8 ? null : 'Too short'] }))
      .toEqual({ valid: false, errors: { password: 'Too short' } });
  });
  it('does not mistake falsy form values for missing data', () => {
    expect(validate({ score: 0, optedIn: false }, { score: [() => null], optedIn: [() => null] }))
      .toEqual({ valid: true, data: { score: 0, optedIn: false } });
  });
  it('supports empty forms and fields without rules', () => {
    expect(validate({}, {})).toEqual({ valid: true, data: {} });
    expect(validate({ name: '' }, { name: [] })).toEqual({ valid: true, data: { name: '' } });
  });
  it('does not mutate a frozen form or the rule arrays', () => {
    const data = Object.freeze({ name: 'Anna' });
    const rules = Object.freeze([() => null]);
    expect(validate(data, { name: rules })).toEqual({ valid: true, data });
    expect(rules).toHaveLength(1);
  });
  it('handles optional values through their field rules', () => {
    const optional: ValidationSchema<{ nick?: string }> = { nick: [value => value === undefined ? 'Missing nick' : null] };
    expect(validate<{ nick?: string }>({}, optional)).toEqual({ valid: false, errors: { nick: 'Missing nick' } });
  });
  it('treats an empty error message as an error, not as success', () => {
    expect(validate({ name: '' }, { name: [() => ''] })).toEqual({ valid: false, errors: { name: '' } });
  });
  it('preserves symbol field keys', () => {
    const key = Symbol('token');
    const result = validate({ [key]: '' }, { [key]: [() => 'Required'] });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.errors[key]).toBe('Required');
  });
  it('isValid narrows both result variants at runtime', () => {
    expect(isValid({ valid: true, data: 0 })).toBe(true);
    expect(isValid({ valid: false, errors: {} })).toBe(false);
  });
});
