import { SiteContainer } from '@poc-microsite/components';
import { BrandLogos } from '@/components/brand-logos';
import { footerContent } from '@/content/landing-page';

export function SiteFooter() {
  return (
    <footer className="bg-accenture-footer py-10 md:py-16">
      <div className="px-6 lg:px-[160px]">
        <SiteContainer
          size="wide"
          className="flex flex-col items-start gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
        >
          <BrandLogos variant="footer" />
          <p className="text-xs capitalize text-white/60 sm:text-right">{footerContent.copyright}</p>
        </SiteContainer>
      </div>
    </footer>
  );
}
