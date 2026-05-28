import { Button } from 'react-bootstrap';

type OutlineButtonProps = {
  children: string;
  href?: string;
  className?: string;
};

export function OutlineButton({ children, href, className = '' }: OutlineButtonProps) {
  return (
    <Button
      as={href ? 'a' : undefined}
      href={href}
      variant="outline"
      className={`rounded-sm border-2 border-accenture-dark-purple bg-transparent px-[34px] py-[18px] text-sm font-bold uppercase tracking-[1.2px] text-accenture-dark-purple hover:bg-accenture-dark-purple/5 ${className}`}
    >
      {children}
    </Button>
  );
}
