import { expect, test } from 'vitest';
import { buildCourseLabel, getFirstTag, type CourseStats } from '../../src/index';

const buildCourseLabelParametersMustMatchCourseStats: [CourseStats] =
  null as unknown as Parameters<typeof buildCourseLabel>;
const buildCourseLabelReturnMustBeString: string = null as unknown as ReturnType<typeof buildCourseLabel>;

const getFirstTagParametersMustMatchCourseStats: [CourseStats] =
  null as unknown as Parameters<typeof getFirstTag>;
const getFirstTagReturnMustBeOptionalString: string | undefined = null as unknown as ReturnType<typeof getFirstTag>;

void buildCourseLabelParametersMustMatchCourseStats;
void buildCourseLabelReturnMustBeString;
void getFirstTagParametersMustMatchCourseStats;
void getFirstTagReturnMustBeOptionalString;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
