import { AiToolsSection } from '@/components/sections/ai-tools-section';
import { CaseStudiesSection } from '@/components/sections/case-studies-section';
import { CtaBannerSection } from '@/components/sections/cta-banner-section';
import { HeroSection } from '@/components/sections/hero-section';
import { LeadersSection } from '@/components/sections/leaders-section';
import { ProductShowcaseSection } from '@/components/sections/product-showcase-section';
import { SiteFooter } from '@/components/sections/site-footer';
import { SolutionOverviewSection } from '@/components/sections/solution-overview-section';
import { SolutionsSection } from '@/components/sections/solutions-section';
import { TopNav } from '@/components/sections/top-nav';

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main>
        <HeroSection />
        <SolutionOverviewSection />
        <SolutionsSection />
        <CaseStudiesSection />
        <AiToolsSection />
        <ProductShowcaseSection />
        <LeadersSection />
        <CtaBannerSection />
      </main>
      <SiteFooter />
    </>
  );
}
