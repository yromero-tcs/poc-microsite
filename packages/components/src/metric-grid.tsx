import type { MetricGridVariant } from './types';

type Metric = {
  value: string;
  label: string;
};

type MetricGridProps = {
  metrics: Metric[];
  variant?: MetricGridVariant;
};

const valueClasses: Record<MetricGridVariant, string> = {
  dark: 'text-brand-accent-light',
  light: 'text-brand-accent-light',
};

const labelClasses: Record<MetricGridVariant, string> = {
  dark: 'text-brand-muted',
  light: 'text-brand-muted',
};

export function MetricGrid({ metrics, variant = 'dark' }: MetricGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 border-t border-brand-muted/40 pt-6 md:gap-6">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <p className={`text-xl font-bold leading-7 sm:text-2xl md:text-[30px] md:leading-9 ${valueClasses[variant]}`}>
            {metric.value}
          </p>
          <p className={`mt-1 text-xs uppercase ${labelClasses[variant]}`}>{metric.label}</p>
        </div>
      ))}
    </div>
  );
}
