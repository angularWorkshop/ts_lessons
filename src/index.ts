export type DeepReadonly<T> = T extends (...args: never[]) => unknown
  ? T
  : T extends readonly (infer Item)[]
    ? ReadonlyArray<DeepReadonly<Item>>
    : T extends object
      ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
      : T;

export interface FeatureConfig {
  name: string;
  flags: {
    beta: boolean;
    internal: boolean;
  };
  owners: Array<{
    id: string;
    contacts: {
      email: string;
    };
  }>;
  onInit: () => string;
}

export function asDeepReadonly<T>(value: T): DeepReadonly<T> {
  return value as DeepReadonly<T>;
}

export function buildFeatureConfig(): FeatureConfig {
  return {
    name: 'Type-Level Lab',
    flags: {
      beta: true,
      internal: false,
    },
    owners: [
      {
        id: 'owner-1',
        contacts: {
          email: 'owner-1@edutec.dev',
        },
      },
    ],
    onInit: () => 'ready',
  };
}
