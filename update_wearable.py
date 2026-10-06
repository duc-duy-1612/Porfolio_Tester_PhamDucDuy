import re

with open('src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_object_start = """  {
    slug: "wearable-health-data-integration",
    category: "internship",
    title: "Healthcare Wearable Data Integration",
    subtitle: "Analysed multi-vendor health-data synchronization flows and translated integration requirements into testable connection states, validation criteria, permission dependencies, and exception scenarios across 10 wearable ecosystems.",
    domain: "Healthcare / Data Integration",
    role: "BA & QA Intern — Integration Analysis & Requirement Validation",
    period: "2026",
    type: "Anonymised Internship Case Study",
    tags: [
      "Integration Testing",
      "Requirement Validation",
      "Data Synchronization",
      "Testable Conditions",
      "Permission Validation",
      "Exception Handling"
    ],
    problem: "A healthcare application (mCare) needed to support health-data synchronization from 10 different wearable ecosystems through Android Health Connect.\\n\\nThe existing connection flow was heavily dependent on predefined guidance for a limited number of wearable brands. Different vendors also introduced different connection methods, permissions, synchronization behaviour, supported metrics, and potential failure conditions.\\n\\nThis created a validation challenge: a connection could appear successful from the UI perspective while required permissions or actual data synchronization were still incomplete.",
    summaryMetrics: [
      { value: "10", label: "Wearable Ecosystems" },
      { value: "6", label: "Health Data Types" },
      { value: "4", label: "Permission Layers" },
      { value: "1", label: "Unified Target UX" }
    ],
    overview: "The objective was to analyse the integration behaviour and establish a clear, testable definition of connection success across different vendor scenarios.\\n\\nThe analysis focused on data synchronization flow, vendor compatibility, permission dependencies, connection states, data availability, synchronization delays, exception and failure scenarios, and user-visible validation states.",
    scope: "This public case study has been anonymised. Vendor names, product details, and implementation-specific information are presented only where appropriate for portfolio demonstration.",
    cardArtefacts: [
      "Testable Criteria",
      "Compatibility Matrix",
      "Exception Scenarios"
    ],
    businessProblem: [
      "Different wearable ecosystems use different synchronization architectures, including native integrations, cloud-mediated flows, and third-party bridge applications.",
      "Supported health metrics vary by vendor. A successful connection does not automatically guarantee that every expected metric will be available.",
      "Data synchronization may depend on multiple permission layers: Vendor app permissions, Health Connect Write permission, mCare Read permission, and Android battery settings.",
      "Health data may not appear immediately after connection because vendor applications and cloud services can synchronize data asynchronously."
    ],
    responsibilities: [
      "Researched and mapped end-to-end synchronization flows for 10 wearable ecosystems.",
      "Created a Vendor Compatibility Matrix covering supported metrics, connection methods, permissions, and synchronization conditions.",
      "Identified dependencies that could affect successful connection and data availability.",
      "Analysed positive, negative, exception, and recovery scenarios across different vendor flows.",
      "Evaluated two connection-flow concepts and defined the target Dynamic Selection Flow.",
      "Translated integration requirements into explicit validation conditions for future development and QA testing."
    ],
    testingObjective: {
      description: "A key contribution was converting a generic 'Connected' state into explicit validation criteria. A connection should only be treated as successful when:",
      focusCards: [
        { title: "Read Permission", description: "The mCare application has the required Read permission." },
        { title: "Write Permission", description: "The vendor application has the required Write permission to Health Connect." },
        { title: "Data Retrieved", description: "At least one valid health-data record can be successfully retrieved." }
      ]
    },
    testingApproach: [
      {
        title: "Functional Scenarios",
        flow: ["Connect", "Retrieve Metrics", "Display Status", "Verify Data"],
        description: "Connect a supported wearable successfully, retrieve available metrics, display correct status, and verify synchronized data is reflected."
      },
      {
        title: "Negative Scenarios",
        flow: ["Deny Read/Write", "Incomplete Config", "No Data Available"],
        description: "Deny Read/Write permissions, attempt synchronization before configuration is complete, or attempt validation when no data is available."
      },
      {
        title: "Exception Scenarios",
        flow: ["Sync Delayed", "Background Restricted", "Bridge Unavailable"],
        description: "Vendor synchronization delayed, background synchronization restricted by settings, bridge application required but unavailable, or vendor-specific metric not supported."
      },
      {
        title: "Recovery Scenarios",
        flow: ["Grant Permission", "Re-enable Sync", "Trigger Sync"],
        description: "Grant missing permission after initial failure, re-enable background synchronization, or trigger synchronization again after delayed data availability."
      }
    ],
    deepDive: {
      flow: [
        "Select Vendor",
        "Required Setup Identified",
        "Required Permissions Checked",
        "Synchronization State Checked",
        "Data Availability Checked",
        "Final Connection State"
      ],
      description: [
        "The existing experience provided generic instructions to all users.",
        "A Dynamic Selection Flow was selected to provide vendor-specific guidance and validation steps.",
        "This dynamic flow provides explicit vendor-specific conditions that can be converted into structured test scenarios.",
        "It reduces ambiguity when validating different integration paths."
      ]
    },
    solution: [
      "Positive Path: Select Vendor → Install/Open Required App → Grant Permissions → Vendor Writes to Health Connect → mCare Reads Health Connect → Data Available → Success.",
      "Validation Behaviour: Permission Missing → Request required permission.",
      "Validation Behaviour: Connected but No Data → Inform user that synchronization may still be pending.",
      "Validation Behaviour: Background Sync Restricted → Guide user to update device battery settings."
    ],
    outcome: "Delivered a structured Vendor Compatibility Matrix documenting connection methods, required applications, permission requirements, supported metrics, synchronization characteristics, and expected user guidance. This provided a structured test basis for vendor-specific test scenarios, regression testing, and identifying unsupported conditions.",
    lessons: [
      "Integration Testing Must Consider the Full Data Chain: Testing the UI alone is not sufficient. A failure at any point (Vendor → Cloud → Health Connect → mCare) affects the final result.",
      "'Connected' Is Not Enough: A connection status should be based on observable validation conditions rather than only a UI action or permission state.",
      "Permissions Are Part of the Test Environment: OS-level permissions, Health Connect permissions, and battery settings directly affect test results.",
      "Asynchronous Data Requires Different Expectations: Delayed synchronization should not automatically be treated as a defect. Test scenarios need clear timing assumptions.",
      "Vendor Differences Require Parameterised Testing: Different flows should be validated using consistent test criteria while allowing vendor-specific prerequisites."
    ],
    selectedEvidence:"""

start_str = 'slug: "wearable-health-data-integration"'
start_idx = content.find(start_str)
start_idx = content.rfind('  {', 0, start_idx)

end_str = 'selectedEvidence: ['
end_idx = content.find(end_str, start_idx)

# Replace everything from start_idx to end_idx with new_object_start
new_content = content[:start_idx] + new_object_start + content[end_idx + len(end_str) - 1:]

with open('src/data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Updated Healthcare Wearable Data Integration successfully")
