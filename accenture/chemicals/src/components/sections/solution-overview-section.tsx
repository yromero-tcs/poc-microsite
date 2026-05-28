import { MetricGrid, SectionHeading, SectionLabel, SiteContainer } from '@poc-microsite/components';
import { images } from '@/config/images';
import { overviewContent } from '@/content/landing-page';

export function SolutionOverviewSection() {
  return (
    <section id="solution" className="bg-accenture-stage-dark py-16 md:py-24 lg:py-32">
      <div className="px-6 lg:px-[160px]">
        <SiteContainer className="flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:items-end lg:gap-6">
          <div className="flex flex-1 flex-col gap-4 lg:min-w-[548px]">
            <SectionLabel variant="light">{overviewContent.label}</SectionLabel>
            <SectionHeading size="xl" className="text-white">
              {overviewContent.heading}
            </SectionHeading>
            <p className="text-lg leading-6 text-accenture-body-muted md:text-xl">{overviewContent.body}</p>
            <MetricGrid metrics={overviewContent.metrics} />
          </div>
          <div className="grid flex-1 grid-rows-[auto_auto] gap-6 lg:min-w-[548px]">
            {overviewContent.cards.map((card, index) => (
              <article
                key={card.title}
                className="border border-accenture-stage-tint bg-accenture-stage-tint p-6"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-sm border border-accenture-light-purple">
                  <img
                    src={index === 0 ? images.overviewIcon1 : images.overviewIcon2}
                    alt=""
                    className={index === 0 ? 'h-[18.5px] w-[18px]' : 'h-[17px] w-[22px]'}
                  />
                </div>
                <h3 className="mb-4 text-xl text-white">{card.title}</h3>
                <p className="text-base leading-6 text-accenture-body-muted">{card.body}</p>
              </article>
            ))}
          </div>
        </SiteContainer>
      </div>
    </section>
  );
}
