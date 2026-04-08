import { describeTrend, formatMetricValue, } from '@app/shared';
export function buildDashboardCards(metrics) {
    return metrics.map((metric) => ({
        key: metric.key,
        label: metric.label,
        formattedValue: formatMetricValue(metric.value, metric.unit),
        trend: describeTrend(metric.delta),
    }));
}
//# sourceMappingURL=index.js.map