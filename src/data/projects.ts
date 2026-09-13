import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    slug: "wearable-health-data-integration",
    category: "internship",
    title: "Healthcare Wearable Data Integration",
    subtitle:
      "Designing a reliable data flow from wearable ecosystems into a healthcare platform.",
    domain: "Healthcare / Data Integration",
    role: "Business Analyst Intern",
    period: "2026",
    type: "Anonymised internship case study",
    tags: [
      "Requirement Analysis",
      "Integration Flow",
      "Business Rules",
      "Health Data",
      "Acceptance Criteria",
      "Exception Handling",
    ],
    problem:
      "The existing app hard-coded Samsung/Apple connection guides, alienating users of other brands and generating high volumes of support tickets.",
    summaryMetrics: [
      { value: "10", label: "Wearable Ecosystems" },
      { value: "6", label: "Health Data Types" },
      { value: "15-30m", label: "Sync Delay Evaluated" },
      { value: "2", label: "UI/UX Proposals" }
    ],
    overview:
      "A healthcare application (mCare) needed to reliably ingest health data from 10 different wearable brands (including Garmin, Xiaomi, Samsung, Fitbit, Oura, and WHOOP) via Health Connect. The legacy application utilized a hard-coded UI that only guided Samsung and Apple users, causing severe confusion and high drop-off rates for users of other brands. This research mapped the exact data flows, supported clinical metrics, background sync constraints, and proposed a scalable, dynamic UI/UX flow to increase connection success rates.",
    scope:
      "This public case study has been anonymised. It represents a real-world integration research and UX/UI redesign project for synchronising 10 different wearable ecosystems into a central healthcare application via Android Health Connect.",
    cardArtefacts: [
      "Data Flow Architecture",
      "Compatibility Matrix",
      "Dynamic Selection UI"
    ],
    businessProblem: [
      "The existing app hard-coded Samsung/Apple connection guides, alienating users of other brands and generating high volumes of support tickets.",
      "Wearable brands use vastly different architectures (Cloud-mediated vs. Native) and require different background OS permissions to sync.",
      "Data availability varies heavily by vendor (e.g., WHOOP and Oura focus on Sleep/HRV, while Huawei requires a third-party bridge app like Health Sync).",
      "Hard-coded UI created a scalability bottleneck, requiring a full app release for every new wearable brand added to the ecosystem.",
      "Users frequently dropped off because they didn't know how to grant background battery permissions or force cloud synchronization."
    ],
    responsibilities: [
      "Researched and mapped the end-to-end data synchronization flows for 10 major wearable ecosystems.",
      "Created a comprehensive Vendor Compatibility Matrix analyzing supported data types (Steps, HR, SpO2, Sleep, ECG, HRV).",
      "Identified system pain points, background permission dependencies, and cloud sync delays (averaging 15-30 minutes) for each vendor.",
      "Proposed and evaluated two new UI/UX solutions (Generic Guide vs. Dynamic Selection Flow) to replace the legacy hard-coded screens.",
      "Designed the target Dynamic Selection Flow, mapping out step-by-step connection checklists for each specific brand to guide low-tech users."
    ],
    solution: [
      "Selected the \"Dynamic Selection Flow\" to provide brand-specific, step-by-step guidance overlays, drastically improving the UX for low-tech users without requiring full app updates for new brands.",
      "Designed a unified connection state logic: Connection is only marked \"Successful\" when the app has Read permission, the vendor app has Write permission, and at least one valid data point is fetched.",
      "Established clear error-handling guidance, prompting users to disable Android battery optimization or force cloud sync when data is missing."
    ],
    outcome:
      "Delivered a complete research and design specification covering 10 wearable brands. The dynamic UI proposal eliminated the need for hard-coded screens, resolving the scalability bottleneck, reducing drop-off rates, and providing a robust framework for future wearable integrations.",
    lessons: [
      "Hardware Fragmentation is Real: Native integration (Garmin, Samsung) versus cloud-mediated or bridge-app integration (Huawei) requires entirely different user guidance.",
      "Real-time is an Illusion: Most wearable data flows rely on periodic background syncs with inherent 15-30 minute delays; the UX must manage user expectations accordingly.",
      "Permissions are Multi-layered: A successful sync requires OS-level background permissions, unrestricted battery settings, and explicit Health Connect Read/Write access.",
      "Scalability over Shortcuts: While a generic guide would save development time, investing in a dynamic, brand-specific UI dramatically improves user conversion and reduces long-term customer support costs."
    ],
    selectedEvidence: [
      {
        label: "RESEARCH & SYSTEM DESIGN",
        title: "Wearable Ecosystem Integration Research",
        description: "A comprehensive analysis of 10 wearable brands, detailing data flow architectures, compatibility matrices, and the proposed Dynamic Selection UI flow.",
        href: "/evidence/Wearable_Integration_Research.pdf",
        fileType: "pdf",
        action: "View Research Document \u2192",
        external: true
      }
    ],
    disclosure:
      "This public case study has been anonymised. It represents a real-world integration research and UX/UI redesign project for synchronising 10 different wearable ecosystems into a central healthcare application via Android Health Connect.",
  },
  {
    slug: "homecare-workflow-mapping",
    title: "Homecare User Flow & Cross-system Process Mapping",
    subtitle: "Mapping a multi-system homecare subscription and service activation journey across users, a healthcare platform and an external service provider.",
    domain: "Healthcare / Homecare Services",
    role: "Business Analyst Intern",
    period: "2026",
    type: "Anonymised Internship Deliverable",
    category: "internship",
    publicLabel: "Internship Deliverable",
    isAnonymised: true,
    confidentialityNotice: "Selected business and product details have been anonymised due to confidentiality.",
    tags: [
      "User Flow",
      "Swimlane",
      "Process Mapping",
      "Cross-system Flow",
      "Exception Handling",
      "Authentication Flow",
      "Requirement Clarification"
    ],
    problem: "A homecare service required a clear end-to-end view of how users registered, authenticated, subscribed to a service and moved between a healthcare platform and an external service provider.",
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
    disclosure: "This public visual has been recreated and anonymised. It represents a real-world integration workflow between a healthcare platform (Homecare) and a telecommunications/service provider (VNPT).",
    overview: "A homecare service required a clear end-to-end view of how users registered, authenticated, subscribed to a service, and moved between the Homecare platform and an external service provider (VNPT). The workflow involved several systems, alternative user paths, asynchronous API processing, and multiple failure or recovery scenarios. The deliverable was created as a shared visual reference for requirement clarification and technical alignment between business and development teams.",
    businessProblem: [
      "Responsibilities were distributed across the User, the Homecare platform, and VNPT.",
      "Users could enter the flow from different authentication states (Guest vs. Logged in).",
      "System responses from VNPT were asynchronous, requiring polling or webhook handling.",
      "The process contained several validation, failure, retry, and recovery paths that were previously undocumented.",
      "Redirects and system hand-offs caused friction in the user experience."
    ],
    responsibilities: [
      "Reviewed the available workflow and supporting business requirements.",
      "Identified actors (User), internal systems (Homecare), and external dependencies (VNPT).",
      "Modelled the end-to-end user journey using a cross-system BPMN-style swimlane diagram.",
      "Mapped alternative, exception, failure, retry, and recovery paths alongside the happy path.",
      "Clarified the relationship between frontend user actions and backend API responses."
    ],
    solution: [
      "Delivered a comprehensive cross-system swimlane diagram mapping the exact interactions between Users, Homecare, and VNPT.",
      "Visualised the authentication gates, asynchronous loading states, and error-handling mechanisms.",
      "Established a clear baseline for developers to build API integrations and for QA to design edge-case test scenarios."
    ],
    outcome: "The final flowchart provided a consolidated view of the user journey, system responsibilities, API decision points, and exception paths. It successfully bridged the communication gap between business stakeholders and technical teams, accelerating the VNPT integration process.",
    lessons: [
      "A successful user action does not always produce an immediate system result; asynchronous processing must be reflected in the UX.",
      "Guest and authenticated users require distinct flows and security controls before triggering external billing/subscription APIs.",
      "Exception and recovery paths are just as critical as the happy path when integrating third-party services.",
      "Visual swimlanes are highly effective in clarifying boundaries of responsibility between internal platforms and external vendors."
    ],
    selectedEvidence: [
      {
        label: "PROCESS MAP",
        title: "Homecare & VNPT Swimlane Diagram",
        description: "A cross-system flowchart detailing user authentication, service subscription, and asynchronous API interactions between Homecare and VNPT.",
        href: "/evidence/TMA/Homecare-User-Flow-Diagram.pdf",
        fileType: "pdf",
        action: "View Diagram",
        external: true
      }
    ]

  },
  {
    slug: "clinical-feature-catalogue",
    title: "Clinical Feature Catalogue & Scope Analysis",
    subtitle: "Consolidating fragmented healthcare product requirements into a structured, scoped and traceable feature catalogue.",
    domain: "Healthcare / Electronic Medical Records",
    role: "Business Analyst Intern",
    period: "2026",
    type: "Anonymised Internship Deliverable",
    category: "internship",
    publicLabel: "Internship Deliverable",
    isAnonymised: true,
    confidentialityNotice: "Selected business and product details have been anonymised due to confidentiality.",
    disclosure: "AI-assisted research tools (Rovo Feature Analysis and NotebookLLM) were used to accelerate source discovery and initial information extraction. Scope definition, feature grouping, deduplication, terminology standardisation and final validation remained Business Analyst responsibilities.",
    tags: [
      "Feature Analysis",
      "Scope Management",
      "Requirements Synthesis",
      "Functional Taxonomy",
      "Traceability",
      "Healthcare EMR",
      "AI-assisted Research"
    ],
    overview: "Product requirements were distributed across 91 CAF epics, 54 PRD epics, and over 200 related tickets. The objective was to consolidate this massive volume of information into a structured feature catalogue for four core healthcare modules: Patient Records & Clinical Management, Medications & Lab/Clinical Results Processing, Telemedicine, and Administration & Audit. The catalogue needed to define scope, organise features by user journey, standardise terminology, and create identifiers that could later support User Story and Test Case references.",
    problem: "Product requirements were distributed across 91 CAF epics, 54 PRD epics, and over 200 related tickets. The objective was to consolidate this massive volume of information into a structured feature catalogue for four core healthcare modules: Patient Records & Clinical Management, Medications & Lab/Clinical Results Processing, Telemedicine, and Administration & Audit.",
    summaryMetrics: [
      { value: "345", label: "Healthcare Features" },
      { value: "54", label: "Functional Groups" },
      { value: "145", label: "Epics Consolidated" },
      { value: "4", label: "Core EMR Modules" }
    ],
    scope: "The catalogue needed to define scope, organise features by user journey, standardise terminology, and create identifiers that could later support User Story and Test Case references.",
    cardArtefacts: [
      "Scope Definition",
      "Feature Taxonomy",
      "Traceability",
      "Requirement Synthesis"
    ],
    businessProblem: [
      "Similar capabilities were described using different names across legacy systems and new product requirements.",
      "Features appeared across multiple fragmented documents (CAF and PRD epics) and ticket sources.",
      "Functional boundaries between healthcare modules were not always explicit (e.g., distinguishing core Patient Records from Appointments or Inventory).",
      "Duplicate or overlapping capabilities needed to be identified and merged.",
      "Teams needed a consistent reference for feature discussions and traceability."
    ],
    responsibilities: [
      "Reviewed 91 CAF epics, 54 PRD epics, and supporting ticket documentation.",
      "Defined strict inclusion and exclusion rules for selected modules (e.g., isolating Patient Records from Appointments and Inventory).",
      "Extracted and grouped capabilities by functional domain and chronological user journey (e.g., Patient Creation → Demographics → Care Team → Clinical Charting).",
      "Standardised feature names and prepared concise acceptance-oriented behaviour descriptions.",
      "Created hierarchical feature identifiers (e.g., structured as [Group].[Sequence Number], such as A1.1 or B3.2) for seamless traceability.",
      "Reviewed AI-assisted findings (Rovo and NotebookLLM) and manually validated scope, terminology and domain meaning."
    ],
    analysisEvidenceLabel: "Evidence",
    selectedEvidence: [
      {
        label: "FEATURE LIST",
        title: "Patient Records Feature Catalogue",
        description: "A structured catalogue of 71 features covering the patient lifecycle, from demographics and care team assignment to clinical charting and privacy directives.",
        href: "/evidence%20TMA/Feature%20List/QU%E1%BA%A2N%20L%C3%9D%20H%E1%BB%92%20S%C6%A0%20B%E1%BB%86NH%20NH%C3%82N.pdf",
        action: "View Feature List",
        fileType: "pdf",
        external: true
      },
      {
        label: "FEATURE LIST",
        title: "Medications & Labs Feature Catalogue",
        description: "Detailed specification of 91 features managing e-prescribing, medication reconciliation, inpatient eMAR, and the automated processing of incoming lab results.",
        href: "/evidence%20TMA/Feature%20List/K%C3%8A%20%C4%90%C6%A0N%20%26%20X%E1%BB%AC%20L%C3%9D%20K%E1%BA%BET%20QU%E1%BA%A2%20L%C3%82M%20S%C3%80NG.pdf",
        action: "View Feature List",
        fileType: "pdf",
        external: true
      },
      {
        label: "FEATURE LIST",
        title: "Telemedicine Feature Catalogue",
        description: "Defined 79 features mapping the virtual care workflow, including provider schedule rules, appointment modes, and the patient virtual waiting room experience.",
        href: "/evidence%20TMA/Feature%20List/TELEMEDICINE.pdf",
        action: "View Feature List",
        fileType: "pdf",
        external: true
      },
      {
        label: "FEATURE LIST",
        title: "Administration & Audit Feature Catalogue",
        description: "Documented 104 system governance features encompassing role-based access control (RBAC), continuous audit logging, and compliance-driven onboarding/offboarding workflows.",
        href: "/evidence%20TMA/Feature%20List/QU%E1%BA%A2N%20TR%E1%BB%8A%20%26%20KI%E1%BB%82M%20TO%C3%81N.pdf",
        action: "View Feature List",
        fileType: "pdf",
        external: true
      }
    ],
    solution: [
      "Designed a tiered functional taxonomy, categorising raw requirements into 4 core healthcare modules and 54 logical groups aligned with clinical workflows.",
      "Standardised the requirement format to include strict Actor scopes, Feature Names, and Acceptance-oriented capability descriptions.",
      "Established a unified hierarchical identifier convention (e.g., [Group].[Sequence Number]) to ensure seamless backward and forward traceability."
    ],
    outcome: "The deliverable successfully created a structured, comprehensive reference mapping 345 distinct healthcare features across 54 functional groups (covering Patient Records, Medications/Labs, Telemedicine, and Admin/Audit). This catalogue now serves as a single source of truth that supports requirement discussions, User Story decomposition, Test Case preparation, and future scope analysis.",
    lessons: [
      "Scope Isolation is Critical: Managing 345 distinct features across 54 functional groups taught me that defining strict functional boundaries (e.g., separating Clinical Charting from Medication Safety) is essential to prevent requirement overlap in complex enterprise systems.",
      "Taxonomy Must Follow the User Journey: Structuring the catalogue chronologically—such as mapping the flow from Patient Creation to Discharge Reconciliation—makes requirements significantly more intuitive for development teams than grouping them solely by backend architecture.",
      "Healthcare Demands Exceptional Precision: Features related to Medication Safety (e.g., Drug-Drug Interactions) or System Governance (e.g., \"Break Glass\" emergency access) require meticulous Acceptance Criteria. In the MedTech domain, requirement ambiguity directly impacts patient safety and strict PHIPA compliance.",
      "Traceability is the Backbone of QA: Establishing a hierarchical identifier system (e.g., A1.1, B3.2) was not just an administrative task. It became the crucial link connecting high-level business epics to downstream User Stories, UAT execution, and FHIR API integrations.",
      "AI as a Co-pilot, Not an Autopilot: While tools like Rovo and NotebookLLM drastically accelerated the extraction of information, the final validation of clinical workflows, role-based access controls (RBAC), and domain semantics strictly required a Business Analyst's critical thinking."
    ]
  },


  {
    slug: "online-food-delivery-system",
    category: "academic",
    title: "Online Food Delivery System",
    subtitle: "A multi-role food delivery workflow connecting Customers, Restaurants, Shippers and Administrators was analysed to reconstruct intended business requirements, TO-BE processes and validation rules from the existing system behaviour.",
    domain: "Food Delivery / Marketplace",
    role: "Business Analyst — Individual Portfolio Reconstruction & Validation",
    period: "Original Project: 2025 | BA Case Study Reconstruction: 2026",
    type: "BA Case Study",
    tags: [
      "TO-BE Process",
      "Requirements Engineering",
      "Business Rules",
      "Order Lifecycle",
      "Data Modelling"
    ],
    problem:
      "A multi-role food delivery workflow connecting Customers, Restaurants, Shippers, and Administrators needed to be analysed to separate intended TARGET requirements from current physical implementation behaviour.",
    overview:
      "This case study reconstructs and verifies the requirements of a multi-role Online Food Delivery System against the approved project baseline and available implementation evidence, covering Customer, Restaurant, Shipper and Administrator workflows. The analysis separates intended TARGET behaviour from CURRENT implementation evidence and connects process models, business rules, lifecycle states, requirements, data, gap findings and UAT through controlled traceability.\n\nThe analysed scope includes account registration and authentication, restaurant and menu browsing, checkout and fee calculation, Restaurant order processing, Shipper assignment and delivery, order tracking, reviews and Administrator capabilities. Native mobile applications and real production payment-gateway integration are outside scope. Unresolved target semantics are retained as explicit clarifications rather than presented as confirmed behaviour.",
    scope: "",
    cardArtefacts: ["TO-BE Process", "Order Lifecycle", "Logical ERD"],
    responsibilities: [
      "Structured and specified 27 Functional Requirements across system-level SRS and detailed FRS views, supported by 17 actor-goal Use Cases, 22 User Stories and 50 Acceptance Criteria.",
      "Modelled a controlled four-state TARGET order lifecycle and its permitted transitions.",
      "Extracted and defined 7 controlled business rules decoupled from implementation.",
      "Separated logical business concepts from physical persistence in the Data Dictionary.",
      "Performed TARGET vs CURRENT gap analysis to identify implementation discrepancies.",
      "Designed a 60-entry UAT/validation catalogue comprising 59 UAT designs and 1 separately classified technical validation, mapping backward traceability while retaining unresolved TARGET semantics as explicit blocked conditions.",
    ],
    baPipeline: [
      "Business Context",
      "AS-IS Analysis",
      "TO-BE Process",
      "Business Rules",
      "System & Functional Requirements — SRS / FRS",
      "UC / User Stories / Acceptance Criteria",
      "State & Data Modelling",
      "TARGET vs CURRENT Validation",
      "Gap Analysis",
      "UAT / Validation Design"
    ],
    asisNote: "The AS-IS model is an analytical case-study baseline used for comparison with the TO-BE process; it was not validated through formal stakeholder interviews.",
    toBeProcess: [
      "Customer\\nBrowse → Cart → Checkout\\n→ COD / QR Payment Simulation",
      "System\\nValidate Address & Distance\\n→ Calculate Fees\\n→ Create Order\\n→ \"Chờ xác nhận\"",
      "Restaurant\\nPrepare Order\\n→ Mark Ready\\n→ \"Đang lấy món\"",
      "Shipper\\nAccept Eligible Order\\n→ Pick Up\\n→ \"Đang giao\"",
      "Customer\\nTrack Status / Location / Route",
      "Shipper\\nComplete Delivery\\n→ \"Hoàn thành\"",
      "Customer\\nReview"
    ],
    toBeProcessNote: "Upstream prerequisite: mapped Restaurant and Shipper operational capabilities are subject to Administrator approval under BR-PARTNER-01.",
    businessRules: [
      { id: "BR-ORDER-01", name: "Completed Order Review Eligibility", description: "Constrains review submission exclusively to orders in the 'Hoàn thành' state." },
      { id: "BR-SHIP-01", name: "Single Active Delivery Constraint", description: "Requires a Shipper not to hold a conflicting active delivery before accepting another order. The exact definition of “active delivery” remains a target clarification." },
      { id: "BR-SHIP-02", name: "Delivery Acceptance Eligibility", description: "Restricts Shipper acceptance to unassigned orders explicitly in the 'Đang lấy món' state." },
      { id: "BR-DEL-01", name: "Maximum Delivery Distance", description: "Rejects checkout if the calculated route distance exceeds 30 km." },
      { id: "BR-FEE-01", name: "Distance-Based Delivery Fee", description: "VND 15,000 for the first 3 km + VND 3,000 per additional km. Fractional-kilometre rounding remains unresolved." },
      { id: "BR-FEE-02", name: "Time-Based Service Fee", description: "VND 16,000 before 19:00 and VND 20,000 from 19:00 onward. The authoritative timestamp remains unresolved." },
      { id: "BR-PARTNER-01", name: "Partner Approval Requirement", description: "Restricts Restaurants and Shippers from accessing mapped normal operational capabilities until explicitly approved by an Administrator. The wider non-core capability boundary remains unresolved." }
    ],
    orderLifecycle: {
      states: ["Transition Origin — Order Created\nNot an Order.Status", "Chờ xác nhận", "Đang lấy món", "Đang giao", "Hoàn thành"],
      transitions: [
        "ST-01",
        "ST-02",
        "ST-03",
        "ST-04"
      ],
      note: "Transition Origin — Order Created is not an Order.Status. Assignment conditions such as Unassigned are also not Order.Status values."
    },
    decompositionExample: {
      requirement: { id: "FR-SHP-02 — Accept Delivery Assignment", text: "Shipper shall be able to accept a delivery assignment." },
      useCase: { id: "UC-SHP-02 — Accept Delivery Assignment" },
      userStory: { id: "US-SHP-02", text: "As a Shipper, I want to claim an available delivery order, so that I am officially assigned to execute the delivery." },
      businessRules: [
        { id: "BR-SHIP-01", name: "Single Active Delivery Constraint" },
        { id: "BR-SHIP-02", name: "Delivery Acceptance Eligibility" },
        { id: "BR-PARTNER-01", name: "Partner Approval Requirement" }
      ],
      acceptanceCriteria: [
        { id: "AC-US-SHP-02-01 — Successful Acceptance", text: "Eligible unassigned order in 'Đang lấy món' can be assigned when the Shipper has no conflicting active delivery." },
        { id: "AC-US-SHP-02-02 — Wrong Status", text: "Reject acceptance when Order.Status is not 'Đang lấy món'." },
        { id: "AC-US-SHP-02-03 — Already Assigned", text: "Reject acceptance when the Order already has a Shipper." },
        { id: "AC-US-SHP-02-04 — Active Delivery Constraint", text: "Reject acceptance when the Shipper already holds a conflicting active delivery." }
      ]
    },
    dataAnalysis: {
      persisted: [
        "Order.Status → DonHang.TrangThai",
        "Shipper Assignment → DonHang.MaShipper",
        "Total Amount → DonHang.TongTien",
        "Aggregated Charge → DonHang.ShipFee"
      ],
      derived: [
        "Delivery Distance",
        "Routing Information"
      ],
      note: "Delivery Fee and Service Fee remain distinct TARGET business concepts, while separate physical persistence for each was not verified."
    },
    gaps: [
      { 
        id: "GAP-01", 
        title: "Shipper Acceptance Status Enforcement", 
        description: "The TARGET requires orders to be unassigned AND in the 'Đang lấy món' status. The CURRENT evidence checks the assignment condition but fails to fully enforce the status prerequisite.",
        target: "Order must be in 'Đang lấy món' state to be accepted.",
        current: "Assignment condition is checked, but state prerequisite is not fully enforced."
      },
      { 
        id: "GAP-02", 
        title: "Credential Protection", 
        description: "The TARGET requires credentials to be protected via secure password hashing. The CURRENT evidence demonstrated plaintext password handling/storage.",
        target: "Credentials must be protected via secure password hashing.",
        current: "Plaintext password handling and storage."
      }
    ],
    traceabilityExample: {
      flow: [
        "BR-DEL-01\\nMaximum Delivery Distance",
        "FR-CUS-04\\nValidate Address & Distance",
        "UC-CUS-03\\nCheckout and Place Order",
        "US-CUS-04\\nComplete Checkout",
        "AC-US-CUS-04-02 / 03\\n≤ 30 km allowed / > 30 km rejected",
        "UAT-009 + UAT-010\\nBoundary Validation"
      ],
      uatStats: {
        ready: 53,
        blocked: 6,
        technical: 1
      },
      note: "All UAT cases remain NOT EXECUTED. The technical-validation entry is separately classified and is not presented as UAT execution. UAT status reflects design readiness, not execution results."
    },
    baCompetencies: [
      { competency: "Business Process Analysis", evidence: "AS-IS & TO-BE models isolating fragmentation and multi-role handoffs" },
      { competency: "User Story Development", evidence: "Functional requirements decomposed into User Stories and Acceptance Criteria" },
      { competency: "Business Rule Modelling", evidence: "7 controlled rules decoupled from functional narratives" },
      { competency: "State/Lifecycle Modelling", evidence: "Order state diagram with 4 strict statuses and transition triggers" },
      { competency: "Data Analysis", evidence: "Logical business concepts separated from CURRENT physical persistence." },
      { competency: "TARGET vs CURRENT Validation", evidence: "Gap Analysis distinguishing intended design from existing code" },
      { competency: "UAT / Validation Design", evidence: "Acceptance Criteria translated into positive, negative, boundary, state-transition and clarification-blocked UAT designs, with the non-UAT technical-validation entry kept separately classified." }
    ],
    summaryMetrics: [
      { value: "10", label: "Core SDLC Artefacts", subtext: "From Business Context to End-to-End Validation" },
      { value: "27", label: "Functional Requirements" },
      { value: "7", label: "Business Rules" },
      { value: "60", label: "Validation Catalogue Entries", subtext: "59 UAT Designs · 1 Non-UAT Technical Validation | 53 Ready · 6 Blocked by TARGET Clarification" }
    ],
    analysisOutputs:
      "Produced a controlled BA case-study baseline connecting process analysis, business rules, lifecycle modelling, requirements, data, implementation gaps, traceability and UAT design. Two implementation gaps were verified while unresolved target semantics were retained as explicit clarifications rather than silently assumed.",
    lessons: [
      "Separating logical TARGET data concepts from CURRENT physical persistence is essential for accurate requirements.",
      "Identifying implementation gaps (like GAP-01) should not result in rewriting the target to match the code.",
      "Handling unresolved semantics without inventing a definition demonstrates maturity in managing ambiguity.",
      "Building backward traceability from UAT to Acceptance Criteria makes test-design coverage explicit without overstating execution readiness."
    ],
    selectedEvidence: [
      { label: "Business Requirements Document (BRD)", action: "View BRD", href: "/evidence/online-delivery/07_Business_Requirements_Document.pdf", fileType: "pdf", external: true },
      // { label: "User Requirements Document (URD)", action: "View URD", href: "/evidence/online-delivery/User_Requirements_Document.pdf", fileType: "pdf", external: true },
      // { label: "Product Backlog", action: "View Backlog", href: "/evidence/online-delivery/Product_Backlog_Online_Food_Delivery.pdf", fileType: "pdf", external: true },
      { label: "AS-IS Process Analysis", action: "View Current-State Process", href: "/evidence/online-delivery/AS_IS_Process.pdf", fileType: "pdf", external: true },
      { label: "TO-BE Cross-Role Process", action: "View Process", href: "/evidence/online-delivery/01_TO_BE_Cross_Role_Process.pdf", fileType: "pdf", external: true },
      // { label: "Business Rules Catalogue", action: "View Rules", href: "/evidence/online-delivery/03_Business_Rules_Catalogue.pdf", fileType: "pdf", external: true },
      { label: "Order State Diagram", action: "View Lifecycle", href: "/evidence/online-delivery/02_Order_State_Diagram.pdf", fileType: "pdf", external: true },
      { label: "Logical ERD / Data Model", action: "View Data Model", href: "/evidence/online-delivery/Logical_ERD.pdf", fileType: "pdf", external: true },
      { label: "Software Requirements Specification (SRS)", action: "View System Specification", href: "/evidence/online-delivery/Software_Requirements_Specification.pdf", fileType: "pdf", external: true },
      { label: "Functional Requirements Specification (FRS)", action: "View Functional Specification", href: "/evidence/online-delivery/Functional_Requirements_Specification.pdf", fileType: "pdf", external: true },
      { label: "User Stories & Acceptance Criteria", action: "View Requirement Detail", href: "/evidence/online-delivery/04_User_Stories_Acceptance_Criteria.pdf", fileType: "pdf", external: true },
      // { label: "Requirements Traceability Matrix", action: "Download RTM Workbook", href: "/evidence/online-delivery/05_Requirements_Traceability_Matrix.xlsx", fileType: "xlsx", download: true },
      { label: "UAT & Validation Design Catalogue", action: "Download Validation Workbook", href: "/evidence/online-delivery/06_UAT_Test_Cases.xlsx", fileType: "xlsx", download: true },
      { label: "Original Academic Project Report — Supporting Evidence", action: "View Supporting Report", href: "/evidence/online-delivery/08_Original_Academic_Project_Report.pdf", fileType: "pdf", external: true }
    ],
    artefacts: []
  },
  {
    slug: "web-functional-testing",
    category: "academic",
    title: "Web Functional Testing & Selenium Automation",
    subtitle: "Designed and executed 30 functional test cases across core e-commerce workflows, with Selenium IDE-assisted validation of dynamic content, calculations, state persistence and cross-page data consistency.",
    domain: "E-commerce / Software Quality Assurance",
    role: "Test Analyst — Academic Project",
    period: "2025",
    type: "Academic Software Testing Case Study",
    tags: [
      "30 Test Cases",
      "Functional Testing",
      "Selenium IDE",
      "Business Rule Validation",
      "Data Validation",
      "Test Automation",
    ],
    problem: "The project evaluated critical e-commerce workflows through 30 structured functional test cases on the TNC Store website. The scope covered authentication, product discovery, shopping-cart behaviour, form validation, dynamic pricing, discount calculations, session persistence and product-data consistency, with emphasis on comparing expected behaviour against actual system behaviour.",
    overview: "The project evaluated critical e-commerce workflows through 30 structured functional test cases on the TNC Store website. The scope covered authentication, product discovery, shopping-cart behaviour, form validation, dynamic pricing, discount calculations, session persistence and product-data consistency, with emphasis on comparing expected behaviour against actual system behaviour.\n\nTesting included straightforward functional scenarios as well as more analytical validations involving dynamic lists, independently calculated values, cross-session state persistence and normalized product data.",
    scope: "",
    disclosure: "This was an academic software testing exercise conducted against a publicly accessible e-commerce website and was not commissioned by or affiliated with TNC Store.",
    cardArtefacts: [
      "Test coverage map",
      "Selenium validation flow",
      "Data integrity validation",
    ],
    testingObjective: {
      description: "The objective was to validate whether critical e-commerce functions behaved consistently with their expected results across normal, negative and data-dependent scenarios. The scope covered not only visible UI responses but also calculations, result-set accuracy, state persistence and cross-page data consistency.",
      focusCards: [
        {
          title: "Functional Correctness",
          description: "Validate expected behaviour across core user workflows."
        },
        {
          title: "Business Rule Validation",
          description: "Independently verify limits, calculations, pricing and discount behaviour."
        },
        {
          title: "Data Consistency",
          description: "Check whether information remains consistent across pages, sessions and different representations."
        }
      ]
    },
    testCoverage: [
      {
        category: "Authentication & Account",
        testCases: "TC-01 · TC-02 · TC-10 · TC-13",
        behaviours: "Successful Login · Logout · Change Password — Incorrect Current Password · Account Data Persistence"
      },
      {
        category: "Product Discovery & Pricing",
        testCases: "TC-05 · TC-06 · TC-07 · TC-11 · TC-12 · TC-21 · TC-24 · TC-27",
        behaviours: "Price Sorting · Brand Filtering · Product Count Consistency · Keyword Search · Dynamic Search Suggestions · Min-Max Price Filter · Discount Logic · Category + Keyword Search"
      },
      {
        category: "Shopping Cart",
        testCases: "TC-03 · TC-04 · TC-08 · TC-09 · TC-14 · TC-22 · TC-23 · TC-29",
        behaviours: "Cart Quantity · Empty Cart · Maximum Purchase Limit · Cart Total · Excessive Quantity · Item Accumulation · Price Deduction After Removal · Cart Persistence After Login"
      },
      {
        category: "Product Interaction & Review",
        testCases: "TC-15 · TC-16 · TC-17 · TC-18",
        behaviours: "Chat Widget · Required Field Validation · Successful Review · Product Image Gallery"
      },
      {
        category: "PC Builder",
        testCases: "TC-19 · TC-20 · TC-25 · TC-26 · TC-28",
        behaviours: "Pre-selected Component · Dynamic Price Deduction · Total After Editing · Complete-PC Discount · Reset Configuration"
      },
      {
        category: "Data Integrity",
        testCases: "TC-30",
        behaviours: "Product Name vs Detailed Specifications"
      }
    ],
    responsibilities: [
      "Designed 30 functional test cases covering critical e-commerce workflows, including positive, negative and edge-case scenarios.",
      "Defined test scenarios, execution steps, expected results and observable validation criteria.",
      "Applied Selenium IDE-based browser automation to validate dynamic lists, search/filter behaviour and state-dependent workflows.",
      "Independently derived expected values to validate cart totals, pricing and discount calculations against actual website output.",
      "Validated cross-session persistence and cross-page product-data consistency through extraction, Regex-based normalization and comparison.",
      "Logged observed mismatches where actual behaviour did not satisfy expected validation criteria."
    ],
    users: [],
    testingApproach: [
      {
        title: "01 — Scenario Design",
        flow: [
          "Expected Behaviour",
          "Test Scenario",
          "Initial State / Test Data",
          "Test Steps",
          "Expected Result"
        ],
        description: "Each test case defined the behaviour to validate, the execution sequence and the expected observable result."
      },
      {
        title: "02 — Execution & Validation",
        flow: [
          "Browser Interaction",
          "Actual Result",
          "Compare",
          "Pass / Fail",
          "Investigation"
        ],
        description: "Execution focused on observable system behaviour rather than simply confirming that an interaction completed."
      },
      {
        title: "03 — Automated Validation",
        flow: [
          "Iterate",
          "Extract",
          "Normalize / Calculate",
          "Compare",
          "Log Result"
        ],
        description: "More analytical scenarios required iterating through dynamic content, extracting values, normalizing data or independently calculating expected results before comparison."
      }
    ],
    selectedTestCases: {
      subtitle: "Representative evidence from the complete 30-test-case suite.",
      cases: [
        {
          id: "TC-05",
          name: "Product Sorting by Price — Low to High",
          focus: "Result ordering",
          validationLogic: "Load the complete product list and sequentially compare each displayed price with the next value.",
          demonstrates: "Dynamic-list validation and ordered-data comparison."
        },
        {
          id: "TC-06",
          name: "Product Filtering by Brand",
          focus: "Filter accuracy",
          validationLogic: "Apply a brand filter, iterate through all displayed products and verify that each result matches the selected brand.",
          demonstrates: "Result-set validation and detection of unrelated items."
        },
        {
          id: "TC-07",
          name: "Product Count Consistency",
          focus: "Catalogue completeness",
          validationLogic: "Extract the expected product count, repeatedly load all remaining items and compare the final rendered count against the advertised value.",
          demonstrates: "Expected-vs-actual comparison across dynamically loaded content."
        },
        {
          id: "TC-16",
          name: "Mandatory Field Validation on Product Review Form",
          focus: "Negative testing",
          validationLogic: "Submit the review form with required inputs missing and verify that submission is blocked with validation feedback.",
          demonstrates: "Failure-path and validation-rule testing."
        },
        {
          id: "TC-20",
          name: "Dynamic Price Deduction — PC Builder",
          focus: "Calculation validation",
          validationLogic: "Record initial total and removed-item price, then verify: New Total = Initial Total - Removed Item Price",
          demonstrates: "Independent mathematical verification of dynamic UI calculations."
        },
        {
          id: "TC-24",
          name: "Discount Logic Validation",
          focus: "Business Rule Validation",
          validationLogic: "Extract original price, discounted price and displayed discount percentage. Independently calculate the expected discount and compare it with the website value.",
          demonstrates: "Business-rule and numerical consistency validation."
        },
        {
          id: "TC-29",
          name: "Shopping Cart Data Retained Post-Authentication",
          focus: "State persistence",
          validationLogic: "Add a product during a guest session, authenticate and verify that the same product remains in the authenticated cart.",
          demonstrates: "Cross-state persistence and guest-to-authenticated workflow validation."
        },
        {
          id: "TC-30",
          name: "Data Integrity Validation — Product Name vs Detailed Specifications",
          focus: "Data consistency",
          validationLogic: "Iterate through product pages, extract core specifications from product names, normalize values and compare them against detailed specification content.",
          demonstrates: "Automated data extraction, Regex-based parsing, normalization and Pass / Fail / Skip classification."
        }
      ]
    },
    deepDive: {
      flow: [
        "Product Listing",
        "Product Detail",
        "Extract Product Name",
        "Extract Core Specs",
        "Normalize",
        "Read Detailed Specifications",
        "Normalize",
        "Compare",
        "Pass / Fail / Skip"
      ],
      description: [
        "Iterate across products",
        "Handle missing specification tables",
        "Extract core attributes such as RAM, storage and GPU series",
        "Use Regex",
        "Strip measurement units",
        "Remove formatting/special characters",
        "Convert to comparable strings",
        "Compare the normalized values",
        "Log Pass, Fail or Skip"
      ]
    },
    automationStrategy: {
      description: "Selected scenarios used Selenium IDE-based browser automation to validate dynamic lists, search and filter results, calculations, session persistence and data consistency. Rather than relying solely on visible UI outcomes, the tests extracted actual values and compared them against independently derived expected results.",
      blocks: [
        {
          title: "Calculation & Business Rule Validation",
          items: [
            "Cart total calculations",
            "Item-removal recalculation",
            "PC Builder dynamic pricing",
            "Promotional discount logic",
            "Complete-PC discount behaviour"
          ],
          formulas: [
            "New Total = Initial Total − Removed Item Price",
            "Expected Total = Σ(Item Price × Quantity)",
            "Expected Discount % = ceil(((Original Price − Promotional Price) / Original Price) × 100)"
          ],
          description: "The calculated percentage is rounded upward to match the website's displayed discount-percentage rule."
        },
        {
          title: "State Validation",
          flow: [
            "Guest Session",
            "Add Product",
            "Authenticate",
            "Authenticated Cart",
            "Verify Product Persistence"
          ],
          evidence: "Evidence: TC-29 — Shopping Cart Data Retained Post-Authentication."
        },
        {
          title: "Data Validation",
          flow: [
            "Product Name",
            "Extract Core Specifications",
            "Normalize",
            "Detailed Specifications",
            "Compare"
          ],
          evidence: "Evidence: TC-30 — Product Name vs Detailed Specifications."
        }
      ]
    },
    testingChallenges: [
      {
        title: "Dynamic Calculations",
        description: "Values such as cart totals, component prices and discounts required independent expected-value calculations."
      },
      {
        title: "Dynamic Content",
        description: "Search, filtering and product-count scenarios required iterating through dynamically loaded lists."
      },
      {
        title: "State Persistence",
        description: "Guest-session data had to be validated after authentication."
      },
      {
        title: "Data Normalization",
        description: "Cross-view specification comparison required cleaning and normalizing inconsistent text representations."
      }
    ],
    baRelevance: {
      description: "This project strengthened my ability to express expected behaviour in observable and testable terms. Designing and executing test cases required identifying validation rules, edge cases and failure conditions — the same thinking used when writing Acceptance Criteria and preparing UAT scenarios.",
      links: [
        {
          title: "Testable Requirements",
          description: "Expected behaviour must be observable and unambiguous."
        },
        {
          title: "Acceptance Criteria",
          description: "Failure conditions and edge cases need explicit definition."
        },
        {
          title: "Business Rule Validation",
          description: "Implemented calculations and limits must match expected rules."
        },
        {
          title: "UAT Readiness",
          description: "Structured scenarios provide a stronger basis for business validation."
        }
      ]
    },
    approach: [],
    solution: [],
    challenges: [],
    selectedEvidence: [
      {
        label: "Software Testing Report — 30 Functional Test Cases",
        fileType: "pdf",
        action: "View Testing Report",
        href: "/evidence/tnc-testing/TNC_Software_Testing_Report_Public.pdf",
        external: true
      },
      {
        label: "Selenium IDE Automation Project",
        fileType: "side",
        action: "Download Selenium Project",
        href: "/evidence/tnc-testing/TNC_Selenium_IDE_Automation_Project.side",
        download: true
      },
      {
        label: "Báo Cáo Kịch Bản Kiểm Thử (HTML)",
        fileType: "html",
        action: "View HTML Report",
        href: "/evidence/tnc-testing/Bao_Cao_Test_Nhom_9.html",
        external: true
      }
    ],
    artefacts: [],
    outcome: "Produced a 30-test-case functional validation suite across six e-commerce coverage areas, combining scenario-based functional testing with Selenium IDE-assisted validation of dynamic content, calculations, state persistence and cross-page data consistency.",
    lessons: [
      "Visible UI success does not necessarily prove correct business behaviour.",
      "Calculation-heavy functionality should be validated against independently derived expected values.",
      "Negative and edge-case scenarios are effective at exposing missing or unclear validation rules.",
      "Requirements are easier to validate when expected behaviour and failure conditions are explicitly observable."
    ],
    summaryMetrics: [
      { value: "30", label: "FUNCTIONAL TEST CASES" },
      { value: "6", label: "CORE COVERAGE AREAS" },
      { value: "Selenium IDE", label: "BROWSER AUTOMATION" },
      { value: "Expected vs Actual", label: "VALIDATION APPROACH" }
    ]
  }
];

export function getProjectBySlug(slug?: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
