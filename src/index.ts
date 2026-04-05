export function throwError(message: string): never {
  throw new Error(message);
}

// void means the caller should not rely on a value, while undefined is the
// concrete runtime value a function may produce when it returns nothing.
export function logMessage(message: string): void {
  console.log(message);
}
