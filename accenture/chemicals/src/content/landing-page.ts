export const navigationLinks = [
  { id: 'solution', label: 'Solution', href: '#solution' },
  { id: 'case-study', label: 'Case Study', href: '#case-studies' },
  { id: 'ai-tools', label: 'AI Tools', href: '#ai-tools' },
  { id: 'applications', label: 'Applications', href: '#applications' },
  { id: 'leaders', label: 'Leaders', href: '#leaders' },
] as const;

export const heroContent = {
  headlineLine1: 'Accenture and TrueChoice.AI:',
  headlineLine2:
    "Powering Chemicals Companies' Growth Through Real Time Preference Analytics and AI.",
  subheadline:
    'Accenture, powered by TrueChoice.AI, transforms real-time buyer intelligence into measurable revenue growth, margin expansion, and cost reduction. Designed for rapid deployment, the platform optimizes chemical supply chains, enhances customer experience, and reduces workforce costs— without long transformation cycles.',
  tags: [
    'Higher revenue and margin per customer',
    'Lower cost-to-serve',
    'Increased conversion rates and sales performance',
    'Higher customer retention',
  ],
  primaryCta: 'Schedule Demo',
  secondaryCta: 'Watch a video',
};

export const overviewContent = {
  label: 'OVERVIEW',
  heading: 'Our Joint Solution Proven in Chemicals',
  body: 'Slower demand recovery, margin pressure, and rising service costs are forcing chemical companies to make faster commercial decisions. Accenture brings global scale and deep industry expertise, and together with TrueChoice.AI’s real-time preference intelligence, turns customer and employee signals into decisions companies can act on immediately.',
  metrics: [
    { value: '50M+', label: 'GLOBAL USERS ANALYSED' },
    { value: 'Ai-Native', label: '460+ PATENTED ALGORITHMS' },
    { value: '300+', label: 'ENTERPRISE ENGAGEMENTS' },
    { value: 'Fortune 1000', label: 'GLOBAL CLIENT BASE' },
  ],
  cards: [
    {
      title: 'Industry-agnostic, chemicals-proven',
      body: 'Track record across chemicals, industrials, life sciences, financial services.',
    },
    {
      title: 'Insight to action — end-to-end',
      body: 'Preference analytics IP embedded directly into your CRM, pricing engine, SCM, HRIS, and eCommerce stack. Accenture deploys and operates at scale.',
    },
  ],
};

