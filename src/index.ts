export type UserRecord = {
  id: number;
  name: string;
  status: string;
};

export const users: readonly UserRecord[] = [
  { id: 1, name: 'Max', status: 'active' },
  { id: 2, name: 'Anna', status: 'inactive' },
  { id: 3, name: 'Leo', status: 'pending' },
];

export function filterUsersByStatus(list: readonly UserRecord[], status: string): UserRecord[] {
  // TODO: replace string literals with a string enum and type the status argument with it
  return list.filter((user: UserRecord) => user.status === status);
}
