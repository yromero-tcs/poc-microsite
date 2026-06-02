import Image from 'next/image';
import { SectionHeading, SectionLabel, SiteContainer } from '@poc-microsite/components';
import { images } from '@/config/images';
import { aiToolsContent } from '@/content/landing-page';

export function AiToolsSection() {
  return (
    <section id="ai-tools" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <Image src={images.aiToolsBg} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-6 lg:px-[160px]">
        <SiteContainer className="space-y-10 md:space-y-16">
          <div className="max-w-[950px] space-y-4">
            <SectionLabel variant="on-dark">{aiToolsContent.label}</SectionLabel>
            <SectionHeading size="xl" className="text-[#f3f0f1]">
              {aiToolsContent.heading}
            </SectionHeading>
            <p className="text-lg leading-6 text-accenture-stage-light md:text-xl">{aiToolsContent.body}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiToolsContent.features.map((feature) => (
              <article
                key={feature.title}
                className="border border-accenture-stage-tint bg-accenture-stage-tint p-6 shadow-sm md:p-8"
              >
                <h3 className="mb-4 text-xl text-white">{feature.title}</h3>
                <p className="text-base leading-6 text-accenture-body-muted">{feature.body}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-col gap-10 md:gap-16 lg:flex-row lg:flex-wrap lg:items-start lg:justify-between">
            <div className="max-w-full space-y-6 lg:max-w-[528px]">
              <SectionHeading size="lg" className="text-white">
                {aiToolsContent.whyHeading}
              </SectionHeading>
              <ul className="space-y-6">
                {aiToolsContent.whyItems.map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <span className="relative size-7 shrink-0">
                      <img src={images.checkIcon} alt="" className="size-full object-contain" />
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.14px] text-accenture-light-purple">
                        {item.label}
                      </p>
                      <p className="mt-2 text-base leading-6 text-accenture-body-muted">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg sm:h-[400px] lg:h-[540px] lg:max-w-[528px]">
              <Image src={images.whyPartnership} alt="Technology leader" fill className="object-cover" />
            </div>
          </div>
        </SiteContainer>
      </div>
    </section>
  );
}
