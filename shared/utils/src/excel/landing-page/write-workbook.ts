import ExcelJS from 'exceljs';
import type { LandingPageContent } from '../../schema/landing-page.js';
import { addReadmeSheet, setHeaderRow } from '../sheet-utils.js';

function addFieldValueSheet(
  workbook: ExcelJS.Workbook,
  name: string,
  fields: Record<string, string>,
): void {
  const sheet = workbook.addWorksheet(name);
  setHeaderRow(sheet, ['field', 'value']);
  for (const [field, value] of Object.entries(fields)) {
    sheet.addRow([field, value]);
  }
}

export async function writeLandingPageWorkbook(
  filePath: string,
  content: LandingPageContent,
): Promise<void> {
  const workbook = new ExcelJS.Workbook();

  addReadmeSheet(workbook, [
    'Landing page content workbook',
    'Edit cells, then run: npm run content:import -- --client <client-id>',
    'Multiline text: use Alt+Enter in Excel cells',
    'Solution stats fullWidth: TRUE or FALSE',
  ]);

  const nav = workbook.addWorksheet('Navigation');
  setHeaderRow(nav, ['index', 'id', 'label', 'href']);
  content.navigationLinks.forEach((link, index) => {
    nav.addRow([index, link.id, link.label, link.href]);
  });

  addFieldValueSheet(workbook, 'HeroScalars', {
    headlineLine1: content.heroContent.headlineLine1,
    headlineLine2: content.heroContent.headlineLine2,
    subheadline: content.heroContent.subheadline,
    primaryCta: content.heroContent.primaryCta,
    secondaryCta: content.heroContent.secondaryCta,
  });

  const heroTags = workbook.addWorksheet('HeroTags');
  setHeaderRow(heroTags, ['index', 'tag']);
  content.heroContent.tags.forEach((tag, index) => heroTags.addRow([index, tag]));

  addFieldValueSheet(workbook, 'OverviewHeader', {
    label: content.overviewContent.label,
    heading: content.overviewContent.heading,
    body: content.overviewContent.body,
  });

  const om = workbook.addWorksheet('OverviewMetrics');
  setHeaderRow(om, ['index', 'value', 'label']);
  content.overviewContent.metrics.forEach((m, index) => om.addRow([index, m.value, m.label]));

  const oc = workbook.addWorksheet('OverviewCards');
  setHeaderRow(oc, ['index', 'title', 'body']);
  content.overviewContent.cards.forEach((c, index) => oc.addRow([index, c.title, c.body]));

  addFieldValueSheet(workbook, 'SolutionsHeader', {
    label: content.solutionsContent.label,
    heading: content.solutionsContent.heading,
    body: content.solutionsContent.body,
  });

  const sc = workbook.addWorksheet('SolutionCards');
  setHeaderRow(sc, ['index', 'title', 'body']);
  content.solutionsContent.cards.forEach((card, index) => sc.addRow([index, card.title, card.body]));

  const sb = workbook.addWorksheet('SolutionBullets');
  setHeaderRow(sb, ['cardIndex', 'index', 'text']);
  content.solutionsContent.cards.forEach((card, cardIndex) => {
    card.bullets.forEach((text, index) => sb.addRow([cardIndex, index, text]));
  });

  const ss = workbook.addWorksheet('SolutionStats');
  setHeaderRow(ss, ['cardIndex', 'index', 'value', 'label', 'fullWidth']);
  content.solutionsContent.cards.forEach((card, cardIndex) => {
    card.stats.forEach((stat, index) => {
      ss.addRow([
        cardIndex,
        index,
        stat.value,
        stat.label,
        stat.fullWidth === true ? 'TRUE' : stat.fullWidth === false ? 'FALSE' : '',
      ]);
    });
  });

  addFieldValueSheet(workbook, 'CaseStudiesHeader', {
    label: content.caseStudiesContent.label,
    heading: content.caseStudiesContent.heading,
  });

  const cs = workbook.addWorksheet('CaseStudies');
  setHeaderRow(cs, ['index', 'id', 'title', 'summary', 'challenge']);
  content.caseStudiesContent.studies.forEach((study, index) => {
    cs.addRow([index, study.id, study.title, study.summary, study.challenge]);
  });

  const csm = workbook.addWorksheet('CaseStudyMetrics');
  setHeaderRow(csm, ['studyIndex', 'index', 'value', 'label']);
  content.caseStudiesContent.studies.forEach((study, studyIndex) => {
    study.metrics.forEach((m, index) => csm.addRow([studyIndex, index, m.value, m.label]));
  });

  const csa = workbook.addWorksheet('CaseStudyApproach');
  setHeaderRow(csa, ['studyIndex', 'index', 'text']);
  content.caseStudiesContent.studies.forEach((study, studyIndex) => {
    study.approach.forEach((text, index) => csa.addRow([studyIndex, index, text]));
  });

  addFieldValueSheet(workbook, 'AiToolsHeader', {
    label: content.aiToolsContent.label,
    heading: content.aiToolsContent.heading,
    body: content.aiToolsContent.body,
    whyHeading: content.aiToolsContent.whyHeading,
  });

  const af = workbook.addWorksheet('AiFeatures');
  setHeaderRow(af, ['index', 'title', 'body']);
  content.aiToolsContent.features.forEach((f, index) => af.addRow([index, f.title, f.body]));

  const aw = workbook.addWorksheet('AiWhyItems');
  setHeaderRow(aw, ['index', 'label', 'body']);
  content.aiToolsContent.whyItems.forEach((item, index) => aw.addRow([index, item.label, item.body]));

  addFieldValueSheet(workbook, 'ProductShowcaseHeader', {
    label: content.productShowcaseContent.label,
    heading: content.productShowcaseContent.heading,
  });

  const pt = workbook.addWorksheet('ProductTabs');
  setHeaderRow(pt, ['index', 'id', 'label', 'title', 'intro']);
  content.productShowcaseContent.tabs.forEach((tab, index) => {
    pt.addRow([index, tab.id, tab.label, tab.title, tab.intro]);
  });

  const pb = workbook.addWorksheet('ProductBullets');
  setHeaderRow(pb, ['tabIndex', 'index', 'text']);
  content.productShowcaseContent.tabs.forEach((tab, tabIndex) => {
    tab.bullets.forEach((text, index) => pb.addRow([tabIndex, index, text]));
  });

  addFieldValueSheet(workbook, 'LeadersHeader', {
    label: content.leadersContent.label,
    heading: content.leadersContent.heading,
  });

  const lm = workbook.addWorksheet('LeaderMembers');
  setHeaderRow(lm, ['index', 'name', 'title', 'bio', 'imageKey']);
  content.leadersContent.members.forEach((m, index) => {
    lm.addRow([index, m.name, m.title, m.bio, m.imageKey ?? '']);
  });

  addFieldValueSheet(workbook, 'CTA', {
    heading: content.ctaContent.heading,
    button: content.ctaContent.button,
  });

  addFieldValueSheet(workbook, 'Footer', {
    copyright: content.footerContent.copyright,
  });

  await workbook.xlsx.writeFile(filePath);
}
