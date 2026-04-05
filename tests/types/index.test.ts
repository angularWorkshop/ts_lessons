import { expect, test } from 'vitest';
import {
  buildSession,
  fetchCourseMeta,
  logAction,
  type CourseMeta,
  type Session,
} from '../../src/index';

const sessionType: ReturnType<typeof buildSession> = buildSession('user-1', 'mentor');
const wrappedCallResult: string = logAction(['publish', 2]);
const asyncResultType: Awaited<ReturnType<typeof fetchCourseMeta>> = {
  title: 'TypeScript',
  lessons: 29,
};

const manuallyWrittenSession: Session = sessionType;
const manuallyWrittenCourseMeta: Awaited<CourseMeta> = asyncResultType;

void sessionType;
void wrappedCallResult;
void asyncResultType;
void manuallyWrittenSession;
void manuallyWrittenCourseMeta;

// @ts-expect-error wrapper args must come from Parameters<typeof runAction>.
logAction(['publish']);

test('type contracts compile', () => {
  expect(true).toBe(true);
});
