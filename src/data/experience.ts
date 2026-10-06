import type { Experience } from "../types/portfolio";

export const experience: Experience = {
  company: "TMA Solutions",
  position: "BA & QA Intern",
  period: "March 2026 – August 2026",
  domain: "Healthcare Products",
  summary:
    "Supported manual functional testing, requirement analysis, and UAT preparation for healthcare product initiatives by validating implemented features against documented requirements.",
  capabilities: [
    {
      title: "QA Responsibilities",
      items: [
        "Supported manual functional testing and UAT, validating implemented features against documented requirements and expected system behaviour.",
        "Designed and executed test scenarios based on business requirements and functional specifications.",
        "Logged and tracked defects on Jira, documenting actual behaviour, expected behaviour, reproduction information, and relevant evidence when required.",
        "Collaborated with Developers and Business Analysts to clarify issues, reproduce client-reported bugs, retest fixes, and verify results.",
        "Compared actual implementation with requirements to identify functional discrepancies, requirement gaps, and edge cases.",
      ],
    },
    {
      title: "Requirement & Test Analysis",
      items: [
        "Analysed and clarified requirements, User Stories, Acceptance Criteria, and Business Rules to establish testable expected behaviour.",
        "Reviewed business and system flows to identify dependencies, exception paths, constraints, and potential test scenarios.",
        "Supported requirement discussions across Product, BA, Development, UI/UX, and QA teams to improve functional clarity before and during testing.",
        "Reviewed delivered features against documented requirements and supported UAT preparation and validation.",
      ],
    },
    {
      title: "Selected QA Contribution",
      items: [
        "Applied requirement-based testing to healthcare product features where business rules, workflow states, integrations, permissions, and exception handling affected expected system behaviour.",
        "Used business and system analysis knowledge to improve test coverage and identify discrepancies beyond basic happy-path testing.",
      ]
    }
  ],
  confidentialityNote:
    "Selected healthcare work has been anonymised to protect confidential product and client information.",
};
