import re

with open('src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_object_start = """  {
    slug: "web-functional-testing",
    category: "academic",
    title: "Web Functional Testing & Selenium IDE Automation",
    subtitle: "Designed and executed 30 functional test cases across core e-commerce workflows, combining manual testing with Selenium IDE-assisted validation of dynamic content, business rules, calculations, state persistence, and cross-page data consistency.",
    domain: "E-commerce / Software Quality Assurance",
    role: "Software Tester — Academic Project",
    period: "January 2026 – April 2026",
    type: "Academic Software Testing Case Study",
    tags: [
      "30 Test Cases",
      "Functional Testing",
      "Selenium IDE",
      "Business Rule Validation",
      "Data Validation",
      "Requirement-Based Testing"
    ],
    problem: "The project focused on validating critical e-commerce workflows on the TNC Store website through a structured 30-test-case functional test suite.\\n\\nThe testing scope covered authentication, product discovery, shopping-cart behaviour, form validation, dynamic pricing, discount calculations, session persistence, and product-data consistency.\\n\\nThe main objective was to compare expected behaviour against actual system behaviour and identify functional, validation, calculation, state, and data-consistency issues.",
    overview: "The project combined manual functional testing with Selenium IDE-assisted automation.\\n\\nIn addition to standard functional scenarios, the testing approach covered more analytical validation involving:\\n- Dynamic product lists\\n- Independent calculation of expected values\\n- Business-rule validation\\n- Cross-session state persistence\\n- Cross-page data consistency\\n- Data extraction and normalization",
    disclosure: "This was an academic software testing exercise conducted against a publicly accessible e-commerce website and was not commissioned by or affiliated with TNC Store.",
    cardArtefacts: [
      "30 Functional Test Cases",
      "Selenium IDE Scenarios",
      "Test Execution Evidence",
    ],
    testingObjective: {
      description: "The objective was to determine whether critical e-commerce functions behaved consistently with their expected results across normal, negative, validation, and data-dependent scenarios.",
      focusCards: [
        {
          title: "Functional Correctness",
          description: "Validate expected behaviour across core user workflows."
        },
        {
          title: "Negative & Edge-Case Testing",
          description: "Verify failure conditions, validation rules, and boundary-related behaviour."
        },
        {
          title: "Business Rule Validation",
          description: "Independently verify pricing, discount, quantity, and calculation logic."
        },
        {
          title: "Data Consistency",
          description: "Check whether information remained consistent across pages, sessions, and different representations."
        },
        {
          title: "State Validation",
          description: "Verify that application state and user data persisted correctly across workflow transitions."
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
      "Designed 30 functional test cases covering positive, negative, validation, and edge-case scenarios.",
      "Defined test scenarios, execution steps, expected results, and observable validation criteria.",
      "Executed test cases and compared actual results against expected behaviour.",
      "Applied Selenium IDE-based browser automation to validate dynamic lists, search/filter behaviour, calculations, and state-dependent workflows.",
      "Independently derived expected values to validate cart totals, pricing, and discount calculations.",
      "Validated cross-session persistence and cross-page product-data consistency through extraction, normalization, and comparison.",
      "Recorded observed mismatches where actual behaviour did not satisfy the defined validation criteria."
    ],
    testingApproach: [
      {
        title: "01 — Test Design",
        flow: [
          "Expected Behaviour",
          "Test Scenario",
          "Initial State / Test Data",
          "Test Steps",
          "Expected Result"
        ],
        description: "Each test case defined the behaviour under validation, execution sequence, and expected observable result."
      },
      {
        title: "02 — Test Execution & Validation",
        flow: [
          "Browser Interaction",
          "Actual Result",
          "Compare",
          "Pass / Fail",
          "Investigation"
        ],
        description: "Execution focused on whether the system produced the expected outcome rather than simply confirming that an interaction completed."
      },
      {
        title: "03 — Automated Validation",
        flow: [
          "Iterate",
          "Extract",
          "Normalize / Calculate",
          "Compare",
          "Result"
        ],
        description: "Analytical scenarios required iterating through dynamic content, extracting values, normalizing data, or independently calculating expected results before comparison."
      }
    ],
    selectedTestCases: {
      subtitle: "Representative evidence from the complete 30-test-case suite.",
      cases: [
        {
          id: "TC-05",
          name: "Product Sorting by Price — Low to High",
          focus: "Result ordering",
          validationLogic: "Load the product list and sequentially compare each displayed price with the next value.",
          demonstrates: "Dynamic-list validation and ordered-data comparison."
        },
        {
          id: "TC-06",
          name: "Product Filtering by Brand",
          focus: "Filter accuracy",
          validationLogic: "Apply a brand filter, iterate through displayed products, and verify that each result matches the selected brand.",
          demonstrates: "Result-set validation and detection of unrelated items."
        },
        {
          id: "TC-07",
          name: "Product Count Consistency",
          focus: "Catalogue completeness",
          validationLogic: "Extract the expected product count, load remaining items, and compare the final rendered count against the advertised value.",
          demonstrates: "Expected-vs-actual comparison across dynamically loaded content."
        },
        {
          id: "TC-16",
          name: "Mandatory Field Validation on Product Review Form",
          focus: "Negative Testing",
          validationLogic: "Submit the review form with required inputs missing and verify that submission is blocked with validation feedback.",
          demonstrates: "Failure-path and validation-rule testing."
        },
        {
          id: "TC-20",
          name: "Dynamic Price Deduction — PC Builder",
          focus: "Calculation Validation",
          validationLogic: "Record initial total and removed-item price, then verify: New Total = Initial Total − Removed Item Price",
          demonstrates: "Independent mathematical verification of dynamic UI calculations."
        },
        {
          id: "TC-24",
          name: "Discount Logic Validation",
          focus: "Business Rule Validation",
          validationLogic: "Extract original price, discounted price, and displayed discount percentage. Independently calculate the expected discount and compare it with the website value.",
          demonstrates: "Business-rule and numerical consistency validation."
        },
        {
          id: "TC-29",
          name: "Shopping Cart Data Retained After Authentication",
          focus: "State Persistence",
          validationLogic: "Add a product during a guest session, authenticate, and verify that the same product remains in the authenticated cart.",
          demonstrates: "Cross-state persistence and guest-to-authenticated workflow validation."
        },
        {
          id: "TC-30",
          name: "Data Integrity Validation — Product Name vs Detailed Specifications",
          focus: "Data Consistency",
          validationLogic: "Iterate through product pages, extract core specifications from product names, normalize values, and compare them against detailed specification content.",
          demonstrates: "Automated data extraction, Regex-based parsing, normalization, and Pass / Fail / Skip classification."
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
        "Iterated across multiple product pages.",
        "Handled missing specification tables.",
        "Extracted core attributes such as RAM, storage, and GPU series.",
        "Used Regex-based parsing to extract relevant values.",
        "Removed measurement units and formatting differences.",
        "Converted values into comparable representations.",
        "Compared normalized values across different page sections.",
        "Classified the result as Pass, Fail, or Skip."
      ]
    },
    automationStrategy: {
      description: "Selected workflows were automated using Selenium IDE to validate dynamic lists, search and filtering behaviour, calculations, session persistence, and data consistency. Rather than relying only on visible UI outcomes, the automated scenarios extracted actual values and compared them with independently derived expected results.",
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
          evidence: "Evidence: TC-29 — Shopping Cart Data Retained After Authentication"
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
          evidence: "Evidence: TC-30 — Product Name vs Detailed Specifications"
        }
      ]
    },
    testingChallenges: [
      {
        title: "Dynamic Calculations",
        description: "Cart totals, component prices, and discount values required independent expected-value calculations."
      },
      {
        title: "Dynamic Content",
        description: "Search, filtering, and product-count scenarios required iteration across dynamically loaded lists."
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
      description: "This project strengthened my ability to convert expected behaviour into observable and testable conditions.",
      links: [
        {
          title: "Testable Behaviour",
          description: "Expected outcomes should be clear and objectively verifiable."
        },
        {
          title: "Negative Testing",
          description: "Validation should include failure conditions, not only successful flows."
        },
        {
          title: "Business Rule Validation",
          description: "Calculations, limits, and pricing rules should be independently verified where appropriate."
        },
        {
          title: "State Validation",
          description: "Changes in authentication or workflow state should not introduce unexpected data loss or inconsistency."
        },
        {
          title: "Data Validation",
          description: "Information displayed across different pages or representations should remain consistent."
        },
        {
          title: "UAT Readiness",
          description: "Well-structured scenarios provide a stronger basis for business validation and user acceptance testing."
        }
      ]
    },
    selectedEvidence:"""

start_str = 'slug: "web-functional-testing"'
start_idx = content.find(start_str)
start_idx = content.rfind('  {', 0, start_idx)

end_str = 'selectedEvidence: ['
end_idx = content.find(end_str, start_idx)

# Replace everything from start_idx to end_idx with new_object_start
new_content = content[:start_idx] + new_object_start + content[end_idx + len(end_str) - 1:]

with open('src/data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Updated TNC Web Functional Testing successfully")
