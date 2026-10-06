import re

with open('src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_object_start = """  {
    slug: "clinical-feature-catalogue",
    title: "Clinical Feature Catalogue & Test Basis Analysis",
    subtitle: "Consolidated fragmented healthcare requirements into a structured test basis, defining functional scope, traceability, and coverage foundations for downstream test design and UAT.",
    domain: "Healthcare / Electronic Medical Records",
    role: "BA & QA Intern — Requirement Analysis & Test Basis Definition",
    period: "2026",
    type: "Anonymised Internship Case Study",
    category: "internship",
    publicLabel: "Internship Deliverable",
    isAnonymised: true,
    confidentialityNotice: "Selected business and product details have been anonymised due to confidentiality.",
    disclosure: "AI-assisted tools were used to accelerate information discovery and extraction, while scope definition, requirement interpretation, and final validation remained manual responsibilities.",
    tags: [
      "Test Basis",
      "Requirement Analysis",
      "Test Coverage",
      "Traceability",
      "Scope Analysis",
      "Healthcare QA",
      "UAT"
    ],
    overview: "The objective was to consolidate the available requirements into a structured Test Basis covering four core healthcare modules.\\n\\nThe catalogue was designed to support: Requirement Clarification → Test Scenario Identification → Test Case Preparation → UAT.",
    problem: "Healthcare product requirements were distributed across 91 CAF epics, 54 PRD epics, and more than 200 related tickets.\\n\\nThe fragmented and overlapping information created testing risks: Unclear functional scope, duplicate or overlapping features, inconsistent terminology, missing requirement context, and difficulty identifying complete test coverage.\\n\\nWithout a consolidated reference, QA teams could have difficulty determining what needs to be tested, where a feature belongs, and whether important scenarios are covered.",
    summaryMetrics: [
      { value: "345", label: "Healthcare Features" },
      { value: "54", label: "Functional Groups" },
      { value: "145", label: "Epics Consolidated" },
      { value: "4", label: "Core EMR Modules" }
    ],
    scope: "The catalogue needed to define scope, organise features by user journey, standardise terminology, and create identifiers that could later support User Story and Test Case references.",
    cardArtefacts: [
      "Test Basis",
      "Functional Scope",
      "Traceability Structure",
      "Coverage Foundation"
    ],
    businessProblem: [
      "Fragmented Requirements: The same functional capability could appear across different epics, PRDs, or tickets, making it difficult to establish a reliable testing scope.",
      "Inconsistent Terminology: Similar functions were sometimes described using different names, increasing the risk of duplicated or inconsistent test scenarios.",
      "Unclear Functional Boundaries: Some capabilities could potentially belong to multiple modules. Clear inclusion and exclusion rules were therefore required to prevent scope overlap.",
      "Missing Traceability: Without a structured identifier and reference system, it was difficult to trace a feature from its original requirement source to downstream testing activities.",
      "QA Risk: These issues could result in Missed Scenarios → Incomplete Coverage → Requirement Gaps → Defects Escaping Validation."
    ],
    responsibilities: [
      "Reviewed 91 CAF epics, 54 PRD epics, and 200+ related tickets.",
      "Defined inclusion and exclusion boundaries for selected functional modules.",
      "Grouped features according to functional domains and user journeys.",
      "Standardised feature names and behaviour descriptions into a consistent format.",
      "Created hierarchical feature identifiers to support traceability.",
      "Reviewed AI-assisted findings and manually validated functional context, RBAC conditions, and domain-specific behaviour.",
      "Identified requirements and functional areas that could be used as a basis for downstream test scenario and UAT preparation."
    ],
    testingObjective: {
      description: "Feature descriptions were structured around observable system behaviour where possible, allowing QA teams to identify:",
      focusCards: [
        { title: "Test Scenarios", description: "Functional scenarios, positive/negative conditions, and edge cases." },
        { title: "Business Rules", description: "Role-based scenarios and business-rule validations." },
        { title: "Traceability", description: "A structured identifier convention (e.g., A1.1 → A1.2) to make features easier to reference." }
      ]
    },
    testingApproach: [
      {
        title: "Test Basis Pipeline",
        flow: ["Requirements", "Scope Definition", "Feature Extraction", "Test Basis"],
        description: "Transforming raw requirements into a structured Functional Test Basis."
      },
      {
        title: "Traceability Pipeline",
        flow: ["Epic", "Feature", "Test Scenario", "Test Case", "UAT"],
        description: "Maintaining a clear relationship between what the system is expected to do and how that behaviour will be validated."
      }
    ],
    outcome: "The final catalogue consolidated 345 distinct healthcare features. The resulting catalogue provided a structured basis for identifying functional scope, analysing potential coverage gaps, and preparing downstream test scenarios.",
    lessons: [
      "Test Coverage Starts with a Reliable Test Basis: Before designing hundreds of test cases, QA needs a clear understanding of what functionality is actually within scope.",
      "Scope Boundaries Prevent Testing Gaps: Separating related but different functional areas reduces the risk of duplicated scenarios and uncovered requirements.",
      "Requirements Must Be Testable: A useful requirement should provide enough clarity for QA to determine: Input → Expected Behaviour → Validation Condition.",
      "Traceability Supports Defect Analysis: When a defect can be connected back to a specific feature and requirement, it becomes easier to determine its expected behaviour and impact.",
      "AI Can Accelerate Analysis, but Validation Remains Human: Final decisions regarding functional scope, requirement meaning, and testability required manual review and validation."
    ],
    analysisEvidenceLabel: "Evidence",
    selectedEvidence: [
      {
        label: "FEATURE LIST",
        title: "Patient Records Feature Catalogue",
        description: "71 features covering patient demographics, care team assignment, clinical charting, and privacy-related functionality.",
        href: "/evidence%20TMA/Feature%20List/QU%E1%BA%A2N%20L%C3%9D%20H%E1%BB%92%20S%C6%A0%20B%E1%BB%86NH%20NH%C3%82N.pdf",
        action: "View Feature List",
        fileType: "pdf",
        external: true
      },
      {
        label: "FEATURE LIST",
        title: "Medications & Labs Feature Catalogue",
        description: "91 features covering e-prescribing, medication reconciliation, inpatient eMAR, and clinical result processing.",
        href: "/evidence%20TMA/Feature%20List/K%C3%8A%20%C4%90%C6%A0N%20%26%20X%E1%BB%AC%20L%C3%9D%20K%E1%BA%BET%20QU%E1%BA%A2%20L%C3%82M%20S%C3%80NG.pdf",
        action: "View Feature List",
        fileType: "pdf",
        external: true
      },
      {
        label: "FEATURE LIST",
        title: "Telemedicine Feature Catalogue",
        description: "79 features covering provider schedules, appointment modes, and virtual care workflows.",
        href: "/evidence%20TMA/Feature%20List/TELEMEDICINE.pdf",
        action: "View Feature List",
        fileType: "pdf",
        external: true
      },
      {
        label: "FEATURE LIST",
        title: "Administration & Audit Feature Catalogue",
        description: "104 features covering RBAC, audit logging, and governance-related workflows.",
        href: "/evidence%20TMA/Feature%20List/QU%E1%BA%A2N%20TR%E1%BB%8A%20%26%20KI%E1%BB%82M%20TO%C3%81N.pdf",
        action: "View Feature List",
        fileType: "pdf",
        external: true
      }
    ]
  }
];"""

start_str = 'slug: "clinical-feature-catalogue"'
start_idx = content.find(start_str)
start_idx = content.rfind('  {', 0, start_idx)

# Replace everything from start_idx to the end with new_object_start
new_content = content[:start_idx] + new_object_start

with open('src/data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Updated Clinical Feature Catalogue successfully")
