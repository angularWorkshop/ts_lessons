export type MetricKey = 'revenue' | 'orders' | 'refunds';
export type ValueUnit = 'usd' | 'count';
export type Trend = 'up' | 'steady' | 'down';

export interface MetricSnapshot {
  key: MetricKey;
  label: string;
  value: number;
  unit: ValueUnit;
}

export interface DashboardCard {
  key: MetricKey;
  label: string;
  formattedValue: string;
  trend: Trend;
}

export function formatMetricValue(value: number, unit: ValueUnit): string {
  if (unit === 'usd') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  }

  return String(value);
}

export function describeTrend(delta: number): Trend {
  if (delta > 0) {
    return 'up';
  }

  if (delta < 0) {
    return 'down';
  }

  return 'steady';
}
