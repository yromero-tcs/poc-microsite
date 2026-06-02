import type { SectionLabelVariant } from './types';

type SectionLabelProps = {
  children: string;
  variant?: SectionLabelVariant;
  className?: string;
};

const variantClasses: Record<SectionLabelVariant, string> = {
  emphasis: 'text-brand-secondary',
  'on-dark': 'text-brand-accent-light',
  muted: 'text-brand-muted',
};

export function SectionLabel({
  children,
  variant = 'emphasis',
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
