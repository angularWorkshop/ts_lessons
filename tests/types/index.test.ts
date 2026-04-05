import { expect, test } from 'vitest';
import { createEntity, type Entity } from '../../src/index';

type ExpectedEntity = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

const createdEntityMustMatchExpectedShape: ExpectedEntity = createEntity({
  id: 'entity-2',
  createdBy: 'max',
  createdAt: new Date('2026-01-01T10:00:00.000Z'),
  updatedAt: new Date('2026-01-02T10:00:00.000Z'),
  updatedBy: 'anna',
});
const entityAliasMustMatchExpectedShape: ExpectedEntity = null as unknown as Entity;

void createdEntityMustMatchExpectedShape;
void entityAliasMustMatchExpectedShape;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
