import { describeEvent } from '../../src/index';

describe('discriminated union exercise', () => {
  it('describes click events', () => {
    expect(describeEvent({ type: 'click', x: 10, y: 20 })).toBe('Click at 10:20');
  });

  it('describes scroll events', () => {
    expect(describeEvent({ type: 'scroll', offsetY: 120 })).toBe('Scroll to 120');
  });

  it('describes keypress events', () => {
    expect(describeEvent({ type: 'keypress', key: 'Enter' })).toBe('Key pressed: Enter');
  });
});
