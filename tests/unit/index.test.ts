import { readFileSync } from 'node:fs';
import { logMessage, throwError } from '../../src/index';

describe('never and void exercise', () => {
  it('throws an error with the provided message', () => {
    expect(() => throwError('Boom')).toThrowError('Boom');
  });

  it('returns undefined from the logger', () => {
    expect(logMessage('Saved')).toBeUndefined();
  });

  it('documents the difference between void and undefined', () => {
    const source: string = readFileSync(new URL('../../src/index.ts', import.meta.url), 'utf8');

    expect(source).toMatch(/void/i);
    expect(source).toMatch(/undefined/i);
  });
});
