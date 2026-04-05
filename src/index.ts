export interface User {
  id: number;
  name: string;
}

export interface Admin {
  permissions: string[];
}

export const adminUser: Admin = {
  permissions: ['manage-users', 'publish-course'],
};

export function printUser(user: User): string {
  return user.name;
}
