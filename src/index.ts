export type User = {
  id: number;
  name: string;
};

export const users: readonly User[] = [
  { id: 1, name: 'Max' },
  { id: 2, name: 'Anna' },
];

export function getPrimaryContact(list: readonly User[]): [boolean, string] {
  if (list.length === 0) {
    return [false, 'No users'];
  }

  return [true, list[0]!.name];
}