export const solutionsContent = {
  label: 'YOUR CHALLENGE. OUR SOLUTION',
  heading: 'One platform, many applications',
  body: "Each solution area integrates TrueChoice.AI’s real-time preference analytics with Accenture's deep chemicals industry expertise— delivering rapidly actionable insights and accelerated speed-to-value.",
  cards: [
    {
      title: 'Efficient Growth',
      body: "TrueChoice.AI quantifies what your customers actually value and where they're willing to pay more. Combined with Accenture's go-to-market and pricing expertise, this turns into fact-based offer, channel, and pricing decisions that unlock cost-efficient growth without margin erosion.",
      bullets: [
        'Quantify customer value-drivers and willingness-to-pay - by segment and product',
        'Realign offers, channels, and pricing to where growth is achievable',
        'Build the business case and 90-day execution roadmap with Accenture industry teams',
        'Embed real-time preference signal into CRM and pricing engines',
      ],
      stats: [
        { value: '10–15%', label: 'Higher revenue per customer' },
        { value: '8–15%', label: 'Margin expansion' },
        { value: '30%', label: 'Higher conversion rates', fullWidth: true },
      ],
    },
    {
      title: 'Commercial Excellence',
      body: 'We measure the trade-offs your buyers make across price, product, service, and supply — then operationalize that intelligence into your sales process, channel strategy, and pricing engine.',
      bullets: [
        'Segmentation and account prioritization built on preference data, not gut feel',
        'Solution-selling playbooks that match buyer value-drivers',
        'Channel and pricing optimization, with deal-level guidance',
        'Continuous benchmarking - preferences shift, so should pricing',
      ],
      stats: [
        { value: '12%-14%', label: 'Higher revenue per customer' },
        { value: '30%', label: 'Conversion-rate uplift' },
        { value: '25%', label: 'Better customer retention', fullWidth: true },
      ],
    },
    {
      title: 'Supply Chain &\nService-Level Optimization',
      body: 'We pinpoint what customers actually value across service, supply, lead times, and product quality — then realign your investments accordingly. Significant cost reduction with no drop in NPS or share-of-wallet.',
      bullets: [
        'Quantify buyer value-drivers and the cost levers tied to each',
        'Identify "quick-win" reductions in cost-to-serve, ranked by impact',
        'Re-tier service-level commitments by customer preference profile',
        'Build the business case for longer-term supply-chain investment',
      ],
      stats: [
        { value: '$100M+', label: 'Annual cost reduction' },
        { value: '8-15%', label: 'Margin expansion' },
        { value: '25%', label: 'Improved customer retention', fullWidth: true },
      ],
    },
    {
      title: 'AI-Powered Sales &\nCustomer Experience',
      body: "TrueChoice.AI plugs preference signal directly into CRM and CX tooling - Salesforce, Microsoft, SAP - so sellers can personalize pitches, prioritize pipeline, and tailor proposals to each buyer's value-drivers in real time. Accenture deploys, integrates, and operates the model at scale.",
      bullets: [
        '1:1 buyer preference profiles, refreshed continuously',
        'Real-time analytics inside CRM - no separate tool to learn',
        'AI-generated synthetic customers for testing new offers',
        'Personalized content, pricing, and messaging at scale',
      ],
      stats: [
        { value: '30%', label: 'Sales performance lift' },
        { value: '12%', label: 'Marketing efficiency' },
        { value: '1:1', label: 'Personalization at scale', fullWidth: true },
      ],
    },
    {
      title: 'HR Cost Optimization',
      body: 'We measure employee preferences across compensation, benefits, flexibility, career, and culture - then redesign reward, recognition, and workforce structures to deliver more value to the people you most want to retain, at lower total cost.',
      bullets: [
        'Quantify employee value-drivers - by role, geography, and tenure',
        'Optimize compensation and benefits mix at lower or equal cost',
        'Improve retention of the highest-value performers',
        'Apply same methodology to sales compensation and incentive design',
      ],
      stats: [
        { value: '10-20%', label: 'Reduction in total HR cost' },
        { value: '+15%', label: 'Retention of key talent' },
        { value: 'Higher', label: 'Engagement & satisfaction', fullWidth: true },
      ],
    },
    {
      title: 'Sales Compensation &\nPerformance',
      body: 'We measure what truly motivates each salesperson, then redesign comp plans and incentive structures to align seller behavior with your commercial objectives — embedded directly into your CRM and sales ops tooling.',
      bullets: [
        'Measure what motivates the salesperson',
        'Identify components that drive conversion, retention, and share-of-wallet',
        'Design comp plans and incentive structures aligned to desired behaviors and outcomes',
        'Embed preference-driven compensation analytics into CRM and sales operations tooling',
      ],
      stats: [
        { value: '15-20%', label: 'Sales performance uplift' },
        { value: '10-15%', label: 'Reduction in total comp cost' },
        { value: '20% increase', label: 'Sales productivity', fullWidth: true },
      ],
    },
  ],
};

export const caseStudiesContent = {
  label: 'SUCCESS STORIES',
  heading: 'Case Studies.',
  studies: [
    {
      id: 'hr',
      title: 'Smarter rewards, lower costs: A chemicals provider success story',
      summary:
        'How a leading US healthcare provider used real-time preference analytics to optimize rewards and benefits - reducing HR costs while improving employee experience and retention',
      challenge:
        'The client needed to reduce HR costs across multiple workforce segments while maintaining engagement, retention, and employee satisfaction.',
      metrics: [
        { value: '$3,500 – $6,700', label: 'REDUCTION IN HR COST' },
        { value: '16 – 18%', label: 'LOWER EMPLOYEE CHURN' },
        { value: '13 – 19%', label: 'HIGHER EMPLOYEE ENGAGEMENT' },
        { value: '12 – 18%', label: 'Higher employee SATISFACTION' },
        { value: '98%', label: 'COMPLETION rate (no incentive)' },
      ],
      approach: [
        'Captured real-time employee preferences across rewards, benefits, and experience',
        'Quantified the drivers of engagement, retention, and perceived employee value',
        'Redesigned rewards and benefits aligned to what employees value most',
        'Built workforce personas to improve communication and decision-making',
      ],
    },
    {
      id: 'customer',
      title: 'Cutting cost-to-serve without losing customers.',
      summary:
        "A leading specialty chemicals manufacturer was over-investing in service levels its B2B customers didn't value, while under-delivering on the factors that drove retention. Cost-to-serve was rising, customer satisfaction remained flat, and leadership needed a fact-based way to realign priorities.",
      challenge:
        "The client needed to stop over-investing in service levels its B2B customers didn't value and realign priorities based on actual needs, to reduce rising cost-to-serve while maintaining customer satisfaction.",
      metrics: [
        { value: '$78M+', label: 'Annual cost reduction' },
        { value: '+30%', label: 'conversion-rate uplift' },
        { value: '+25%', label: 'improved customer retention' },
        { value: '12-14%', label: 'Higher revenue per customer' },
        { value: '15%', label: 'Increased margin' },
      ],
      approach: [
        'Quantified buyer value-drivers and cost levers by segment and geography.',
        'Identified quick-win realignments of supply-chain and service-level commitments.',
        'Aggregated CRM and feedback data into 1:1 customer preference profiles.',
        'Built a longer-term roadmap for supply-chain and offer redesign.',
      ],
    },
  ],
};

