import type { ButtonHTMLAttributes } from 'react';

type PrimaryButtonProps = {
  children: string;
  href?: string;
  className?: string;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>;

const baseClassName =
  'inline-flex items-center justify-center rounded-sm border-0 bg-accenture-primary px-6 py-3 text-sm font-bold uppercase tracking-[1.2px] text-white transition-colors hover:bg-accenture-primary/90';

export function PrimaryButton({ children, href, className = '', type = 'button', onClick }: PrimaryButtonProps) {
  if (href) {
    return (
      <a href={href} className={`${baseClassName} no-underline ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClassName} ${className}`}>
      {children}
    </button>
  );
}
