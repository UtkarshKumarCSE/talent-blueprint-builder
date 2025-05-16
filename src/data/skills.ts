
export interface Skill {
  id: string;
  name: string;
  categories: string[];
}

export const skills: Skill[] = [
  { id: "javascript", name: "JavaScript", categories: ["tech", "programming"] },
  { id: "python", name: "Python", categories: ["tech", "programming", "data"] },
  { id: "react", name: "React", categories: ["tech", "programming", "frontend"] },
  { id: "node", name: "Node.js", categories: ["tech", "programming", "backend"] },
  { id: "data_analysis", name: "Data Analysis", categories: ["tech", "data", "analytics"] },
  { id: "ui_design", name: "UI Design", categories: ["tech", "design"] },
  { id: "project_management", name: "Project Management", categories: ["business", "management"] },
  { id: "marketing", name: "Digital Marketing", categories: ["marketing", "business"] },
  { id: "writing", name: "Content Writing", categories: ["marketing", "creative"] },
  { id: "patient_care", name: "Patient Care", categories: ["healthcare", "medical"] },
  { id: "accounting", name: "Accounting", categories: ["finance", "business"] },
  { id: "teaching", name: "Teaching", categories: ["education"] },
  { id: "sales", name: "Sales", categories: ["retail", "business"] },
  { id: "customer_service", name: "Customer Service", categories: ["retail", "hospitality"] },
  { id: "photography", name: "Photography", categories: ["media", "creative"] },
  { id: "engineering", name: "Mechanical Engineering", categories: ["manufacturing", "engineering"] },
  { id: "leadership", name: "Leadership", categories: ["management", "business"] },
  { id: "communication", name: "Communication", categories: ["business", "soft-skills"] },
  { id: "problem_solving", name: "Problem Solving", categories: ["soft-skills"] },
  { id: "teamwork", name: "Teamwork", categories: ["soft-skills"] },
];
