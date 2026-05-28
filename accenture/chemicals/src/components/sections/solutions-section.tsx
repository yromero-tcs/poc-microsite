'use client';

import { useState } from 'react';
import { SectionHeading, SectionLabel, SiteContainer } from '@poc-microsite/components';
import { solutionsContent } from '@/content/landing-page';

type SolutionCard = (typeof solutionsContent.cards)[number];
type SolutionStat = SolutionCard['stats'][number];

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width={12}
      height={8}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 text-accenture-secondary transition-transform duration-300 ease-in-out ${
        expanded ? 'rotate-180' : ''
      }`}
      aria-hidden
    >
      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SolutionStats({ stats }: { stats: SolutionStat[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 border-t border-accenture-stat-border pt-[25px]">
      {stats.map((stat) => (
        <div key={`${stat.value}-${stat.label}`} className={stat.fullWidth ? 'col-span-2' : ''}>
          <p className="text-center text-xl leading-6 text-accenture-secondary">{stat.value}</p>
          <p className="text-center text-xs capitalize leading-normal text-accenture-bullet-gray">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export function SolutionsSection() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());

  const toggleCard = (title: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  return (
    <section id="applications" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="px-6 lg:px-[160px]">
        <SiteContainer>
          <div className="mb-10 max-w-[950px] space-y-4 md:mb-16">
            <SectionLabel>{solutionsContent.label}</SectionLabel>
            <SectionHeading size="xl" className="text-accenture-dark-gray">
              {solutionsContent.heading}
            </SectionHeading>
            <p className="text-lg leading-6 text-accenture-dark-gray md:text-xl">{solutionsContent.body}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutionsContent.cards.map((card) => {
              const expanded = expandedIds.has(card.title);
              return (
                <article
                  key={card.title}
                  className={`overflow-hidden border border-accenture-body-muted border-t-4 border-t-accenture-secondary bg-white transition-[min-height] duration-300 ease-in-out ${
                    expanded ? 'min-h-[350px]' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleCard(card.title)}
                    className="flex w-full items-start justify-between gap-4 p-6 text-left md:p-8"
                    aria-expanded={expanded}
                  >
                    <h3 className="whitespace-pre-wrap text-lg leading-6 text-accenture-secondary md:text-xl">
                      {card.title}
                    </h3>
                    <ChevronIcon expanded={expanded} />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-4 px-6 pb-6 md:px-8 md:pb-8">
                        <p className="text-base leading-6 text-accenture-dark-gray">{card.body}</p>
                        <ul className="list-disc space-y-0 pl-6 text-base leading-6 text-accenture-bullet-gray">
                          {card.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                        <SolutionStats stats={card.stats} />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </SiteContainer>
      </div>
    </section>
  );
}
