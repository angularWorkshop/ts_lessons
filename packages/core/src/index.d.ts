import { type DashboardCard, type MetricSnapshot } from '@app/shared';
export interface DashboardInput extends MetricSnapshot {
    delta: number;
}
export declare function buildDashboardCards(metrics: DashboardInput[]): DashboardCard[];
//# sourceMappingURL=index.d.ts.map