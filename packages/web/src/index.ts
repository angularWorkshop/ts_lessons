import { buildDashboardCards, type DashboardInput } from '@app/core';
import type { DashboardCard } from '@app/shared';

export interface DashboardViewModel {
  title: string;
  cards: DashboardCard[];
}

export function createDashboardView(
  title: string,
  metrics: DashboardInput[],
): DashboardViewModel {
  return {
    title,
    cards: buildDashboardCards(metrics),
  };
}

export function renderDashboard(title: string, metrics: DashboardInput[]): string {
  const view = createDashboardView(title, metrics);

  return [
    view.title,
    ...view.cards.map((card) => `- ${card.label}: ${card.formattedValue} (${card.trend})`),
  ].join('\n');
}
