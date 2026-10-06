const fs = require('fs');
let content = fs.readFileSync('src/data/projects.ts', 'utf8');

// Update problem statement
content = content.replace(
  'problem:\n        "A multi-role food delivery workflow connecting Customers, Restaurants, Shippers, and Administrators needed to \\nbe analysed to separate intended TARGET requirements from current physical implementation behaviour.",',
  'problem:\n        "A multi-role food delivery workflow connecting Customers, Restaurants, Shippers, and Administrators lacked a consolidated test basis. The existing system behaviour needed to be analysed and reverse-engineered into structured TARGET requirements to enable thorough UAT validation and gap analysis.",'
);

// Update overview statement
content = content.replace(
  'overview:\n        "This case study reconstructs and verifies the requirements of a multi-role Online Food Delivery System',
  'overview:\n        "This case study demonstrates Requirement-based Testing preparation by reconstructing the test basis of a multi-role Online Food Delivery System'
);

content = content.replace(
  'The analysis separates intended TARGET behaviour from CURRENT implementation evidence and \\nconnects process models, business rules, lifecycle states, requirements, data, gap findings and UAT through controlled \\ntraceability.',
  'The analysis separates intended TARGET behaviour from CURRENT implementation evidence. By extracting process models, business rules, and lifecycle states, I established a traceable foundation to design comprehensive UAT scenarios and identify functional gaps.'
);

content = content.replace(
  'role: "Business Analyst \\uFFFD\\uFFFD\\uFFFD Individual Portfolio Reconstruction & Validation",',
  'role: "QA / Requirement Analyst \\u2014 UAT Validation & Gap Analysis",'
);
content = content.replace(
  'role: "Business Analyst ?" Individual Portfolio Reconstruction & Validation",',
  'role: "QA / Requirement Analyst \\u2014 UAT Validation & Gap Analysis",'
);

fs.writeFileSync('src/data/projects.ts', content, 'utf8');
