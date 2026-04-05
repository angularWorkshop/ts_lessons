import { getResponseSummary, isSuccess } from '../../src/index';

describe('api response guards exercise', () => {
  it('returns a loaded summary for successful responses', () => {
    expect(
      getResponseSummary({
        status: 'success',
        data: [
          { id: 1, name: 'Max' },
          { id: 2, name: 'Anna' },
        ],
      }),
    ).toBe('Loaded 2 users');
  });

  it('returns an error summary for failed responses', () => {
    expect(getResponseSummary({ status: 'error', error: 'Unauthorized' })).toBe('Error: Unauthorized');
  });

  it('identifies a success branch', () => {
    expect(isSuccess({ status: 'success', data: [{ id: 1, name: 'Max' }] })).toBe(true);
  });
});
