import { expect, test } from 'vitest';
import { buildAcademyState, getDeepValue, type AcademyState, type DeepPick, type Paths } from '../../src/index.js';

type CityPath = 'user.profile.address.city';
type LessonsPath = 'user.stats.completedLessons';
type VimModePath = 'featureFlags.editor.vimMode';

const city: DeepPick<AcademyState, CityPath> = 'Minsk';
const completedLessons: DeepPick<AcademyState, LessonsPath> = 22;
const vimMode: DeepPick<AcademyState, VimModePath> = true;
const cityValue: DeepPick<AcademyState, CityPath> = getDeepValue(buildAcademyState(), 'user.profile.address.city');

const validPath: Paths<AcademyState> = 'user.profile.name';

void city;
void completedLessons;
void vimMode;
void cityValue;
void validPath;

// @ts-expect-error invalid paths must be rejected.
const invalidPath: Paths<AcademyState> = 'user.profile.country';

// @ts-expect-error getDeepValue must reject invalid paths.
getDeepValue(buildAcademyState(), 'featureFlags.editor.theme');

void invalidPath;

test('DeepPick path contracts compile', () => {
  expect(true).toBe(true);
});
