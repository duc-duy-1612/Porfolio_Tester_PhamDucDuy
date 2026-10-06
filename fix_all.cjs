const fs = require('fs');

let content = fs.readFileSync('src/data/projects.ts', 'utf8');

const wearable = `  {
    slug: "wearable-health-data-integration",
    title: "Healthcare Wearable Data Integration",
    subtitle: "Analysed multi-vendor health-data synchronization flows and translated complex permission dependencies and integration rules into testable conditions.",
    domain: "Healthcare / Data Integration",
    role: "BA & QA Intern — Requirement Analysis & Test Design",
    period: "2026",
    type: "Anonymised Internship Case Study",
    category: "internship",
    publicLabel: "Internship Deliverable",
    isAnonymised: true,
    confidentialityNotice: "Selected business and product details have been anonymised due to confidentiality.",
    tags: [
      "Integration Testing",
      "API Flow",
      "Requirement Analysis",
      "State Validation",
      "Exception Handling",
      "Health Data"
    ],
    problem: "The application needed to ingest health data from 10 different wearable brands (including Garmin, Xiaomi, Samsung, Fitbit, Oura) via Health Connect. The legacy application utilized a hard-coded UI that only guided Samsung and Apple users, generating high volumes of support tickets.\\n\\nQA Challenge: Testing wearable integration is difficult because data availability, required OS permissions, cloud sync delays, and required companion apps vary wildly between vendors.",
    summaryMetrics: [
      { value: "10", label: "Wearable Ecosystems" },
      { value: "6", label: "Health Data Types" },
      { value: "15-30m", label: "Sync Delay Evaluated" }
    ],
    scope: "This public case study has been anonymised. It represents a real-world integration research and UX/UI redesign project for synchronising 10 different wearable ecosystems into a central healthcare application via Android Health Connect.",
    cardArtefacts: [
      "Integration Rules",
      "Compatibility Matrix",
      "Testable Scenarios"
    ],
    businessProblem: [
      "Wearable brands use vastly different architectures (Cloud-mediated vs. Native) and require different background OS permissions to sync.",
      "Data availability varies heavily by vendor (e.g., WHOOP and Oura focus on Sleep/HRV, while Huawei requires a third-party bridge app like Health Sync).",
      "Users frequently dropped off because they didn't know how to grant background battery permissions or force cloud synchronization."
    ],
    responsibilities: [
      "Researched and mapped the end-to-end data synchronization flows for 10 major wearable ecosystems.",
      "Created a comprehensive Vendor Compatibility Matrix analyzing supported data types (Steps, HR, SpO2, Sleep, ECG, HRV).",
      "Identified system pain points, background permission dependencies, and cloud sync delays (averaging 15-30 minutes) for each vendor.",
      "Translated research findings into testable connection states, explicit permission requirements, and failure conditions."
    ],
    testingObjective: {
      description: "A Dynamic Selection Flow was selected to provide vendor-specific guidance and validation steps. This dynamic flow provides explicit vendor-specific conditions that can be converted into structured test scenarios. It reduces ambiguity when validating different integration paths.",
      focusCards: [
        { title: "Connection Rules", description: "Read/Write permissions + OS battery settings." },
        { title: "Data Scenarios", description: "Different vendors support different metrics." },
        { title: "Sync Timing", description: "Validating asynchronous background delays." }
      ]
    },
    testingApproach: [
      {
        title: "Positive Path Integration Validation",
        flow: ["Select Vendor", "Install App", "Grant Permissions", "Sync Data"],
        description: "Validating the complete chain: Vendor \\u2192 Cloud \\u2192 Health Connect \\u2192 mCare \\u2192 Success."
      },
      {
        title: "Negative & Exception Scenarios",
        flow: ["Permission Missing", "Sync Delayed", "Bridge App Missing"],
        description: "Validating failure guidance: Requesting required permissions, handling 15-30 min sync delays, or guiding users to disable battery optimization."
      }
    ],
    outcome: "Delivered a structured Vendor Compatibility Matrix documenting connection methods, required applications, permission requirements, supported metrics, synchronization characteristics, and expected user guidance. This provided a structured test basis for vendor-specific test scenarios, regression testing, and identifying unsupported conditions.",
    lessons: [
      "Integration Testing Must Consider the Full Data Chain: Testing the UI alone is not sufficient. A failure at any point (Vendor \\u2192 Cloud \\u2192 Health Connect \\u2192 mCare) affects the final result.",
      "'Connected' Is Not Enough: A connection status should be based on observable validation conditions rather than only a UI action or permission state.",
      "Permissions Are Part of the Test Environment: OS-level permissions, Health Connect permissions, and battery settings directly affect test results.",
      "Asynchronous Data Requires Different Expectations: Delayed synchronization should not automatically be treated as a defect. Test scenarios need clear timing assumptions.",
      "Vendor Differences Require Parameterised Testing: Different flows should be validated using consistent test criteria while allowing vendor-specific prerequisites."
    ],
    selectedEvidence: [
      {
        label: "RESEARCH & SYSTEM DESIGN",
        title: "Wearable Ecosystem Integration Research",
        description: "A comprehensive analysis of 10 wearable brands, detailing data flow architectures, compatibility matrices, and the proposed Dynamic Selection UI flow.",
        href: "/evidence/Wearable_Integration_Research.pdf",
        fileType: "pdf",
        action: "View Research Document",
        external: true
      }
    ]
  }`;

