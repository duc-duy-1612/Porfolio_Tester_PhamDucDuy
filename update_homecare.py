import re

with open('src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_object_start = """  {
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
    problem: "A Homecare service involved interactions between three major actors/systems: User → Homecare Platform → External Service Provider (VNPT).\\n\\nThe flow included different authentication states, system hand-offs, asynchronous processing, and multiple exception paths.\\n\\nWithout a consolidated end-to-end flow, it was difficult to clearly identify system boundaries, expected state transitions, failure conditions, and the scenarios that QA needed to validate.",
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
        { title: "Authentication Check", description: "Guest → Login Required | Authenticated → Continue" },
        { title: "External Processing", description: "Request Accepted → Pending | Result Successful → Activate / Update State" },
        { title: "Exception Handling", description: "Result Failed → Error / Recovery | No Response → Timeout / Retry" }
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
      "Integration Testing Requires System-Level Thinking: The full chain must be considered: User → Frontend → Backend → External Service → Response / Callback → Final User State.",
      "Authentication State Is a Test Variable: Guest and authenticated users may enter the same business process but follow different expected paths.",
      "Asynchronous Processes Require State-Based Testing: Testing must distinguish between Requested → Pending → Completed / Failed / Timeout.",
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
  },"""

start_str = 'slug: "homecare-workflow-mapping"'
start_idx = content.find(start_str)
start_idx = content.rfind('  {', 0, start_idx)

end_str = 'slug: "clinical-feature-catalogue"'
end_idx = content.find(end_str, start_idx)
end_idx = content.rfind('  {', start_idx, end_idx)
end_idx = content.rfind(',', start_idx, end_idx) + 1

# Replace everything from start_idx to end_idx with new_object_start
new_content = content[:start_idx] + new_object_start + content[end_idx:]

with open('src/data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Updated Homecare Workflow Mapping successfully")
