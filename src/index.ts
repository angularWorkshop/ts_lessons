export type EventName<T> = string;

export class EventEmitter<T extends Record<string, unknown>> {
  private readonly listeners = new Map<string, Array<(value: unknown) => void>>();

  on(event: string, handler: (value: unknown) => void): void {
    const currentListeners = this.listeners.get(event) ?? [];
    currentListeners.push(handler);
    this.listeners.set(event, currentListeners);
  }

  emit(event: string, value: unknown): void {
    const currentListeners = this.listeners.get(event) ?? [];

    for (const listener of currentListeners) {
      listener(value);
    }
  }
}

export type ProfileEvents = {
  name: string;
  age: number;
  isOnline: boolean;
};
