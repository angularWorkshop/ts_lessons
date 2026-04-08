import { createCacheKey } from './brands';

export interface LogSink {
  appendLog(message: string): void;
}

const METHOD_CACHE = Symbol('method-cache');

type CacheableInstance = {
  [METHOD_CACHE]?: Map<string, unknown>;
};

export function logged(label?: string): MethodDecorator {
  return (_target, propertyKey, descriptor: PropertyDescriptor) => {
    const original = descriptor.value as ((...args: unknown[]) => unknown) | undefined;

    if (!original) {
      return descriptor;
    }

    descriptor.value = function (...args: unknown[]) {
      const result = original.apply(this, args);
      const sink = this as Partial<LogSink>;

      if (typeof sink.appendLog === 'function') {
        sink.appendLog(`${label ?? String(propertyKey)}:${args.length}`);
      }

      return result;
    };

    return descriptor;
  };
}

export function cached(): MethodDecorator {
  return (_target, propertyKey, descriptor: PropertyDescriptor) => {
    const original = descriptor.value as ((...args: unknown[]) => unknown) | undefined;

    if (!original) {
      return descriptor;
    }

    descriptor.value = function (...args: unknown[]) {
      const instance = this as CacheableInstance;
      const cache = instance[METHOD_CACHE] ?? new Map<string, unknown>();
      instance[METHOD_CACHE] = cache;

      const cacheKey = createCacheKey(`${String(propertyKey)}:${JSON.stringify(args)}`);

      if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
      }

      const result = original.apply(this, args);
      cache.set(cacheKey, result);
      return result;
    };

    return descriptor;
  };
}
