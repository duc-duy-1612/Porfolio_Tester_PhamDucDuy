const fs = require('fs');
let content = fs.readFileSync('src/data/projects.ts', 'utf8');

content = content.replace(
  'description: "Validate the complete service activation journey from Homecare to VNPT and back, verifying database states."',
  'description: "Designed E2E integration scenarios to validate the complete service activation journey from Homecare to VNPT and back."'
);

fs.writeFileSync('src/data/projects.ts', content, 'utf8');
