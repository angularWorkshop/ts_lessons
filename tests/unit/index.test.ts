import { Stack, numberStack, stringStack } from '../../src/index';

describe('Stack', () => {
  it('uses LIFO order', () => {
    const stack = new Stack<number>();

    expect(stack.peek()).toBeUndefined();

    stack.push(10);
    stack.push(20);

    expect(stack.peek()).toBe(20);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
    expect(stack.pop()).toBeUndefined();
  });

  it('keeps separate stacks for separate value types', () => {
    numberStack.push(1);
    numberStack.push(2);
    stringStack.push('ts');
    stringStack.push('course');

    expect(numberStack.pop()).toBe(2);
    expect(numberStack.peek()).toBe(1);
    expect(stringStack.pop()).toBe('course');
    expect(stringStack.peek()).toBe('ts');
  });
});
