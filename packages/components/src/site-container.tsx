import type { ReactNode } from 'react';

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
  /** Nav/footer bar uses 1440px; default content column is 1280px per Figma */
  size?: 'content' | 'wide';
};

export function SiteContainer({ children, className = '', size = 'content' }: SiteContainerProps) {
  const maxWidth = size === 'wide' ? 'max-w-[1440px]' : 'max-w-[1280px]';
  return <div className={`mx-auto w-full ${maxWidth} ${className}`}>{children}</div>;
}

type PageGutterProps = {
  children: ReactNode;
  className?: string;
};

export function PageGutter({ children, className = '' }: PageGutterProps) {
  return <div className={`px-6 lg:px-[160px] ${className}`}>{children}</div>;
}
