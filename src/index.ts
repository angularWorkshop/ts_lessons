export type EventName<T> = `on${Capitalize<string & keyof T>}`;

type EventKey<T, TEvent extends EventName<T>> = {
  [K in keyof T]: TEvent extends `on${Capitalize<string & K>}` ? K : never;
}[keyof T];

export class EventEmitter<T extends Record<string, unknown>> {
  private readonly listeners = new Map<string, Array<(value: T[keyof T]) => void>>();

  on<TEvent extends EventName<T>>(event: TEvent, handler: (value: T[EventKey<T, TEvent>]) => void): void {
    const currentListeners = this.listeners.get(event) ?? [];
    currentListeners.push(handler as (value: T[keyof T]) => void);
    this.listeners.set(event, currentListeners);
  }

  emit<TEvent extends EventName<T>>(event: TEvent, value: T[EventKey<T, TEvent>]): void {
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
