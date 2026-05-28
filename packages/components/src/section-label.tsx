type SectionLabelProps = {
  children: string;
  variant?: 'purple' | 'light' | 'dark';
  className?: string;
};

const variantClasses: Record<NonNullable<SectionLabelProps['variant']>, string> = {
  purple: 'text-accenture-secondary',
  light: 'text-accenture-light-purple',
  dark: 'text-accenture-body-muted',
};

export function SectionLabel({
  children,
  variant = 'purple',
  className = '',
}: SectionLabelProps) {
  return (
    <p
      className={`text-sm font-bold uppercase tracking-[0.14px] leading-4 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </p>
  );
}
