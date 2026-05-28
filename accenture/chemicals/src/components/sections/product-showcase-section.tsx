'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SectionHeading, SectionLabel, SiteContainer } from '@poc-microsite/components';
import { images } from '@/config/images';
import { productShowcaseContent } from '@/content/landing-page';

export function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState(productShowcaseContent.tabs[0].id);
  const tab = productShowcaseContent.tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="px-6 lg:px-[160px]">
        <SiteContainer className="text-center">
          <SectionLabel className="inline-block">{productShowcaseContent.label}</SectionLabel>
          <SectionHeading size="xl" className="mt-4 text-accenture-dark-gray">
            {productShowcaseContent.heading}
          </SectionHeading>
          <div className="mt-8 flex flex-wrap justify-center gap-0 border-b border-accenture-body-muted/30 md:mt-12">
            {productShowcaseContent.tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`px-4 py-3 text-sm font-normal md:px-8 md:py-4 md:text-base ${
                  activeTab === t.id
                    ? 'border-b-2 border-accenture-secondary text-accenture-dark-gray'
                    : 'text-accenture-body-muted'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-6 text-left md:mt-16 lg:flex-row lg:flex-wrap lg:items-start">
            <div
              className={`relative min-h-[200px] w-full overflow-hidden rounded sm:min-h-[300px] lg:min-w-0 lg:flex-1 ${
                activeTab === 'hr' ? 'order-2 lg:order-1' : ''
              }`}
            >
              <Image
                src={activeTab === 'sales' ? images.salesTab : images.hrTab}
                alt={tab.title}
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="w-full flex-1 space-y-6 lg:min-w-[400px]">
              <SectionHeading as="h3" size="lg" className="text-accenture-dark-gray">
                {tab.title}
              </SectionHeading>
              <p className="text-sm font-bold uppercase tracking-[0.14px] text-accenture-secondary">
                {tab.intro}
              </p>
              <ul className="space-y-4">
                {tab.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-base leading-6">
                    <span className="font-bold text-accenture-secondary">+</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SiteContainer>
      </div>
    </section>
  );
}
