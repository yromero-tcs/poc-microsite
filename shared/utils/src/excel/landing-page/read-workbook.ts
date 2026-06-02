import ExcelJS from 'exceljs';
import type { LandingPageContent } from '../../schema/landing-page.js';
import { cellText, col, getSheet, parseBoolean, parseIndex, readRows } from '../sheet-utils.js';

function readFieldValueSheet(sheet: ExcelJS.Worksheet): Record<string, string> {
  const headers = readRows(sheet);
  const fields: Record<string, string> = {};
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const field = cellText(row.getCell(col(headers, 'field', sheet.name)).value);
    if (!field) return;
    fields[field] = cellText(row.getCell(col(headers, 'value', sheet.name)).value);
  });
  return fields;
}

export async function readLandingPageWorkbook(filePath: string): Promise<LandingPageContent> {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);

  const navSheet = getSheet(workbook, 'Navigation');
  const navHeaders = readRows(navSheet);
  const navRows: { index: number; link: LandingPageContent['navigationLinks'][number] }[] = [];
  navSheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const id = cellText(row.getCell(col(navHeaders, 'id', 'Navigation')).value);
    if (!id) return;
    navRows.push({
      index: parseIndex(row.getCell(col(navHeaders, 'index', 'Navigation')).value, 'Navigation', rowNumber),
      link: {
        id,
        label: cellText(row.getCell(col(navHeaders, 'label', 'Navigation')).value),
        href: cellText(row.getCell(col(navHeaders, 'href', 'Navigation')).value),
      },
    });
  });
  navRows.sort((a, b) => a.index - b.index);

  const heroFields = readFieldValueSheet(getSheet(workbook, 'HeroScalars'));
  const heroTagsSheet = getSheet(workbook, 'HeroTags');
  const heroTagHeaders = readRows(heroTagsSheet);
  const tags: string[] = [];
  heroTagsSheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const tag = cellText(row.getCell(col(heroTagHeaders, 'tag', 'HeroTags')).value);
    if (tag) tags.push(tag);
  });

  const overviewHeader = readFieldValueSheet(getSheet(workbook, 'OverviewHeader'));
  const overviewMetricsSheet = getSheet(workbook, 'OverviewMetrics');
  const omHeaders = readRows(overviewMetricsSheet);
  const overviewMetrics: { value: string; label: string }[] = [];
  overviewMetricsSheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const label = cellText(row.getCell(col(omHeaders, 'label', 'OverviewMetrics')).value);
    if (!label) return;
    overviewMetrics.push({
      value: cellText(row.getCell(col(omHeaders, 'value', 'OverviewMetrics')).value),
      label,
    });
  });

  const overviewCardsSheet = getSheet(workbook, 'OverviewCards');
  const ocHeaders = readRows(overviewCardsSheet);
  const overviewCards: LandingPageContent['overviewContent']['cards'] = [];
  overviewCardsSheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const title = cellText(row.getCell(col(ocHeaders, 'title', 'OverviewCards')).value);
    if (!title) return;
    overviewCards.push({
      title,
      body: cellText(row.getCell(col(ocHeaders, 'body', 'OverviewCards')).value),
    });
  });

  const solutionsHeader = readFieldValueSheet(getSheet(workbook, 'SolutionsHeader'));
  const solutionCardsSheet = getSheet(workbook, 'SolutionCards');
  const scHeaders = readRows(solutionCardsSheet);
  const cardRows: { cardIndex: number; title: string; body: string }[] = [];
  solutionCardsSheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const title = cellText(row.getCell(col(scHeaders, 'title', 'SolutionCards')).value);
    if (!title) return;
    cardRows.push({
      cardIndex: parseIndex(
        row.getCell(col(scHeaders, 'index', 'SolutionCards')).value,
        'SolutionCards',
        rowNumber,
      ),
      title,
      body: cellText(row.getCell(col(scHeaders, 'body', 'SolutionCards')).value),
    });
  });
  cardRows.sort((a, b) => a.cardIndex - b.cardIndex);

  const bulletsSheet = getSheet(workbook, 'SolutionBullets');
  const bHeaders = readRows(bulletsSheet);
  const statsSheet = getSheet(workbook, 'SolutionStats');
  const stHeaders = readRows(statsSheet);

  const solutionCards = cardRows.map(({ cardIndex, title, body }) => {
    const bullets: string[] = [];
    bulletsSheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return;
      const ci = parseIndex(
        row.getCell(col(bHeaders, 'cardindex', 'SolutionBullets')).value,
        'SolutionBullets',
        rowNumber,
      );
      if (ci !== cardIndex) return;
      const text = cellText(row.getCell(col(bHeaders, 'text', 'SolutionBullets')).value);
      if (text) bullets.push(text);
    });

    const stats: LandingPageContent['solutionsContent']['cards'][number]['stats'] = [];
    statsSheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return;
      const ci = parseIndex(
        row.getCell(col(stHeaders, 'cardindex', 'SolutionStats')).value,
        'SolutionStats',
        rowNumber,
      );
      if (ci !== cardIndex) return;
      const fullWidthCol = stHeaders.get('fullwidth');
      const fullWidthRaw = fullWidthCol
        ? cellText(row.getCell(fullWidthCol).value)
        : '';
      stats.push({
        value: cellText(row.getCell(col(stHeaders, 'value', 'SolutionStats')).value),
        label: cellText(row.getCell(col(stHeaders, 'label', 'SolutionStats')).value),
        ...(fullWidthRaw
          ? { fullWidth: parseBoolean(row.getCell(col(stHeaders, 'fullwidth', 'SolutionStats')).value) }
          : {}),
      });
    });

    return { title, body, bullets, stats };
  });

  const caseHeader = readFieldValueSheet(getSheet(workbook, 'CaseStudiesHeader'));
  const caseSheet = getSheet(workbook, 'CaseStudies');
  const caseHeaders = readRows(caseSheet);
  const studyRows: {
    studyIndex: number;
    id: string;
    title: string;
    summary: string;
    challenge: string;
  }[] = [];
  caseSheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const id = cellText(row.getCell(col(caseHeaders, 'id', 'CaseStudies')).value);
    if (!id) return;
    studyRows.push({
      studyIndex: parseIndex(
        row.getCell(col(caseHeaders, 'index', 'CaseStudies')).value,
        'CaseStudies',
        rowNumber,
      ),
      id,
      title: cellText(row.getCell(col(caseHeaders, 'title', 'CaseStudies')).value),
      summary: cellText(row.getCell(col(caseHeaders, 'summary', 'CaseStudies')).value),
      challenge: cellText(row.getCell(col(caseHeaders, 'challenge', 'CaseStudies')).value),
    });
  });
  studyRows.sort((a, b) => a.studyIndex - b.studyIndex);

  const metricsSheet = getSheet(workbook, 'CaseStudyMetrics');
  const mHeaders = readRows(metricsSheet);
  const approachSheet = getSheet(workbook, 'CaseStudyApproach');
  const aHeaders = readRows(approachSheet);

  const caseStudies = studyRows.map(({ studyIndex, id, title, summary, challenge }) => {
    const metrics: { value: string; label: string }[] = [];
    metricsSheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return;
      const si = parseIndex(
        row.getCell(col(mHeaders, 'studyindex', 'CaseStudyMetrics')).value,
        'CaseStudyMetrics',
        rowNumber,
      );
      if (si !== studyIndex) return;
      metrics.push({
        value: cellText(row.getCell(col(mHeaders, 'value', 'CaseStudyMetrics')).value),
        label: cellText(row.getCell(col(mHeaders, 'label', 'CaseStudyMetrics')).value),
      });
    });

    const approach: string[] = [];
    approachSheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return;
      const si = parseIndex(
        row.getCell(col(aHeaders, 'studyindex', 'CaseStudyApproach')).value,
        'CaseStudyApproach',
        rowNumber,
      );
      if (si !== studyIndex) return;
      const text = cellText(row.getCell(col(aHeaders, 'text', 'CaseStudyApproach')).value);
      if (text) approach.push(text);
    });

    return { id, title, summary, challenge, metrics, approach };
  });

  const aiHeader = readFieldValueSheet(getSheet(workbook, 'AiToolsHeader'));
  const featuresSheet = getSheet(workbook, 'AiFeatures');
  const fHeaders = readRows(featuresSheet);
  const features: LandingPageContent['aiToolsContent']['features'] = [];
  featuresSheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const title = cellText(row.getCell(col(fHeaders, 'title', 'AiFeatures')).value);
    if (!title) return;
    features.push({
      title,
      body: cellText(row.getCell(col(fHeaders, 'body', 'AiFeatures')).value),
    });
  });

  const whySheet = getSheet(workbook, 'AiWhyItems');
  const wHeaders = readRows(whySheet);
  const whyItems: LandingPageContent['aiToolsContent']['whyItems'] = [];
  whySheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const label = cellText(row.getCell(col(wHeaders, 'label', 'AiWhyItems')).value);
    if (!label) return;
    whyItems.push({
      label,
      body: cellText(row.getCell(col(wHeaders, 'body', 'AiWhyItems')).value),
    });
  });

  const productHeader = readFieldValueSheet(getSheet(workbook, 'ProductShowcaseHeader'));
  const tabsSheet = getSheet(workbook, 'ProductTabs');
  const tHeaders = readRows(tabsSheet);
  const tabRows: { tabIndex: number; id: string; label: string; title: string; intro: string }[] = [];
  tabsSheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const id = cellText(row.getCell(col(tHeaders, 'id', 'ProductTabs')).value);
    if (!id) return;
    tabRows.push({
      tabIndex: parseIndex(row.getCell(col(tHeaders, 'index', 'ProductTabs')).value, 'ProductTabs', rowNumber),
      id,
      label: cellText(row.getCell(col(tHeaders, 'label', 'ProductTabs')).value),
      title: cellText(row.getCell(col(tHeaders, 'title', 'ProductTabs')).value),
      intro: cellText(row.getCell(col(tHeaders, 'intro', 'ProductTabs')).value),
    });
  });
  tabRows.sort((a, b) => a.tabIndex - b.tabIndex);

  const pbSheet = getSheet(workbook, 'ProductBullets');
  const pbHeaders = readRows(pbSheet);
  const productTabs = tabRows.map(({ tabIndex, id, label, title, intro }) => {
    const bullets: string[] = [];
    pbSheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return;
      const ti = parseIndex(
        row.getCell(col(pbHeaders, 'tabindex', 'ProductBullets')).value,
        'ProductBullets',
        rowNumber,
      );
      if (ti !== tabIndex) return;
      const text = cellText(row.getCell(col(pbHeaders, 'text', 'ProductBullets')).value);
      if (text) bullets.push(text);
    });
    return { id, label, title, intro, bullets };
  });

  const leadersHeader = readFieldValueSheet(getSheet(workbook, 'LeadersHeader'));
  const membersSheet = getSheet(workbook, 'LeaderMembers');
  const lmHeaders = readRows(membersSheet);
  const members: LandingPageContent['leadersContent']['members'] = [];
  membersSheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const name = cellText(row.getCell(col(lmHeaders, 'name', 'LeaderMembers')).value);
    if (!name) return;
    const imageKey = cellText(row.getCell(col(lmHeaders, 'imagekey', 'LeaderMembers')).value);
    members.push({
      name,
      title: cellText(row.getCell(col(lmHeaders, 'title', 'LeaderMembers')).value),
      bio: cellText(row.getCell(col(lmHeaders, 'bio', 'LeaderMembers')).value),
      ...(imageKey ? { imageKey } : {}),
    });
  });

  const ctaFields = readFieldValueSheet(getSheet(workbook, 'CTA'));
  const footerFields = readFieldValueSheet(getSheet(workbook, 'Footer'));

  return {
    navigationLinks: navRows.map((r) => r.link),
    heroContent: {
      headlineLine1: heroFields.headlineLine1 ?? '',
      headlineLine2: heroFields.headlineLine2 ?? '',
      subheadline: heroFields.subheadline ?? '',
      tags,
      primaryCta: heroFields.primaryCta ?? '',
      secondaryCta: heroFields.secondaryCta ?? '',
    },
    overviewContent: {
      label: overviewHeader.label ?? '',
      heading: overviewHeader.heading ?? '',
      body: overviewHeader.body ?? '',
      metrics: overviewMetrics,
      cards: overviewCards,
    },
    solutionsContent: {
      label: solutionsHeader.label ?? '',
      heading: solutionsHeader.heading ?? '',
      body: solutionsHeader.body ?? '',
      cards: solutionCards,
    },
    caseStudiesContent: {
      label: caseHeader.label ?? '',
      heading: caseHeader.heading ?? '',
      studies: caseStudies,
    },
    aiToolsContent: {
      label: aiHeader.label ?? '',
      heading: aiHeader.heading ?? '',
      body: aiHeader.body ?? '',
      features,
      whyHeading: aiHeader.whyHeading ?? '',
      whyItems,
    },
    productShowcaseContent: {
      label: productHeader.label ?? '',
      heading: productHeader.heading ?? '',
      tabs: productTabs,
    },
    leadersContent: {
      label: leadersHeader.label ?? '',
      heading: leadersHeader.heading ?? '',
      members,
    },
    ctaContent: {
      heading: ctaFields.heading ?? '',
      button: ctaFields.button ?? '',
    },
    footerContent: {
      copyright: footerFields.copyright ?? '',
    },
  };
}
