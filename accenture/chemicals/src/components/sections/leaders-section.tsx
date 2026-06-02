'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CarouselNav, SectionHeading, SectionLabel, SiteContainer } from '@poc-microsite/components';
import { images } from '@/config/images';
import { leadersContent } from '@/content/landing-page';

const memberImages = {
  team02: images.team02,
  team03: images.team03,
} as const;

export function LeadersSection() {
  const [offset, setOffset] = useState(0);
  const visibleCount = 3;
  const maxOffset = Math.max(0, leadersContent.members.length - visibleCount);

  return (
    <section id="leaders" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="px-6 lg:px-[160px]">
        <SiteContainer>
          <SectionLabel variant="muted">{leadersContent.label}</SectionLabel>
          <SectionHeading size="xl" className="mt-4 text-accenture-dark-gray">
            {leadersContent.heading}
          </SectionHeading>
          <div className="mt-10 md:mt-16">
            <CarouselNav
              leftIconSrc={images.navLeft}
              rightIconSrc={images.navRight}
              onPrev={() => setOffset((o) => Math.max(0, o - 1))}
              onNext={() => setOffset((o) => Math.min(maxOffset, o + 1))}
            />
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadersContent.members.slice(offset, offset + visibleCount).map((member, index) => (
              <article
                key={`${member.name}-${offset + index}`}
                className="flex flex-col items-center rounded-lg border border-accenture-stage-light bg-white p-6 text-center shadow-sm"
              >
                <div className="relative mb-6 flex size-[160px] items-center justify-center overflow-hidden rounded-full bg-accenture-secondary/20 sm:size-[200px] lg:size-[226px]">
                  {member.imageKey ? (
                    <Image
                      src={memberImages[member.imageKey]}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="size-full rounded-full bg-accenture-secondary" />
                  )}
                </div>
                <h3 className="text-base font-bold uppercase">{member.name}</h3>
                <p className="text-lg text-accenture-dark-gray md:text-xl">{member.title}</p>
                <p className="mt-4 text-base leading-6 text-accenture-body-muted">{member.bio}</p>
              </article>
            ))}
          </div>
        </SiteContainer>
      </div>
    </section>
  );
}
