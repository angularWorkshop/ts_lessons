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
): Promise<unknown> {
  const payload = await fetcher(url);

  if (!guard(payload)) {
    return null;
  }

  return payload;
}

export function isTodo(value: unknown): value is Todo {
  return typeof value === 'object' && value !== null && 'id' in value;
}
