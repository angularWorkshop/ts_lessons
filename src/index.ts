export type ServiceState = {
  user: string;
  course: string;
  isOnline: boolean;
};

export type GetterTypes<T> = {
  [K in keyof T]: () => T[K];
};

export const getters: GetterTypes<ServiceState> = {
  user: () => 'Max',
  course: () => 'TypeScript',
  isOnline: () => true,
};
