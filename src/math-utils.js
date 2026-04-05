/** @param {number} a @param {number} b */
export function add(a, b) {
  return a + b;
}

/** @param {number} a @param {number} b */
export function multiply(a, b) {
  return a * b;
}

/** @param {number} value @param {number} min @param {number} max */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/** @param {number} start @param {number} end @param {number} [step=1] */
export function range(start, end, step = 1) {
  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
}

/** @param {number[]} values */
export function createStats(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return {
    min: sorted[0],
    max: sorted[sorted.length - 1],
    mean: values.reduce((s, v) => s + v, 0) / values.length,
    count: values.length,
  };
}
