export class Stack<T> {
  private readonly items: unknown[] = [];

  push(item: unknown): number {
    return this.items.push(item);
  }

  pop(): unknown {
    return this.items.pop();
  }

  peek(): unknown {
    return this.items[this.items.length - 1];
  }
}

export const numberStack = new Stack<unknown>();
export const stringStack = new Stack<unknown>();
