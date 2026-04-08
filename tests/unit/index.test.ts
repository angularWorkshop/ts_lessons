import { buildDashboardCards, renderDashboard } from '../../src/index';

describe('typescript monorepo runtime', () => {
  it('builds dashboard cards via the shared and core packages', () => {
    expect(
      buildDashboardCards([
        {
          key: 'revenue',
          label: 'Revenue',
          value: 15320.4,
          unit: 'usd',
          delta: 12,
        },
        {
          key: 'orders',
          label: 'Orders',
          value: 48,
          unit: 'count',
          delta: -3,
        },
      ]),
    ).toEqual([
      {
        key: 'revenue',
        label: 'Revenue',
        formattedValue: '$15,320.40',
        trend: 'up',
      },
      {
        key: 'orders',
        label: 'Orders',
        formattedValue: '48',
        trend: 'down',
      },
    ]);
  });

  it('renders a dashboard summary from the web package', () => {
    expect(
      renderDashboard('Operations', [
        {
          key: 'refunds',
          label: 'Refunds',
          value: 3,
          unit: 'count',
          delta: 0,
        },
      ]),
    ).toBe('Operations\n- Refunds: 3 (steady)');
  });
});
