export type ConfigKey = 'apiUrl' | 'timeout' | 'debug';

export type ConfigValue = string | number | boolean;

export type AppConfig = Record<ConfigKey, ConfigValue>;

export function validateConfig(config: AppConfig): boolean {
  return (
    typeof config.apiUrl === 'string' &&
    config.apiUrl.length > 0 &&
    typeof config.timeout === 'number' &&
    config.timeout >= 0 &&
    typeof config.debug === 'boolean'
  );
}
