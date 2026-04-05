import { createEntity } from '../../src/index';

describe('composable types exercise', () => {
  it('creates a composed entity with all required fields', () => {
    const createdAt = new Date('2026-01-01T10:00:00.000Z');
    const updatedAt = new Date('2026-01-02T10:00:00.000Z');

    expect(
      createEntity({
        id: 'entity-1',
        createdBy: 'max',
        createdAt,
        updatedAt,
        updatedBy: 'anna',
      }),
    ).toEqual({
      id: 'entity-1',
      createdBy: 'max',
      createdAt,
      updatedAt,
      updatedBy: 'anna',
    });
  });
});
