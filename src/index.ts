export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};

export type CreateUserDto = User;

export type UpdateUserDto = CreateUserDto;

export function createUser(input: CreateUserDto): User {
  return input;
}

export function updateUser(user: User, patch: UpdateUserDto): User {
  return {
    ...user,
    ...patch,
  };
}
