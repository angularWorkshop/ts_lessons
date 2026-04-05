export function buildSession(userId: string, role: 'student' | 'mentor') {
  return {
    userId,
    role,
    createdAt: new Date('2026-01-01T00:00:00.000Z'),
  };
}

export type Session = {
  userId: string;
  role: string;
  createdAt: string;
};

export function runAction(action: string, retries: number): string {
  return `${action}:${retries}`;
}

export function logAction(args: [string, number]): string {
  return runAction(args[0], args[1]);
}

export async function fetchCourseMeta() {
  return {
    title: 'TypeScript',
    lessons: 29,
  };
}

export type CourseMeta = Promise<{
  title: string;
  lessons: number;
}>;
