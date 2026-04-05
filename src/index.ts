export const routes = ['/', '/courses', '/profile'];

export type RoutePath = string;

export function navigateTo(route: RoutePath): string {
  return `Navigating to ${route}`;
}
