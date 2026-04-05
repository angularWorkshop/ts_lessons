export interface User {
  id: number;
  name: string;
  email?: string;
}

export interface Admin extends User {
  readonly permissions: readonly string[];
}

export const adminUser: Admin = {
  id: 100,
  name: 'Course Admin',
  permissions: ['manage-users', 'publish-course'],
};

export function printUser(user: User): string {
  const email = user.email ?? 'no email';

  return `${user.name} <${email}>`;
}
