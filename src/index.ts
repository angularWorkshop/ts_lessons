export type ValidationRule =
  | { type: 'required' }
  | { type: 'minLength'; value: number };

const validationMetadata = new WeakMap<object, Map<string, ValidationRule[]>>();

function addRule(target: object, propertyKey: string, rule: ValidationRule): void {
  const existingMetadata = validationMetadata.get(target) ?? new Map<string, ValidationRule[]>();
  const existingRules = existingMetadata.get(propertyKey) ?? [];

  existingMetadata.set(propertyKey, [...existingRules, rule]);
  validationMetadata.set(target, existingMetadata);
}

export function Required(target: object, propertyKey: string): void {
  addRule(target, propertyKey, { type: 'required' });
}

export function MinLength(length: number) {
  return function (target: object, propertyKey: string): void {
    addRule(target, propertyKey, { type: 'minLength', value: length });
  };
}

export function getValidationMetadata(target: object): Record<string, ValidationRule[]> {
  const metadata = validationMetadata.get(target);

  if (!metadata) {
    return {};
  }

  return Object.fromEntries(metadata.entries());
}

export function validate<T extends object>(instance: T): string[] {
  const metadata = validationMetadata.get(Object.getPrototypeOf(instance));

  if (!metadata) {
    return [];
  }

  const errors: string[] = [];

  for (const [propertyKey, rules] of metadata.entries()) {
    const value = Reflect.get(instance, propertyKey);

    for (const rule of rules) {
      if (rule.type === 'required' && (!value || value === '')) {
        errors.push(`${propertyKey} is required`);
      }

      if (
        rule.type === 'minLength' &&
        typeof value === 'string' &&
        value.length < rule.value
      ) {
        errors.push(`${propertyKey} must be at least ${rule.value} characters`);
      }
    }
  }

  return errors;
}

export class RegistrationForm {
  @Required
  public email = '';

  @MinLength(8)
  @Required
  public password = '';

  @MinLength(2)
  public displayName = '';

  constructor(init: Partial<RegistrationForm> = {}) {
    Object.assign(this, init);
  }
}
