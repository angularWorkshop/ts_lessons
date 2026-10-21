export type ValidationRule<V> = (value: V) => string | null;
// TODO: each key K needs rules for T[K], not the union of all field values.
export type ValidationSchema<T extends object> = { [K in keyof T]-?: readonly ValidationRule<T[keyof T]>[] };
export type ValidationResult<T> =
  | { valid: true; data: T }
  | { valid: false; errors: Partial<Record<keyof T, string>> };

export function isValid<T>(result: ValidationResult<T>): result is Extract<ValidationResult<T>, { valid: true }> {
  // TODO: use the valid discriminant.
  return false;
}

export function validate<T extends object>(data: T, schema: ValidationSchema<T>): ValidationResult<T> {
  // TODO: evaluate the rules, keep the first error per field, and return the matching union member.
  // Do not mutate data or schema. A successful result must contain the original data object.
  void [data, schema];
  return { valid: false, errors: {} };
}
