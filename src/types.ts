export interface AppEnv {
  mode: 'development' | 'production' | 'test';
  version: string;
  debug: boolean;
}
