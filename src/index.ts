export function throwError(message: string): Error {
  // TODO: this function should throw and use the never return type
  return new Error(message);
}

export function logMessage(message: string): string {
  // TODO: this function should log and use the void return type
  return message;
}
