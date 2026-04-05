export const studentName: string = 'Max';
export const studentAge: number = 28;
export const isStudentActive: boolean = true;

export function describeUnknownValue(value: unknown): string {
  if (typeof value === 'string') {
    return `String: ${value}`;
  }

  if (typeof value === 'number') {
    return `Number: ${value}`;
  }

  if (typeof value === 'boolean') {
    return `Boolean: ${value}`;
  }

  return 'Unsupported value';
}
