import { greet, greetAll } from '../../src/index';

describe('first typed greeting', () => {
  it('greets one person', () => {
    expect(greet('Max')).toBe('Hello, Max!');
  });

  it('greets many people', () => {
    expect(greetAll(['Max', 'Anna'])).toEqual(['Hello, Max!', 'Hello, Anna!']);
  });
});
