'use client';

import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import { BulletList, CarouselNav, SectionHeading, SectionLabel, SiteContainer } from '@poc-microsite/components';
import { images } from '@/config/images';
import { caseStudiesContent } from '@/content/landing-page';

type CaseStudy = (typeof caseStudiesContent.studies)[number];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="flex w-[calc(100vw-48px)] shrink-0 snap-start flex-col overflow-hidden rounded-lg bg-accenture-stage-tint sm:w-[calc(100vw-48px)] md:h-auto md:w-[85vw] lg:h-[748px] lg:w-[1075px] lg:flex-row">
      <div className="flex shrink-0 flex-col gap-6 bg-accenture-stage-dark p-6 lg:w-[400px]">
        <div>
          <h3 className="text-xl font-bold leading-7 text-white md:text-2xl">{study.title}</h3>
          <p className="mt-2 text-base leading-6 text-accenture-light-purple">{study.summary}</p>
        </div>
        <div className="border-t border-white/20 pt-6">
          <p className="text-sm font-bold uppercase tracking-[0.14px] text-accenture-light-purple">
            THE CHALLENGE
          </p>
          <p className="mt-4 text-base leading-6 text-accenture-body-muted md:mt-6">{study.challenge}</p>
          <div className="mt-4 grid grid-cols-2 gap-4 md:mt-6 md:gap-6">
            {study.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-xl font-bold text-accenture-light-purple md:text-2xl">{m.value}</p>
                <p className="text-xs uppercase text-accenture-body-muted">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex shrink-0 flex-col justify-center gap-6 bg-accenture-stage-tint p-6 lg:w-[675px]">
        <div className="relative aspect-[1266/832] w-full overflow-hidden rounded lg:max-h-[328px]">
          <Image
            src={images.caseStudyDashboard}
            alt="Preference analytics dashboard"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14px] text-accenture-light-purple">
            OUR APPROACH
          </p>
          <div className="mt-4 md:mt-6">
            <BulletList items={study.approach} iconSrc={images.checkIcon} />
          </div>
        </div>
      </div>
    </article>
  );
}

export function CaseStudiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const studyCount = caseStudiesContent.studies.length;

  const scrollToIndex = useCallback(
    (index: number) => {
      const el = scrollRef.current;
      if (!el) return;
      const clamped = ((index % studyCount) + studyCount) % studyCount;
      setActiveIndex(clamped);
      const firstChild = el.children[clamped] as HTMLElement | undefined;
      if (firstChild) {
        el.scrollTo({ left: firstChild.offsetLeft, behavior: 'smooth' });
      }
    },
    [studyCount],
  );

  return (
    <section id="case-studies" className="bg-accenture-stage-light py-16 md:py-24 lg:py-32">
      <div className="mb-10 px-6 md:mb-16 lg:px-[160px]">
        <SiteContainer>
          <SectionLabel>{caseStudiesContent.label}</SectionLabel>
          <SectionHeading size="xl" className="mt-4 text-accenture-stage-dark">
            {caseStudiesContent.heading}
          </SectionHeading>
        </SiteContainer>
      </div>

      <div className="px-6 lg:pl-[160px] lg:pr-0">
        <div className="flex flex-col gap-4">
          <CarouselNav
            leftIconSrc={images.navLeft}
            rightIconSrc={images.navRight}
            onPrev={() => scrollToIndex(activeIndex - 1)}
            onNext={() => scrollToIndex(activeIndex + 1)}
          />
          <div
            ref={scrollRef}
            className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-8 md:gap-8 md:pb-12 lg:mx-0 lg:px-0"
            style={{ scrollbarWidth: 'thin' }}
            onScroll={() => {
              const el = scrollRef.current;
              if (!el) return;
              const children = Array.from(el.children) as HTMLElement[];
              let closest = 0;
              let minDist = Infinity;
              children.forEach((child, i) => {
                const dist = Math.abs(child.offsetLeft - el.scrollLeft);
                if (dist < minDist) {
                  minDist = dist;
                  closest = i;
                }
              });
              if (closest !== activeIndex) setActiveIndex(closest);
            }}
          >
            {caseStudiesContent.studies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
