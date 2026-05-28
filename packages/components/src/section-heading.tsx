import type { ReactNode } from 'react';

type SectionHeadingProps = {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  size?: 'xl' | 'lg' | 'md';
  className?: string;
};

const sizeClasses: Record<NonNullable<SectionHeadingProps['size']>, string> = {
  xl: 'text-[28px] leading-[34px] tracking-[-0.56px] sm:text-[36px] sm:leading-[40px] md:text-[48px] md:leading-[52.8px] md:tracking-[-0.96px]',
  lg: 'text-[26px] leading-[34px] sm:text-[32px] sm:leading-[42px] md:text-[38px] md:leading-[53px]',
  md: 'text-xl leading-6 md:text-2xl md:leading-7',
};

export function SectionHeading({
  children,
  as: Tag = 'h2',
  size = 'xl',
  className = '',
}: SectionHeadingProps) {
  return (
    <Tag className={`font-bold ${sizeClasses[size]} ${className}`}>{children}</Tag>
  );
}
