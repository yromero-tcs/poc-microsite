type Metric = {
  value: string;
  label: string;
};

type MetricGridProps = {
  metrics: Metric[];
  variant?: 'light' | 'dark';
};

export function MetricGrid({ metrics, variant = 'dark' }: MetricGridProps) {
  const valueClass =
    variant === 'dark' ? 'text-accenture-light-purple' : 'text-accenture-light-purple';
  const labelClass =
    variant === 'dark' ? 'text-accenture-body-muted' : 'text-accenture-body-muted';

  return (
    <div className="grid grid-cols-2 gap-4 border-t border-accenture-body-muted/40 pt-6 md:gap-6">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <p className={`text-xl font-bold leading-7 sm:text-2xl md:text-[30px] md:leading-9 ${valueClass}`}>
            {metric.value}
          </p>
          <p className={`mt-1 text-xs uppercase ${labelClass}`}>{metric.label}</p>
        </div>
      ))}
    </div>
  );
}
