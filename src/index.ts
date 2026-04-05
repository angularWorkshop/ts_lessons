export interface CourseStats {
  title: string;
  lessonCount: number;
  tags: readonly string[];
}

export function buildCourseLabel(stats: CourseStats): string {
  return `${stats.title} (${stats.lessonCount} lessons)`;
}

export function getFirstTag(stats: CourseStats): string | undefined {
  return stats.tags[0];
}
