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
export declare function formatMetricValue(value: number, unit: ValueUnit): string;
export declare function describeTrend(delta: number): Trend;
//# sourceMappingURL=index.d.ts.map