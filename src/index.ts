export type ValidationRule<V> = (value: V) => string | null;
export type ValidationSchema<T extends object> = { [K in keyof T]-?: readonly ValidationRule<T[K]>[] };
export type ValidationResult<T> =
  | { valid: true; data: T }
  | { valid: false; errors: Partial<Record<keyof T, string>> };

export function isValid<T>(result: ValidationResult<T>): result is Extract<ValidationResult<T>, { valid: true }> {
  return result.valid;
}

export function validate<T extends object>(data: T, schema: ValidationSchema<T>): ValidationResult<T> {
  const errors = Object.create(null) as Partial<Record<keyof T, string>>;
  let failed = false;
  for (const key of Reflect.ownKeys(schema) as (keyof T)[]) {
    for (const rule of schema[key]) {
      const message = rule(data[key]);
      if (message !== null) {
        errors[key] = message;
        failed = true;
        break;
      }
    }
  }
  return failed ? { valid: false, errors } : { valid: true, data };
}
