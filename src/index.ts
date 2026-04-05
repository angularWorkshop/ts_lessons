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

// TODO: replace with a recursive union of valid dot-notation paths.
export type Paths<T> = string;

// TODO: resolve the type at the provided dot-notation path.
export type DeepPick<T, Path extends string> = T;

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
