import { expectTypeOf } from 'vitest';
import {
  buildDashboardCards,
  createDashboardView,
  type DashboardCard,
  type DashboardInput,
  type DashboardViewModel,
  type MetricKey,
  type Trend,
  type ValueUnit,
} from '../../src/index';

describe('typescript monorepo types', () => {
  it('keeps shared types flowing through the package graph', () => {
    expectTypeOf<DashboardInput['key']>().toEqualTypeOf<MetricKey>();
    expectTypeOf<DashboardCard['trend']>().toEqualTypeOf<Trend>();
    expectTypeOf<DashboardInput['unit']>().toEqualTypeOf<ValueUnit>();
  });

  it('exposes the web package view model through the root entrypoint', () => {
    expectTypeOf(
      createDashboardView('Analytics', [
        {
          key: 'orders',
          label: 'Orders',
          value: 12,
          unit: 'count',
          delta: 4,
        },
      ]),
    ).toEqualTypeOf<DashboardViewModel>();
  });

  it('returns dashboard cards from the core package', () => {
    expectTypeOf(
      buildDashboardCards([
        {
          key: 'revenue',
          label: 'Revenue',
          value: 200,
          unit: 'usd',
          delta: 1,
        },
      ]),
    ).toEqualTypeOf<DashboardCard[]>();
  });
});
