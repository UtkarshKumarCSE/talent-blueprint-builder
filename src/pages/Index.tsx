
import React, { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PreferenceForm from '@/components/PreferenceForm';
import JobRecommendations from '@/components/JobRecommendations';
import CourseRecommendations from '@/components/CourseRecommendations';
import { getJobRecommendations, getCourseRecommendations, UserPreferences } from '@/utils/recommendationUtils';
import { JobRole } from '@/data/jobRoles';
import { Course } from '@/data/courses';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [recommendedJobs, setRecommendedJobs] = useState<JobRole[]>([]);
  const [recommendedCourses, setRecommendedCourses] = useState<Course[]>([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const handleGetStarted = () => {
    setShowForm(true);
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 0.75,
        behavior: 'smooth'
      });
    }, 100);
  };
  
  const handleFormSubmit = (preferences: UserPreferences) => {
    // Get job and course recommendations
    const jobs = getJobRecommendations(preferences);
    const courses = getCourseRecommendations(preferences, jobs);
    
    setRecommendedJobs(jobs);
    setRecommendedCourses(courses);
    setHasSubmitted(true);
    
    // Scroll to results
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  const handleReset = () => {
    setHasSubmitted(false);
    setShowForm(true);
    setRecommendedJobs([]);
    setRecommendedCourses([]);
    
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 0.75,
        behavior: 'smooth'
      });
    }, 100);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <Hero onGetStarted={handleGetStarted} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {showForm && !hasSubmitted && (
          <div className="max-w-2xl mx-auto my-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-8">Tell us about yourself</h2>
            <PreferenceForm onSubmit={handleFormSubmit} />
          </div>
        )}
        
        {hasSubmitted && (
          <div ref={resultsRef} className="animate-fade-in">
            <div className="flex justify-center mb-8">
              <Button 
                onClick={handleReset} 
                variant="outline" 
                className="border-career-blue text-career-blue hover:bg-career-blue hover:text-white"
              >
                Start Over
              </Button>
            </div>
            
            <JobRecommendations jobs={recommendedJobs} />
            
            <div className="my-12">
              <CourseRecommendations courses={recommendedCourses} />
            </div>
          </div>
        )}
        
        <section id="about" className="max-w-3xl mx-auto my-16 py-8 px-4 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-6">About CareerPathfinder</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              CareerPathfinder is designed to help you navigate your career journey by providing personalized job role recommendations
              and educational resources tailored to your unique combination of skills, interests, and industry preferences.
            </p>
            <p>
              Our recommendation algorithm analyzes your profile and matches you with potential career paths that align with your
              strengths and passions. We also suggest relevant courses from top educational platforms to help you acquire the
              skills needed to succeed in your chosen field.
            </p>
            <p>
              Whether you're a student exploring career options, a professional looking to pivot into a new industry, or someone
              seeking to enhance your current skillset, CareerPathfinder is here to guide you on your journey.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
