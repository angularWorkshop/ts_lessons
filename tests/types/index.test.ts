import { expect, test } from 'vitest';
import { EventEmitter, type EventName, type ProfileEvents } from '../../src/index';

const validEventName: EventName<ProfileEvents> = 'onName';
const emitter = new EventEmitter<ProfileEvents>();

let namePayload = '';
let agePayload = 0;

emitter.on('onName', (value) => {
  namePayload = value;
});

emitter.on('onAge', (value) => {
  agePayload = value;
});

void validEventName;
void emitter;
void namePayload;
void agePayload;

// @ts-expect-error invalid event names must be rejected.
const invalidEventName: EventName<ProfileEvents> = 'nameChanged';

void invalidEventName;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
