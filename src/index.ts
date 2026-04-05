export type ConfigKey = string;

export type ConfigValue = string | number | boolean;

export type AppConfig = Partial<Record<ConfigKey, ConfigValue>>;

export function validateConfig(config: AppConfig): boolean {
  return Object.values(config).every((value) => value !== null && value !== undefined);
}
