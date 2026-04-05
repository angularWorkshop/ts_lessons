export class Stack<T> {
  private readonly items: T[] = [];

  push(item: T): number {
    return this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

export const numberStack = new Stack<number>();
export const stringStack = new Stack<string>();
