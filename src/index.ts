export type AppEvent =
  | { type: 'click'; x: number; y: number }
  | { type: 'scroll'; offsetY: number }
  | { type: 'keypress'; key: string };

export function assertNever(value: never): never {
  throw new Error(`Unexpected event: ${value}`);
}

export function describeEvent(event: AppEvent): string {
  switch (event.type) {
    case 'click':
      return `Click at ${event.x}:${event.y}`;
    case 'scroll':
      return `Scroll to ${event.offsetY}`;
    case 'keypress':
      return `Key pressed: ${event.key}`;
    default:
      return assertNever(event);
  }
}
