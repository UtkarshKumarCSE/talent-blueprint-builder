
import { JobRole, jobRoles } from "@/data/jobRoles";
import { Course, courses } from "@/data/courses";

export interface UserPreferences {
  skills: string[];
  interests: string[];
  industry: string;
}

export function getJobRecommendations(preferences: UserPreferences): JobRole[] {
  // Filter jobs by industry first
  let recommendedJobs = preferences.industry 
    ? jobRoles.filter(job => job.industries.includes(preferences.industry))
    : [...jobRoles];
  
  // Score each job based on skill and interest matches
  const scoredJobs = recommendedJobs.map(job => {
    let score = 0;
    
    // Add points for each matching skill
    preferences.skills.forEach(skill => {
      if (job.requiredSkills.includes(skill)) {
        score += 2;
      }
    });
    
    // Add points for each matching interest
    preferences.interests.forEach(interest => {
      if (job.relatedInterests.includes(interest)) {
        score += 1.5;
      }
    });
    
    return { job, score };
  });
  
  // Sort by score and get top 5
  return scoredJobs
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(item => item.job);
}

export function getCourseRecommendations(
  preferences: UserPreferences, 
  recommendedJobs: JobRole[]
): Course[] {
  // Get job IDs
  const jobIds = recommendedJobs.map(job => job.id);
  
  // Score each course based on relevance to skills, interests, and recommended jobs
  const scoredCourses = courses.map(course => {
    let score = 0;
    
    // Add points for each matching skill
    preferences.skills.forEach(skill => {
      if (course.relatedSkills.includes(skill)) {
        score += 1;
      }
    });
    
    // Add points for each matching interest
    preferences.interests.forEach(interest => {
      if (course.relatedInterests.includes(interest)) {
        score += 1;
      }
    });
    
    // Significant boost for courses that match recommended jobs
    jobIds.forEach(jobId => {
      if (course.relatedJobs.includes(jobId)) {
        score += 3;
      }
    });
    
    return { course, score };
  });
  
  // Sort by score and get top 5
  return scoredCourses
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(item => item.course);
}