export const aiToolsContent = {
  label: 'AI Tools',
  heading: 'TrueChoice.AI — Conversational Intelligence for Chemical Industry',
  body: 'TrueChoice.AI brings AI-driven reasoning directly to TrueChoice insights - enabling users to explore, understand, and act on complex decisions through natural, conversational interactions.',
  features: [
    {
      title: 'How It Learns',
      body: 'Integrates with the latest foundation models, optimized for data analytics, utilizing proprietary, structured TrueChoice preference data - Generating high-quality signals designed for decision intelligence and AI reasoning.',
    },
    {
      title: 'How It Reasons',
      body: 'Combines TrueChoice analytical outputs with AI-driven reasoning to deliver explainable, reliable guidance for real decisions - not just predictions.',
    },
    {
      title: 'How Users Engage',
      body: 'Users ask business questions in natural language and receive synthesized, decision-oriented responses - not just dashboards or static charts.',
    },
  ],
  whyHeading: 'Why Accenture + TrueChoice.AI',
  whyItems: [
    {
      label: 'FROM DASHBOARD TO DIALOGUE',
      body: 'Users ask plain-language questions — "Which intermediates should we reprice this quarter?" "Where am I over-serving accounts?" — and get ranked, explainable answers grounded in the WTP model and CRM data.',
    },
    {
      label: 'STICKY DATA MOAT THAT COMPOUNDS',
      body: 'Every dialogue, every interaction makes the engine smarter and the data harder to replicate. This is not a model trained on the public internet — it is trained on proprietary 1:1 buyer-value evidence.',
    },
    {
      label: 'SERVICE-PRICED, NOT SEAT-PRICED',
      body: 'TrueChoice.AI is sold as outcomes (margin, retention, $/employee), not licenses.',
    },
  ],
};

export const productShowcaseContent = {
  label: 'PRODUCT SHOWCASE',
  heading: 'TrueChoice AI',
  tabs: [
    {
      id: 'sales',
      label: 'Sales & Service Optimization',
      title: 'Sales & Service Optimization Use Case',
      intro: 'What TrueChoice AI does instantly:',
      bullets: [
        "Weighs specific decision drivers that shape a client's unique buyer values.",
        'Quantifies the price premium a client is willing to pay for specific personalized features and offerings.',
        'Identifies low value service elements, enabling cost reductions without compromising customer retention.',
      ],
    },
    {
      id: 'hr',
      label: 'HR Cost Optimization',
      title: 'HR Cost Optimization Use Case',
      intro: 'What TrueChoice AI does instantly:',
      bullets: [
        'Connects HR spend, engagement, retention, and performance data with preferences and perceived value insights',
        'Evaluates all relevant optimization scenarios',
        'Quantifies strategic and operational trade-offs and risks in plain language',
      ],
    },
  ],
};

export const leadersContent = {
  label: 'People',
  heading: 'Led by experienced operators and underwriters.',
  members: [
    {
      name: 'Donald Harrell',
      title: 'Global CEO (Insurance)',
      bio: 'Bringing global insurance leadership, strategic perspective, and market ambition to the domusIQ underwriting platform.',
    },
    {
      name: 'Donald Harrell',
      title: 'Global CEO (Insurance)',
      bio: 'Bringing global insurance leadership, strategic perspective, and market ambition to the domusIQ underwriting platform.',
      imageKey: 'team02' as const,
    },
    {
      name: 'Donald Harrell',
      title: 'Global CEO (Insurance)',
      bio: 'Bringing global insurance leadership, strategic perspective, and market ambition to the domusIQ underwriting platform.',
      imageKey: 'team03' as const,
    },
  ],
};

export const ctaContent = {
  heading: 'Ready to see it in action?',
  button: 'Contact us',
};

export const footerContent = {
  copyright:
    '© 2026 Accenture & TrueChoice.AI. All rights reserved. Chemical Industry Intelligence Division.',
};
