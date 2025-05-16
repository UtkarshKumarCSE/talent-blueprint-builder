
export interface Interest {
  id: string;
  name: string;
  categories: string[];
}

export const interests: Interest[] = [
  { id: "coding", name: "Coding", categories: ["tech"] },
  { id: "data_science", name: "Data Science", categories: ["tech", "analytics"] },
  { id: "web_development", name: "Web Development", categories: ["tech"] },
  { id: "mobile_development", name: "Mobile App Development", categories: ["tech"] },
  { id: "ai", name: "Artificial Intelligence", categories: ["tech"] },
  { id: "design", name: "Design", categories: ["creative", "tech"] },
  { id: "writing", name: "Writing", categories: ["creative", "marketing"] },
  { id: "finance", name: "Finance", categories: ["business", "finance"] },
  { id: "healthcare", name: "Healthcare", categories: ["healthcare", "medical"] },
  { id: "teaching", name: "Teaching", categories: ["education"] },
  { id: "research", name: "Research", categories: ["education", "science"] },
  { id: "marketing", name: "Marketing", categories: ["business", "marketing"] },
  { id: "sales", name: "Sales", categories: ["business"] },
  { id: "customer_service", name: "Customer Service", categories: ["business"] },
  { id: "management", name: "Management", categories: ["business"] },
  { id: "entrepreneurship", name: "Entrepreneurship", categories: ["business"] },
  { id: "environment", name: "Environmental Sustainability", categories: ["science"] },
  { id: "media", name: "Media Production", categories: ["creative", "media"] },
  { id: "engineering", name: "Engineering", categories: ["manufacturing", "engineering"] },
  { id: "travel", name: "Travel & Tourism", categories: ["hospitality"] },
];
