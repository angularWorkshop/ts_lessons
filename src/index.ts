export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export function greetAll(names: readonly string[]): string[] {
  return names.map((name: string) => greet(name));
}
