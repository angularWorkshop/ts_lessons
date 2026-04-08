export type Brand<T, Name extends string> = T & { readonly __brand: Name };

export type RouteName<Name extends string = string> = Brand<Name, 'RouteName'>;
export type RoutePath = Brand<string, 'RoutePath'>;
export type NavigationId = Brand<string, 'NavigationId'>;
export type CacheKey = Brand<string, 'CacheKey'>;

export function brand<T extends string, Name extends string>(value: T): Brand<T, Name> {
  return value as Brand<T, Name>;
}

export function createRouteName<Name extends string>(value: Name): RouteName<Name> {
  return brand<Name, 'RouteName'>(value);
}

export function createRoutePath(value: string): RoutePath {
  return brand<string, 'RoutePath'>(value);
}

export function createNavigationId(value: string): NavigationId {
  return brand<string, 'NavigationId'>(value);
}

export function createCacheKey(value: string): CacheKey {
  return brand<string, 'CacheKey'>(value);
}
