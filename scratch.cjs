const fs = require('fs');
const content = fs.readFileSync('c:/Users/ACER/Downloads/portfolio-main/portfolio-main/src/data/projects.ts', 'utf-8');
const newObjProps = `    disclosure: "This public visual has been recreated and anonymised. It represents a real-world integration workflow between a healthcare platform (Homecare) and a telecommunications/service provider (VNPT).",
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
        href: "/evidence/TMA/BPMN%20%26%20User%20Flow/VNPT%20-%20Homecare.jpg",
        action: "View Diagram",
        external: true
      }
    ]`;

const lines = content.split('\n');
let start = -1;
let end = -1;
for(let i = 140; i < lines.length; i++) {
  if (lines[i].includes('slug: "homecare-workflow-mapping"')) {
    for(let j = i; j < lines.length; j++) {
      if (lines[j].includes('problem: "A homecare service')) {
        start = j;
      }
      if (start !== -1 && lines[j].includes('  },')) {
        end = j;
        break;
      }
    }
    break;
  }
}
if (start !== -1 && end !== -1) {
  const newContent = [...lines.slice(0, start), newObjProps, ...lines.slice(end)].join('\n');
  fs.writeFileSync('c:/Users/ACER/Downloads/portfolio-main/portfolio-main/src/data/projects.ts', newContent);
  console.log('Replaced lines from ' + start + ' to ' + end);
} else {
  console.log('Could not find bounds: start=' + start + ' end=' + end);
}