const homecare = `  {
    slug: "homecare-workflow-mapping",
    title: "Homecare Cross-System Integration & Test Scenario Design",
    subtitle: "Mapped a multi-system healthcare service journey and translated authentication states, API dependencies, asynchronous processing, and exception paths into a structured basis for integration and end-to-end test scenario design.",
    domain: "Healthcare / Homecare Services",
    role: "BA & QA Intern — Process Mapping & Test Scenario Design",
    period: "2026",
    type: "Anonymised Internship Case Study",
    category: "internship",
    publicLabel: "Internship Deliverable",
    isAnonymised: true,
    confidentialityNotice: "Selected business and product details have been anonymised due to confidentiality.",
    tags: [
      "Integration Testing",
      "E2E Test Design",
      "User Flow",
      "API Flow",
      "Authentication",
      "Async Processing",
      "Exception Handling"
    ],
    problem: "A Homecare service involved interactions between three major actors/systems: User \\u2192 Homecare Platform \\u2192 External Service Provider (VNPT).\\n\\nThe flow included different authentication states, system hand-offs, asynchronous processing, and multiple exception paths.\\n\\nWithout a consolidated end-to-end flow, it was difficult to clearly identify system boundaries, expected state transitions, failure conditions, and the scenarios that QA needed to validate.",
    summaryMetrics: [
      { value: "3", label: "Cross-system Actors" },
      { value: "5+", label: "Exception Paths Mapped" },
      { value: "E2E", label: "End-to-End Workflow" }
    ],
    scope: "The deliverable was created as a shared visual reference for requirement clarification and technical discussion.",
    cardArtefacts: [
      "User Flow",
      "Cross-system Swimlane",
      "Decision Mapping",
      "Exception Flow"
    ],
    disclosure: "This public visual has been recreated and anonymised. It represents a real-world healthcare integration workflow between a Homecare platform and an external service provider.",
    overview: "The objective was to analyse the business requirements and model the complete cross-system journey so that the resulting flow could serve as a common basis for integration test scenario design, end-to-end validation, asynchronous processing validation, and developer alignment.\\n\\nThe process map transformed a complex business workflow into explicit testable boundaries.",
    businessProblem: [
      "Distributed Responsibilities: Different actions and state changes were handled by User, Homecare frontend/backend, and VNPT system.",
      "Authentication States: The same business flow could begin from Guest User or Authenticated User.",
      "Asynchronous Processing: The process needed to account for loading/pending states, delayed responses, callbacks, and timeout conditions.",
      "Exception Handling: The flow included potential validation failures, external service failures, rejected transactions, and retry paths."
    ],
    responsibilities: [
      "Reviewed business requirements and available workflow documentation.",
      "Identified users, internal systems, external dependencies, and major system boundaries.",
      "Modelled the end-to-end workflow using a cross-system BPMN-style swimlane diagram.",
      "Mapped the happy path together with alternative, exception, failure, retry, and recovery paths.",
      "Clarified relationships between frontend actions, backend processing, and external service responses.",
      "Used the final process map as a basis for structured integration and E2E test scenario design."
    ],
    testingObjective: {
      description: "One of the main values of the process mapping was making hidden decision points visible, providing a direct basis for test design:",
      focusCards: [
        { title: "Authentication Check", description: "Guest \\u2192 Login Required | Authenticated \\u2192 Continue" },
        { title: "External Processing", description: "Request Accepted \\u2192 Pending | Result Successful \\u2192 Activate / Update State" },
        { title: "Exception Handling", description: "Result Failed \\u2192 Error / Recovery | No Response \\u2192 Timeout / Retry" }
      ]
    },
    testingApproach: [
      {
        title: "Authentication & Authorization Testing",
        flow: ["Guest Entry", "Authenticated Entry", "Secure Hand-off"],
        description: "Verify service access behaviour for Guest users. Verify that authenticated users can continue without repeating the login step."
      },
      {
        title: "End-to-End Integration Test Design",
        flow: ["Homecare", "VNPT", "Database Update"],
        description: "Validate the complete service activation journey from Homecare to VNPT and back, verifying database states."
      },
      {
        title: "Asynchronous Processing Testing",
        flow: ["Pending State", "Timeout Handling", "Delayed Callback"],
        description: "Verify expected behaviour while the external request is still pending. Validate timeout handling when no response is received."
      },
      {
        title: "Exception & Recovery Testing",
        flow: ["Service Unavailable", "Payment Rejected", "Retry Mechanism"],
        description: "Validate behaviour when the external service is unavailable, payment is rejected, or asynchronous callback is lost."
      }
    ],
    deepDive: {
      flow: ["Access Service", "Authentication Check", "Process Request", "Send to VNPT", "VNPT Callback", "Update State"],
      description: [
        "User accesses the Homecare Service.",
        "Authentication check branches to Login or continues.",
        "Homecare processes the request and sends it to VNPT.",
        "Request enters a pending/loading state.",
        "VNPT callback returns Success, Failure, or Timeout.",
        "Homecare updates the final state based on the callback."
      ]
    },
    outcome: "The final flowchart provided a consolidated view of the user journey, system responsibilities, API decision points, and exception paths. It successfully bridged the communication gap between business stakeholders and technical teams, accelerating the VNPT integration process and establishing a baseline for comprehensive QA.",
    lessons: [
      "Integration Testing Requires System-Level Thinking: The full chain must be considered: User \\u2192 Frontend \\u2192 Backend \\u2192 External Service \\u2192 Response / Callback \\u2192 Final User State.",
      "Authentication State Is a Test Variable: Guest and authenticated users may enter the same business process but follow different expected paths.",
      "Asynchronous Processes Require State-Based Testing: Testing must distinguish between Requested \\u2192 Pending \\u2192 Completed / Failed / Timeout.",
      "Exception Paths Are Part of the Main Test Scope: For third-party integrations, failure and recovery scenarios are as important as the happy path.",
      "Swimlane Mapping Improves Testability: Separating responsibilities makes it easier to identify test boundaries, ownership of state changes, and integration points."
    ],
    selectedEvidence: [
      {
        label: "PROCESS MAP",
        title: "Homecare & VNPT Cross-System Swimlane Diagram",
        description: "A recreated and anonymised cross-system flow showing authentication gates, service activation, system hand-offs, asynchronous processing, decision points, and exception paths.",
        href: "/evidence/TMA/Homecare-User-Flow-Diagram.pdf",
        fileType: "pdf",
        action: "View Diagram",
        external: true
      }
    ]
  }`;

