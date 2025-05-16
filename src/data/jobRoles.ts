
export interface JobRole {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  relatedInterests: string[];
  industries: string[];
  avgSalary: string;
  growthOutlook: string;
}

export const jobRoles: JobRole[] = [
  {
    id: "software_dev",
    title: "Software Developer",
    description: "Design, build, and maintain software applications and systems.",
    requiredSkills: ["javascript", "python", "react", "node"],
    relatedInterests: ["coding", "web_development", "mobile_development"],
    industries: ["tech"],
    avgSalary: "$105,000",
    growthOutlook: "Strong growth (22% by 2029)",
  },
  {
    id: "data_analyst",
    title: "Data Analyst",
    description: "Analyze data to help companies make better business decisions.",
    requiredSkills: ["python", "data_analysis", "problem_solving"],
    relatedInterests: ["data_science", "analytics", "research"],
    industries: ["tech", "finance", "healthcare", "retail"],
    avgSalary: "$85,000",
    growthOutlook: "Strong growth (18% by 2029)",
  },
  {
    id: "ux_designer",
    title: "UX Designer",
    description: "Create user-friendly digital experiences and interfaces.",
    requiredSkills: ["ui_design", "communication"],
    relatedInterests: ["design", "web_development"],
    industries: ["tech", "media", "retail"],
    avgSalary: "$95,000",
    growthOutlook: "Above average growth (13% by 2029)",
  },
  {
    id: "product_manager",
    title: "Product Manager",
    description: "Guide product development from conception to launch.",
    requiredSkills: ["project_management", "leadership", "communication"],
    relatedInterests: ["management", "entrepreneurship"],
    industries: ["tech", "retail", "manufacturing"],
    avgSalary: "$115,000",
    growthOutlook: "Strong growth (10% by 2029)",
  },
  {
    id: "digital_marketer",
    title: "Digital Marketing Specialist",
    description: "Create and implement online marketing strategies.",
    requiredSkills: ["marketing", "writing", "communication"],
    relatedInterests: ["marketing", "writing", "media"],
    industries: ["marketing", "retail", "media"],
    avgSalary: "$65,000",
    growthOutlook: "Strong growth (8% by 2029)",
  },
  {
    id: "nurse",
    title: "Registered Nurse",
    description: "Provide and coordinate patient care in various healthcare settings.",
    requiredSkills: ["patient_care", "communication", "teamwork"],
    relatedInterests: ["healthcare", "research"],
    industries: ["healthcare"],
    avgSalary: "$75,000",
    growthOutlook: "Strong growth (12% by 2029)",
  },
  {
    id: "financial_analyst",
    title: "Financial Analyst",
    description: "Guide businesses and individuals in financial decisions.",
    requiredSkills: ["accounting", "data_analysis", "problem_solving"],
    relatedInterests: ["finance", "data_science"],
    industries: ["finance"],
    avgSalary: "$85,000",
    growthOutlook: "Moderate growth (5% by 2029)",
  },
  {
    id: "teacher",
    title: "Teacher",
    description: "Educate students and help them develop knowledge and skills.",
    requiredSkills: ["teaching", "communication", "leadership"],
    relatedInterests: ["teaching", "research"],
    industries: ["education"],
    avgSalary: "$60,000",
    growthOutlook: "Stable growth (4% by 2029)",
  },
  {
    id: "sales_manager",
    title: "Sales Manager",
    description: "Lead sales teams to meet organizational goals.",
    requiredSkills: ["sales", "leadership", "communication"],
    relatedInterests: ["sales", "management"],
    industries: ["retail", "tech", "manufacturing"],
    avgSalary: "$130,000",
    growthOutlook: "Moderate growth (4% by 2029)",
  },
  {
    id: "mechanical_engineer",
    title: "Mechanical Engineer",
    description: "Design and build mechanical systems and devices.",
    requiredSkills: ["engineering", "problem_solving"],
    relatedInterests: ["engineering"],
    industries: ["manufacturing", "construction"],
    avgSalary: "$90,000",
    growthOutlook: "Moderate growth (4% by 2029)",
  },
];
