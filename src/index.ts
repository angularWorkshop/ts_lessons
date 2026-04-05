export const routes = ['/', '/courses', '/profile'] as const;

export type RoutePath = (typeof routes)[number];

export function navigateTo(route: RoutePath): string {
  return `Navigating to ${route}`;
}
