import Image from 'next/image';
import {
  OutlineButton,
  PrimaryButton,
  SectionHeading,
  SiteContainer,
} from '@poc-microsite/components';
import { images } from '@/config/images';
import { heroContent } from '@/content/landing-page';

export function HeroSection() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="px-6 lg:px-[160px]">
        <SiteContainer className="flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:items-start lg:gap-6">
          <div className="flex flex-1 flex-col gap-4 lg:min-w-[664px]">
            <SectionHeading as="h1" size="xl" className="text-accenture-dark-gray">
              {heroContent.headlineLine1}
              <br />
              {heroContent.headlineLine2}
            </SectionHeading>
            <p className="max-w-3xl text-lg leading-6 text-[#4b4451] md:text-xl">{heroContent.subheadline}</p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {heroContent.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-accenture-stage-light px-3 py-2 text-xs uppercase text-black md:px-4"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-8 md:pt-16">
              <PrimaryButton>{heroContent.primaryCta}</PrimaryButton>
              <OutlineButton>{heroContent.secondaryCta}</OutlineButton>
            </div>
          </div>
          <div className="relative min-h-[300px] w-full overflow-hidden rounded-sm sm:min-h-[400px] lg:min-h-[664px] lg:min-w-[432px] lg:flex-1">
            <Image
              src={images.heroImage}
              alt="Chemical industry professional with digital analytics"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </SiteContainer>
      </div>
    </section>
  );
}