const clinical = `  {
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
    overview: "The objective was to consolidate the available requirements into a structured Test Basis covering four core healthcare modules.\\n\\nThe catalogue was designed to support: Requirement Clarification \\u2192 Test Scenario Identification \\u2192 Test Case Preparation \\u2192 UAT.",
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
      "QA Risk: These issues could result in Missed Scenarios \\u2192 Incomplete Coverage \\u2192 Requirement Gaps \\u2192 Defects Escaping Validation."
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
        { title: "Traceability", description: "A structured identifier convention (e.g., A1.1 \\u2192 A1.2) to make features easier to reference." }
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
      "Requirements Must Be Testable: A useful requirement should provide enough clarity for QA to determine: Input \\u2192 Expected Behaviour \\u2192 Validation Condition.",
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
  }`;

const combined = wearable + ",\\n" + homecare + ",\\n" + clinical + ",\\n";

const startStr = 'slug: "wearable-health-data-integration"';
const startIndex = content.indexOf(startStr);
const blockStart = content.lastIndexOf('  {', startIndex);

const endStr = 'slug: "online-food-delivery-system"';
const endIndex = content.indexOf(endStr, startIndex);
const blockEnd = content.lastIndexOf('  {', endIndex);

content = content.substring(0, blockStart) + combined + content.substring(blockEnd);

fs.writeFileSync('src/data/projects.ts', content, 'utf8');
console.log("Fixed projects.ts successfully!");
