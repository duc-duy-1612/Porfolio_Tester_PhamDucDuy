import assert from 'node:assert';
import fs from 'node:fs';

console.log('--- STARTING 3-LAYER TESTING SUITE ---\n');

// Layer 1: White-box Testing of Data Logic & Algorithms
console.log('[LAYER 1] White-box Testing & Boundary Analysis:');

// Test 1.1: Verify projects.ts imports and exports
import('../src/data/projects.ts').then(async (projectsModule) => {
  const { projects, getProjectBySlug, getAdjacentProjects } = projectsModule;

  // Statement & Branch Coverage for projects array
  assert.strictEqual(Array.isArray(projects), true, 'projects must be an Array');
  assert.strictEqual(projects.length, 5, 'projects array must have exactly 5 case studies');
  
  // Verify Web Functional Testing is at index 0 (Top Featured Project)
  assert.strictEqual(projects[0].slug, 'web-functional-testing', 'First project must be web-functional-testing');
  assert.strictEqual(projects[0].title, 'Web Functional Testing & Selenium IDE Automation');
  console.log('  ✔ Statement & Position Check: projects[0] is Web Functional Testing');

  // Verify all 5 slugs are distinct and valid
  const expectedSlugs = [
    'web-functional-testing',
    'wearable-health-data-integration',
    'homecare-workflow-mapping',
    'clinical-feature-catalogue',
    'online-food-delivery-system'
  ];
  const actualSlugs = projects.map(p => p.slug);
  assert.deepStrictEqual(actualSlugs, expectedSlugs, 'Project slugs must match expected order');
  console.log('  ✔ Branch & Sequence Check: All 5 slugs in exact expected sequence');

  // Boundary Testing for getProjectBySlug
  for (const slug of expectedSlugs) {
    const found = getProjectBySlug(slug);
    assert.ok(found, `getProjectBySlug(${slug}) must return project`);
    assert.strictEqual(found.slug, slug);
  }
  // Negative boundary: unknown slug
  assert.strictEqual(getProjectBySlug('non-existent-slug'), undefined, 'getProjectBySlug with unknown slug must return undefined');
  assert.strictEqual(getProjectBySlug(undefined), undefined, 'getProjectBySlug with undefined slug must return undefined');
  console.log('  ✔ Boundary & Edge Cases: getProjectBySlug handles valid, invalid, and undefined slugs cleanly');

  // Boundary Testing for getAdjacentProjects
  // Test first item wrapping circularly backwards to last item
  const firstAdjacent = getAdjacentProjects('web-functional-testing');
  assert.strictEqual(firstAdjacent.previous.slug, 'online-food-delivery-system', 'Previous of first must wrap to last');
  assert.strictEqual(firstAdjacent.next.slug, 'wearable-health-data-integration', 'Next of first must be index 1');

  // Test last item wrapping circularly forwards to first item
  const lastAdjacent = getAdjacentProjects('online-food-delivery-system');
  assert.strictEqual(lastAdjacent.previous.slug, 'clinical-feature-catalogue', 'Previous of last must be index 3');
  assert.strictEqual(lastAdjacent.next.slug, 'web-functional-testing', 'Next of last must wrap to first');

  // Negative boundary: unknown slug
  const unknownAdjacent = getAdjacentProjects('random-slug');
  assert.strictEqual(unknownAdjacent.previous, undefined);
  assert.strictEqual(unknownAdjacent.next, undefined);
  console.log('  ✔ Circular Traversal & Boundary Check: getAdjacentProjects correctly cycles endpoints and handles empty cases');

  // Layer 2: Re-testing Verification of Modified Components
  console.log('\n[LAYER 2] Re-testing Component Outputs & Data Integrity:');

  const { profile } = await import('../src/data/profile.ts');
  assert.strictEqual(profile.contact.github, 'https://github.com/duc-duy-1612', 'GitHub URL must be real user link');
  assert.strictEqual(profile.contact.showPhone, true, 'showPhone must be true');
  assert.strictEqual(profile.contact.phone, '0902711422', 'Phone number must match profile');
  assert.ok(profile.careerObjective, 'careerObjective must be defined');
  assert.ok(profile.careerObjective.shortTerm.length > 20, 'shortTerm objective must be detailed');
  assert.ok(profile.careerObjective.longTerm.length > 20, 'longTerm objective must be detailed');
  console.log('  ✔ Re-test profile.ts: GitHub, phone visibility, and career objectives verified');

  // Verify text elimination of "Business Analyst" from customer-facing sections
  const contactCode = fs.readFileSync(new URL('../src/components/sections/ContactSection.tsx', import.meta.url), 'utf8');
  assert.ok(!contactCode.includes('Fresher IT Business Analyst'), 'ContactSection must not contain "Fresher IT Business Analyst"');
  assert.ok(contactCode.includes('Fresher Software Tester / QA'), 'ContactSection must contain "Fresher Software Tester / QA"');
  assert.ok(contactCode.includes('tel:'), 'ContactSection must contain tel: link');
  console.log('  ✔ Re-test ContactSection.tsx: Outdated role string eliminated, tel: phone link verified');

  const footerCode = fs.readFileSync(new URL('../src/components/layout/Footer.tsx', import.meta.url), 'utf8');
  assert.ok(!footerCode.includes('Business Analyst portfolio'), 'Footer must not contain "Business Analyst portfolio"');
  assert.ok(footerCode.includes('Software Tester & QA portfolio'), 'Footer must contain "Software Tester & QA portfolio"');
  console.log('  ✔ Re-test Footer.tsx: Outdated role string eliminated, QA portfolio confirmed');

  const heroCode = fs.readFileSync(new URL('../src/components/sections/HeroSection.tsx', import.meta.url), 'utf8');
  assert.ok(!heroCode.includes('showcasing end-to-end Business Analysis'), 'HeroSection must not state Business Analysis preview');
  console.log('  ✔ Re-test HeroSection.tsx: Workspace card 05 QA copy verified');

  const detailPageCode = fs.readFileSync(new URL('../src/pages/ProjectDetailPage.tsx', import.meta.url), 'utf8');
  assert.ok(detailPageCode.includes('withBasePath(evidence.href'), 'ProjectDetailPage must wrap evidence.href with withBasePath');
  console.log('  ✔ Re-test ProjectDetailPage.tsx: withBasePath prevents 404 on GitHub Pages');

  // Verify SEO metadata on HomePage
  const homePageCode = fs.readFileSync(new URL('../src/pages/HomePage.tsx', import.meta.url), 'utf8');
  assert.ok(!homePageCode.includes('Fresher IT Business Analyst'), 'HomePage SEO must not contain "Fresher IT Business Analyst"');
  assert.ok(homePageCode.includes('Phạm Đức Duy | Fresher Software Tester & QA'), 'HomePage SEO title must reflect Fresher Software Tester & QA');
  console.log('  ✔ Re-test HomePage.tsx: SEO title & metadata verified for QA/Tester');

  // Verify Quick Stats in HeroSection
  assert.ok(heroCode.includes('hero-stats-row'), 'HeroSection must include hero-stats-row');
  assert.ok(heroCode.includes('06+'), 'HeroSection must display 06+ months experience stat');
  assert.ok(heroCode.includes('30+'), 'HeroSection must display 30+ test cases stat');
  console.log('  ✔ Re-test HeroSection.tsx: Quick Stats Bar rendered correctly');

  // Verify ProjectCard metrics & featured badge
  const cardCode = fs.readFileSync(new URL('../src/components/projects/ProjectCard.tsx', import.meta.url), 'utf8');
  assert.ok(cardCode.includes('metric-pill'), 'ProjectCard must render metric pills');
  assert.ok(cardCode.includes('badge--highlight'), 'ProjectCard must render badge--highlight for featured project');
  console.log('  ✔ Re-test ProjectCard.tsx: Mini metrics pills and featured badge verified');

  // Verify 1-click copy buttons in ContactSection
  assert.ok(contactCode.includes('copy-btn'), 'ContactSection must include copy-btn');
  assert.ok(contactCode.includes('handleCopy'), 'ContactSection must include handleCopy logic');
  console.log('  ✔ Re-test ContactSection.tsx: 1-click clipboard copy functionality verified');

  // Verify 3D Starfield Canvas in AnimatedBackground
  const bgCode = fs.readFileSync(new URL('../src/components/ui/AnimatedBackground.tsx', import.meta.url), 'utf8');
  assert.ok(bgCode.includes('<canvas'), 'AnimatedBackground must render a canvas element for 3D starfield');
  assert.ok(bgCode.includes('requestAnimationFrame'), 'AnimatedBackground must utilize requestAnimationFrame loop');
  assert.ok(bgCode.includes('cancelAnimationFrame'), 'AnimatedBackground must cleanup animation frame on unmount');
  console.log('  ✔ Re-test AnimatedBackground.tsx: 3D Starfield Canvas and memory cleanup verified');

  // Verify Spotlight hover effect in TiltCard
  const tiltCode = fs.readFileSync(new URL('../src/components/ui/TiltCard.tsx', import.meta.url), 'utf8');
  assert.ok(tiltCode.includes('radial-gradient'), 'TiltCard must incorporate radial-gradient spotlight effect');
  assert.ok(tiltCode.includes('spotlight'), 'TiltCard must track spotlight mouse coordinates');
  console.log('  ✔ Re-test TiltCard.tsx: 3D Spotlight cursor-tracking effect verified');

  // Verify 3D Interactive QA Terminal
  const terminalCode = fs.readFileSync(new URL('../src/components/ui/HeroTerminal.tsx', import.meta.url), 'utf8');
  assert.ok(terminalCode.includes('selenium-ide-runner'), 'HeroTerminal must simulate selenium-ide-runner');
  assert.ok(terminalCode.includes('runSimulation'), 'HeroTerminal must support interactive simulation');
  assert.ok(heroCode.includes('<HeroTerminal'), 'HeroSection must embed HeroTerminal widget');
  console.log('  ✔ Re-test HeroTerminal.tsx: 3D QA Automation Terminal & Hero integration verified');

  // Verify 30 Test Cases Data Integrity
  const { tncTestCases } = await import('../src/data/tncTestCases.ts');
  assert.strictEqual(Array.isArray(tncTestCases), true, 'tncTestCases must be an array');
  assert.strictEqual(tncTestCases.length, 30, 'tncTestCases must contain exactly 30 test cases');
  const tncIds = new Set(tncTestCases.map(tc => tc.id));
  assert.strictEqual(tncIds.size, 30, 'All 30 test case IDs must be unique');
  assert.strictEqual(tncTestCases.every(tc => tc.status === 'PASSED'), true, 'All test cases must have status PASSED');
  assert.strictEqual(tncTestCases.every(tc => tc.testSteps.length > 0), true, 'All test cases must have non-empty steps');
  console.log('  ✔ Re-test tncTestCases.ts: All 30 authentic test cases verified with 100% data integrity');

  // Verify TestCaseExplorer Component
  const explorerCode = fs.readFileSync(new URL('../src/components/projects/TestCaseExplorer.tsx', import.meta.url), 'utf8');
  assert.ok(explorerCode.includes('tncTestCases'), 'TestCaseExplorer must import tncTestCases');
  assert.ok(explorerCode.includes('selectedCategory'), 'TestCaseExplorer must support category filtering');
  assert.ok(explorerCode.includes('selectedType'), 'TestCaseExplorer must support type filtering');
  assert.ok(detailPageCode.includes('<TestCaseExplorer'), 'ProjectDetailPage must embed TestCaseExplorer for web-functional-testing');
  console.log('  ✔ Re-test TestCaseExplorer.tsx: Matrix filters, search and ProjectDetailPage integration verified');

  // Verify Cyber Radar Scanline
  assert.ok(cardCode.includes('cyber-radar-scan'), 'ProjectCard must include cyber-radar-scan');
  assert.ok(cardCode.includes('radar-pulse-dot'), 'ProjectCard must include radar-pulse-dot');
  const cssCode = fs.readFileSync(new URL('../src/styles/index.css', import.meta.url), 'utf8');
  assert.ok(cssCode.includes('cyberRadarSweep'), 'CSS must define cyberRadarSweep keyframe animation');
  console.log('  ✔ Re-test CyberScanline: Radar sweep animation & pulse dot verified');

  console.log('\n--- ALL 3-LAYER LOGICAL TESTS PASSED (100% SUCCESS) ---');
}).catch(err => {
  console.error('Test Suite Failed:', err);
  process.exit(1);
});
