export interface ContactConfig {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  resumeFile?: string;
  profileImage?: string;
  showPhone?: boolean;
  canonicalUrl?: string;
  ogImage?: string;
}

export interface Profile {
  fullName: string;
  initials: string;
  role: string;
  location: string;
  positioning: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSupportingHeadline: string;
  heroDescription: string;
  status: string;
  credibility: string[];
  about: string[];
  workPrinciples: string[];
  facts: Array<{ label: string; value: string }>;
  contact: ContactConfig;
}

export interface ExperienceCapability {
  title: string;
  items: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  domain: string;
  summary: string;
  capabilities: ExperienceCapability[];
  confidentialityNote: string;
}

export type ProjectCategory =
  | "internship"
  | "independent"
  | "academic"
  | "research";

export interface Artefact {
  title: string;
  caption: string;
  type: string;
  image?: string;
  alt?: string;
  isAnonymised?: boolean;
}

export interface StakeholderGroup {
  name: string;
  needs: string[];
}

export interface AnalysisStep {
  title: string;
  description: string;
}

export interface TestingApproachStep {
  title: string;
  flow?: string[];
  description: string;
}

export interface AutomationBlock {
  title: string;
  description?: string;
  items?: string[];
  formulas?: string[];
  flow?: string[];
  evidence?: string;
}

export interface FocusCard {
  title: string;
  description: string;
}

export interface TestCoverageGroup {
  category: string;
  testCases: string;
  behaviours: string;
}

export interface RepresentativeTestCase {
  id: string;
  name: string;
  focus: string;
  validationLogic: string;
  demonstrates: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  domain: string;
  role: string;
  period: string;
  type: string;
  tags: string[];
  problem: string;
  overview?: string;
  scope?: string;
  cardArtefacts: string[];
  businessProblem?: string[];
  responsibilities: string[];
  users?: StakeholderGroup[];
  approach?: AnalysisStep[];
  artefacts?: Artefact[];
  solution?: string[];
  outcome?: string;
  challenges?: string[];
  lessons: string[];
  confidentiality?: string;
  disclosure?: string;
  category?: ProjectCategory;
  publicLabel?: string;
  confidentialityNotice?: string;
  isAnonymised?: boolean;
  featuredOrder?: number;
  testingObjective?: { description: string; focusCards: FocusCard[]; };
  testCoverage?: TestCoverageGroup[];
  selectedTestCases?: { subtitle: string; cases: RepresentativeTestCase[]; };
  testingApproach?: TestingApproachStep[];
  deepDive?: { flow: string[]; description: string[]; };
  automationStrategy?: { description: string; blocks: AutomationBlock[]; };
  baRelevance?: { description: string; links: FocusCard[]; };
  testingChallenges?: FocusCard[];
  analysisEvidenceLabel?: string;
  summaryMetrics?: { value: string; label: string; subtext?: string; }[];
  baPipeline?: string[];
  asisNote?: string;
  businessRules?: { id: string; name: string; description: string }[];
  orderLifecycle?: { states: string[]; transitions: string[]; note?: string };
  decompositionExample?: { 
    requirement: { id: string; text: string };
    useCase: { id: string };
    userStory: { id: string; text: string };
    businessRules: { id: string; name: string }[];
    acceptanceCriteria: { id: string; text: string }[];
  };
  toBeProcess?: string[];
  toBeProcessNote?: string;
  dataAnalysis?: { persisted: string[]; derived: string[]; note: string };
  traceabilityExample?: { flow: string[]; uatStats: { ready: number; blocked: number; technical: number }; note: string };
  targetVsCurrent?: { feature: string; target: string; current: string; gapId?: string }[];
  gaps?: { id: string; title: string; description: string; target?: string; current?: string; note?: string }[];
  baCompetencies?: { competency: string; evidence: string }[];
  analysisOutputs?: string;
  selectedEvidence?: {
    label: string;
    title?: string;
    description?: string;
    action: string;
    href?: string;
    fileType?: "pdf" | "xlsx" | "side" | "image" | "png" | "jpg" | "html";
    download?: boolean;
    external?: boolean;
  }[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  expectedGraduation?: string;
  gpa: string;
  coursework: string[];
}

export interface Award {
  title: string;
  period: string;
}
