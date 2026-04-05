export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};

export type CreateUserDto = Omit<User, 'id' | 'createdAt'>;

export type UpdateUserDto = Partial<CreateUserDto>;

export function createUser(input: CreateUserDto): User {
  return {
    id: `user:${input.email}`,
    name: input.name,
    email: input.email,
    createdAt: new Date(),
  };
}

export function updateUser(user: User, patch: UpdateUserDto): User {
  return {
    ...user,
    ...patch,
  };
}
