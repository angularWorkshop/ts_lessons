export interface AcademyState {
  user: {
    profile: {
      name: string;
      address: {
        city: string;
        zip: number;
      };
    };
    stats: {
      completedLessons: number;
    };
  };
  featureFlags: {
    editor: {
      vimMode: boolean;
    };
  };
}

type StringKeyOf<T> = Extract<keyof T, string>;

export type Paths<T> = T extends object
  ? {
      [K in StringKeyOf<T>]: T[K] extends object ? K | `${K}.${Paths<T[K]>}` : K;
    }[StringKeyOf<T>]
  : never;

export type DeepPick<T, Path extends string> = Path extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? DeepPick<T[Key], Rest>
    : never
  : Path extends keyof T
    ? T[Path]
    : never;

export function buildAcademyState(): AcademyState {
  return {
    user: {
      profile: {
        name: 'Max',
        address: {
          city: 'Minsk',
          zip: 220004,
        },
      },
      stats: {
        completedLessons: 22,
      },
    },
    featureFlags: {
      editor: {
        vimMode: true,
      },
    },
  };
}

export function getDeepValue<T, Path extends Paths<T>>(value: T, path: Path): DeepPick<T, Path> {
  const parts = path.split('.');
  let current: unknown = value;

  for (const part of parts) {
    if (typeof current !== 'object' || current === null) {
      throw new Error(`Cannot resolve path: ${path}`);
    }

    current = (current as Record<string, unknown>)[part];
  }

  return current as DeepPick<T, Path>;
}
