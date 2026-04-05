import { expect, test } from 'vitest';
import {
  type DeepPartial,
  type MyPartial,
  type MyReadonly,
  type MyRequired,
  type Nullable,
  type Profile,
} from '../../src/index';

const partialProfile: MyPartial<Profile> = {};
const requiredProfile: MyRequired<Profile> = {
  id: 'profile-1',
  nickname: 'max',
  stats: {
    score: 10,
    tags: ['ts'],
  },
};
const nullableProfile: Nullable<Profile> = {
  id: null,
  nickname: null,
  stats: null,
};
const deepPartialProfile: DeepPartial<Profile> = {
  stats: {
    score: 10,
  },
};

void partialProfile;
void requiredProfile;
void nullableProfile;
void deepPartialProfile;

// @ts-expect-error readonly properties must not be writable.
((profile: MyReadonly<Profile>) => {
  profile.id = 'new-id';
})(null as unknown as MyReadonly<Profile>);

test('type contracts compile', () => {
  expect(true).toBe(true);
});
