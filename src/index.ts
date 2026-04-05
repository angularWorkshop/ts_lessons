export enum Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
}

export type UserRecord = {
  id: number;
  name: string;
  status: Status;
};

export const users: readonly UserRecord[] = [
  { id: 1, name: 'Max', status: Status.Active },
  { id: 2, name: 'Anna', status: Status.Inactive },
  { id: 3, name: 'Leo', status: Status.Pending },
];

export function filterUsersByStatus(list: readonly UserRecord[], status: Status): UserRecord[] {
  return list.filter((user: UserRecord) => user.status === status);
}
