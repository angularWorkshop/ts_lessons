export type MyPartial<T> = {
  [K in keyof T]: T[K];
};

export type MyRequired<T> = {
  [K in keyof T]: T[K];
};

export type MyReadonly<T> = {
  [K in keyof T]: T[K];
};

export type Nullable<T> = {
  [K in keyof T]: T[K];
};

export type DeepPartial<T> = T;

export type Profile = {
  id: string;
  nickname?: string;
  stats: {
    score: number;
    tags: string[];
  };
};
