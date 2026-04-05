import { EventEmitter, type ProfileEvents } from '../../src/index';

describe('EventEmitter', () => {
  it('notifies subscribed handlers', () => {
    const emitter = new EventEmitter<ProfileEvents>();
    const receivedValues: unknown[] = [];

    emitter.on('onName', (value) => {
      receivedValues.push(value);
    });

    emitter.on('onAge', (value) => {
      receivedValues.push(value);
    });

    emitter.emit('onName', 'Max');
    emitter.emit('onAge', 29);

    expect(receivedValues).toEqual(['Max', 29]);
  });
});
