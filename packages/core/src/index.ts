import {
  describeTrend,
  formatMetricValue,
  type DashboardCard,
  type MetricSnapshot,
} from '@app/shared';

export interface DashboardInput extends MetricSnapshot {
  delta: number;
}

export function buildDashboardCards(metrics: DashboardInput[]): DashboardCard[] {
  return metrics.map((metric) => ({
    key: metric.key,
    label: metric.label,
    formattedValue: formatMetricValue(metric.value, metric.unit),
    trend: describeTrend(metric.delta),
  }));
}
