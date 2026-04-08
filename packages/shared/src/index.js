export function formatMetricValue(value, unit) {
    if (unit === 'usd') {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }).format(value);
    }
    return String(value);
}
export function describeTrend(delta) {
    if (delta > 0) {
        return 'up';
    }
    if (delta < 0) {
        return 'down';
    }
    return 'steady';
}
//# sourceMappingURL=index.js.map