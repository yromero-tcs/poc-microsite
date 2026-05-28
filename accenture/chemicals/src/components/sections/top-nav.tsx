'use client';

import { useState } from 'react';
import { SiteContainer } from '@poc-microsite/components';
import { BrandLogos } from '@/components/brand-logos';
import { navigationLinks } from '@/content/landing-page';

function HamburgerIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#cdc3d2] bg-accenture-stage-light/95 backdrop-blur-sm">
      <div className="px-6 lg:px-[160px]">
        <SiteContainer size="wide" className="flex h-20 items-center justify-between pl-6 pr-6">
          <BrandLogos />
          <nav className="hidden items-center gap-4 lg:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="px-2 py-1 text-sm font-bold uppercase tracking-[0.14px] text-[#4b4451] hover:text-accenture-secondary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#4b4451] lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </SiteContainer>
      </div>
      {menuOpen && (
        <nav className="border-t border-[#cdc3d2] bg-accenture-stage-light px-6 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-sm font-bold uppercase tracking-[0.14px] text-[#4b4451] hover:text-accenture-secondary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
