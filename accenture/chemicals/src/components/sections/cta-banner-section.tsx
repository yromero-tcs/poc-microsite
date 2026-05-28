import Image from 'next/image';
import { PrimaryButton, SectionHeading, SiteContainer } from '@poc-microsite/components';
import { images } from '@/config/images';
import { ctaContent } from '@/content/landing-page';

export function CtaBannerSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <Image src={images.ctaBanner} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-accenture-stage-dark/70" />
      <div className="relative z-10 px-6 lg:px-[160px]">
        <SiteContainer className="flex flex-col items-center gap-6 text-center md:gap-8">
          <SectionHeading size="xl" className="text-white">
            {ctaContent.heading}
          </SectionHeading>
          <PrimaryButton>{ctaContent.button}</PrimaryButton>
        </SiteContainer>
      </div>
    </section>
  );
}
