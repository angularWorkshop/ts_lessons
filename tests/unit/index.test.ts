import { describeUnknownValue, isStudentActive, studentAge, studentName } from '../../src/index';

describe('typed variables exercise', () => {
  it('keeps the primitive variables in the expected shape', () => {
    expect(studentName).toBe('Max');
    expect(studentAge).toBe(28);
    expect(isStudentActive).toBe(true);
  });

  it('describes primitive unknown values', () => {
    expect(describeUnknownValue('TypeScript')).toBe('String: TypeScript');
    expect(describeUnknownValue(42)).toBe('Number: 42');
    expect(describeUnknownValue(true)).toBe('Boolean: true');
  });

  it('returns a fallback for unsupported values', () => {
    expect(describeUnknownValue(null)).toBe('Unsupported value');
    expect(describeUnknownValue({})).toBe('Unsupported value');
  });
});
