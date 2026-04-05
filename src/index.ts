export type TypeGuard<T> = (value: unknown) => value is T;

export type Fetcher = (url: string) => Promise<unknown>;

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export async function fetchData<T>(
  url: string,
  guard: TypeGuard<T>,
  fetcher: Fetcher,
): Promise<T> {
  const payload = await fetcher(url);

  if (!guard(payload)) {
    throw new Error(`Invalid response for ${url}`);
  }

  return payload;
}

export function isTodo(value: unknown): value is Todo {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const record = value as Record<string, unknown>;

  return (
    typeof record.id === 'number' &&
    typeof record.title === 'string' &&
    typeof record.completed === 'boolean'
  );
}
