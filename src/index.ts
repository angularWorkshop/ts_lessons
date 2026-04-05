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

export function formatUserName(user: User): string {
  return user.name.toUpperCase();
}

export function getUserById(users: User[], id: string): string | undefined {
  const user = users.find((u) => u.id === id);
  return user?.name ?? 'Unknown';
}

export function getFirstElement(items: string[]): string | undefined {
  return items[0];
}

// ---- Classes ----

export class ApiClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  request(path: string): string {
    return `${this.baseUrl}${path}`;
  }
}

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

  override log(msg: string): string {
    return `[${this.prefix}] ${msg}`;
  }
}

export function createConfig(port: number): AppConfig {
  return { port };
}
