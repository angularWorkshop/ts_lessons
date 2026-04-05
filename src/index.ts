// ---- Types ----

export interface User {
  id: string;
  name: string;
  email?: string;
}

export interface AppConfig {
  port: number;
  debug?: boolean;
  logLevel?: 'info' | 'warn' | 'error';
}

// ---- Functions ----

// TODO: add type annotation for the `user` parameter (noImplicitAny)
export function formatUserName(user) {
  return (user.name as string).toUpperCase();
}

// TODO: handle the case when user is not found (strictNullChecks)
export function getUserById(users: User[], id: string): string {
  const user = users.find((u) => u.id === id);
  return user.name;
}

// TODO: account for empty arrays (noUncheckedIndexedAccess)
export function getFirstElement(items: string[]): string {
  return items[0];
}

// ---- Classes ----

// TODO: initialize baseUrl properly (strictPropertyInitialization)
export class ApiClient {
  baseUrl: string;

  request(path: string): string {
    return `${this.baseUrl}${path}`;
  }
}

// TODO: add override keyword (noImplicitOverride)
export class BaseLogger {
  log(msg: string): string {
    return `[LOG] ${msg}`;
  }
}

export class PrefixLogger extends BaseLogger {
  prefix: string;

  constructor(prefix: string) {
    super();
    this.prefix = prefix;
  }

  log(msg: string): string {
    return `[${this.prefix}] ${msg}`;
  }
}

// TODO: do not assign undefined explicitly to optional property (exactOptionalPropertyTypes)
export function createConfig(port: number): AppConfig {
  return { port, debug: undefined };
}
