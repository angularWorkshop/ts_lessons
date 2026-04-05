export type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

export type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

export type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

export type DeepPartial<T> = T extends readonly unknown[]
  ? T
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

export type Profile = {
  id: string;
  nickname?: string;
  stats: {
    score: number;
    tags: string[];
  };
};
