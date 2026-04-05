import { expect, test } from 'vitest';
import { getters, type GetterTypes, type ServiceState } from '../../src/index';

type ExpectedGetterTypes = {
  getUser: () => string;
  getCourse: () => string;
  getIsOnline: () => boolean;
};

const generatedGetterTypes: ExpectedGetterTypes = null as unknown as GetterTypes<ServiceState>;
const getterObjectMustMatch: ExpectedGetterTypes = getters;

void generatedGetterTypes;
void getterObjectMustMatch;

// @ts-expect-error original property names must not remain in the remapped type.
getters.user();

test('type contracts compile', () => {
  expect(true).toBe(true);
});
