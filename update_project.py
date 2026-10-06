import re

with open('src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_object_start = """  {
    slug: "online-food-delivery-system",
    category: "academic",
    title: "Online Food Delivery System",
    subtitle: "A requirement-based QA case study focused on testable business rules, workflow validation, UAT design, traceability, state transitions, and implementation gap analysis across Customer, Restaurant, Shipper, and Administrator workflows.",
    domain: "Food Delivery / Marketplace",
    role: "Software Tester / QA Validation — Academic Case Study",
    period: "Original Project: 2025 | QA Validation Case Study: 2026",
    type: "QA / Requirement-Based Testing Case Study",
    tags: [
      "Requirement-Based Testing",
      "UAT Design",
      "Test Case Design",
      "Traceability",
      "State Transition Testing",
      "Gap Analysis"
    ],
    problem:
      "A multi-role food delivery system required validation across Customer, Restaurant, Shipper, and Administrator workflows. The main challenge was to ensure that business rules, order states, role-based actions, and system behaviour were clearly defined and testable before UAT.",
    overview:
      "This case study applies requirement-based testing and UAT design to an Online Food Delivery System. The analysis uses the approved project baseline and available implementation evidence to identify expected behaviour, derive testable conditions, establish traceability, and identify gaps between TARGET requirements and CURRENT implementation.\\n\\nThe scope covers account registration and authentication, restaurant and menu browsing, checkout and fee calculation, restaurant order processing, shipper assignment and delivery, order tracking, reviews, and administrator capabilities.\\n\\nNative mobile applications and real production payment-gateway integration are outside scope.",
    scope: "This case study focuses on requirement analysis, test design, UAT/validation readiness, traceability, and implementation-gap identification. It does not claim full live-system test execution.",
    cardArtefacts: ["Test Condition Definition", "UAT Design", "Gap Analysis"],
    responsibilities: [
      "Converted business requirements, business rules, and workflow states into testable conditions.",
      "Designed validation scenarios covering positive, negative, boundary, role-based, and exception conditions.",
      "Established traceability between Business Rules, Functional Requirements, Acceptance Criteria, and UAT entries.",
      "Validated order-state transitions and role-based actions against the defined target behaviour.",
      "Compared TARGET requirements with available implementation evidence to identify functional and security-related gaps.",
      "Maintained explicit blocked conditions where expected behaviour was not sufficiently defined."
    ],
    baPipeline: [
      "Requirement Baseline",
      "Business Rule Identification",
      "Test Condition Definition",
      "Test Scenario & UAT Design",
      "Requirement-to-Test Traceability",
      "State & Data Validation",
      "Gap Analysis",
      "Validation Readiness Review"
    ],
    asisNote: "",
    toBeProcess: [
      "Customer\\nBrowse → Cart → Checkout\\n→ COD / QR Payment Simulation",
      "System\\nValidate Address & Distance\\n→ Calculate Fees\\n→ Create Order\\n→ \\\"Chờ xác nhận\\\"",
      "Restaurant\\nPrepare Order\\n→ Mark Ready\\n→ \\\"Đang lấy món\\\"",
      "Shipper\\nAccept Eligible Order\\n→ Pick Up\\n→ \\\"Đang giao\\\"",
      "Customer\\nTrack Status / Location / Route",
      "Shipper\\nComplete Delivery\\n→ \\\"Hoàn thành\\\"",
      "Customer\\nReview"
    ],
    toBeProcessNote: "Upstream prerequisite: mapped Restaurant and Shipper operational capabilities are subject to Administrator approval under BR-PARTNER-01.",
    businessRules: [
      { id: "BR-DEL-01", name: "Maximum Delivery Distance", description: "Rejects checkout if the calculated route distance exceeds 30 km. (Validation condition: ≤ 30 km → allowed, > 30 km → rejected, Boundary: 30 km)" },
      { id: "BR-FEE-01", name: "Distance-Based Delivery Fee", description: "Validate the base fee and additional distance-based charge; fractional-kilometre rounding remains blocked pending clarification." },
      { id: "BR-FEE-02", name: "Time-Based Service Fee", description: "Validate fee behaviour before and from 19:00 onward; authoritative timestamp remains unresolved." },
      { id: "BR-SHIP-02", name: "Delivery Acceptance Eligibility", description: "Acceptance allowed only when the order is in 'Đang lấy món' and remains unassigned." },
      { id: "BR-ORDER-01", name: "Completed Order Review Eligibility", description: "Review allowed only after the order reaches 'Hoàn thành'." }
    ],
    orderLifecycle: {
      states: ["Transition Origin — Order Created\\nNot an Order.Status", "Chờ xác nhận", "Đang lấy món", "Đang giao", "Hoàn thành"],
      transitions: [
        "Valid state transition",
        "Invalid state transition",
        "Incorrect status manipulation",
        "Assignment consistency",
        "Status vs. role permission",
        "State vs. available action"
      ],
      note: "Validation Focus: Checking state transitions against the expected workflow."
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
        { id: "AC-US-SHP-02-04 — Active Delivery Constraint", text: "Reject acceptance when the Shipper already holds a conflicting active delivery." },
        { id: "UAT / Validation Entry", text: "Translating ACs into specific pass/fail executable test scenarios." }
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
      note: "Validation Focus: Verify consistency between business state, persisted data, derived values, and user-visible results."
    },
    gaps: [
      {
        id: "GAP-01",
        title: "Shipper Acceptance Status Enforcement",
        description: "Validation Type: Functional / State Transition Gap",
        target: "Order must be in 'Đang lấy món' state to be accepted.",
        current: "Assignment condition exists, but state prerequisite is not fully enforced."
      },
      {
        id: "GAP-02",
        title: "Credential Protection",
        description: "Validation Type: Security / Implementation Gap",
        target: "Credentials should be securely protected via password hashing.",
        current: "Plaintext password handling and storage identified in implementation evidence."
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
      { competency: "Requirement Analysis", evidence: "Converted functional requirements into explicit testing conditions." },
      { competency: "Test Design", evidence: "Designed scenarios covering boundary, exception, and negative paths." },
      { competency: "State Validation", evidence: "Modelled state transitions for the order lifecycle validation." },
      { competency: "Gap Analysis", evidence: "Compared expected design with implementation to discover functional gaps." }
    ],
    summaryMetrics: [
      { value: "27", label: "Functional Requirements" },
      { value: "7", label: "Business Rules" },
      { value: "50", label: "Acceptance Criteria" },
      { value: "60", label: "Validation Catalogue Entries", subtext: "59 UAT Designs · 1 Non-UAT Technical Validation | 53 Ready · 6 Blocked by TARGET Clarification" }
    ],
    analysisOutputs:
      "Produced a requirement-based validation baseline connecting Requirements → Business Rules → Acceptance Criteria → Test Conditions → UAT Design → Traceability → Gap Findings.",
    lessons: [
      "Clear requirements are the foundation of effective test design.",
      "Business rules should be converted into explicit, testable conditions.",
      "Boundary, negative, exception, and state-transition scenarios are essential for multi-role workflows.",
      "Requirement traceability helps identify coverage gaps and keeps validation aligned with expected behaviour.",
      "Unresolved requirements should be identified as blocked conditions rather than assumed during test design."
    ],
    selectedEvidence:"""

start_str = 'slug: "online-food-delivery-system"'
start_idx = content.find(start_str)
start_idx = content.rfind('  {', 0, start_idx)

end_str = 'selectedEvidence: ['
end_idx = content.find(end_str, start_idx)

# Replace everything from start_idx to end_idx with new_object_start
new_content = content[:start_idx] + new_object_start + content[end_idx + len(end_str):]

with open('src/data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Updated successfully")
