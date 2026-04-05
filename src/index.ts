export type AppEvent =
  | { type: 'click'; x: number; y: number }
  | { type: 'scroll'; offsetY: number }
  | { type: 'keypress'; key: string };

export function assertNever(value: string): never {
  throw new Error(`Unexpected event: ${value}`);
}

export function describeEvent(event: AppEvent): string {
  switch (event.type) {
    case 'click':
      return `Click at ${event.x}:${event.y}`;
    case 'scroll':
      return `Scroll to ${event.offsetY}`;
    default:
      return assertNever(event.type);
  }
}
