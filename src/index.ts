export const users = [
  { id: 1, name: 'Max' },
  { id: 2, name: 'Anna' },
];

export function getPrimaryContact(list: readonly unknown[]): [string, boolean] {
  // TODO: type the list correctly and return [boolean, string]
  return ['No users', false];
}
