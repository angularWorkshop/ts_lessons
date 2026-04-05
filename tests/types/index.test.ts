import { expect, test } from 'vitest';
import {
  addUsd,
  convertEurToUsd,
  eur,
  rub,
  usd,
  type EUR,
  type RUB,
  type USD,
} from '../../src/index.js';

const tenEur: EUR = eur(10);
const fifteenUsd: USD = usd(15);
const ninetyRub: RUB = rub(90);
const convertedUsd: USD = convertEurToUsd(tenEur, 1.1);
const totalUsd: USD = addUsd(fifteenUsd, convertedUsd);

void ninetyRub;
void totalUsd;

// @ts-expect-error USD must not be assignable to EUR.
const invalidEur: EUR = fifteenUsd;

// @ts-expect-error addUsd must reject EUR values.
addUsd(tenEur, fifteenUsd);

// @ts-expect-error addUsd must reject RUB values.
addUsd(fifteenUsd, ninetyRub);

// @ts-expect-error convertEurToUsd expects EUR as the source currency.
convertEurToUsd(fifteenUsd, 1.1);

void invalidEur;

test('branded currencies compile correctly', () => {
  expect(true).toBe(true);
});
