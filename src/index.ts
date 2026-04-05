export type ServiceState = {
  user: string;
  course: string;
  isOnline: boolean;
};

export type GetterTypes<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

export const getters: GetterTypes<ServiceState> = {
  getUser: () => 'Max',
  getCourse: () => 'TypeScript',
  getIsOnline: () => true,
};
