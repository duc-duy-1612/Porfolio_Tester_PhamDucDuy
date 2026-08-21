import type { Award, Education } from "../types/portfolio";

export const education: Education = {
  degree: "BACHELOR OF ENGINEERING IN INFORMATION TECHNOLOGY",
  university: "Ho Chi Minh City University of Technology",
  period: "2022 - 2026",
  expectedGraduation: "September 2026",
  gpa: "3.4/4.0",
  coursework: [
    "Systems Analysis and Design",
    "Database Systems",
    "Software Engineering",
    "Information Systems",
    "Networking and API-related foundations",
  ],
};

export const awards: Award[] = [
  {
    title: "Distinction Student Award",
    period: "Academic Year 2022-2023",
  },
  {
    title: "Distinction Student Award",
    period: "Academic Year 2023-2024",
  },
];
