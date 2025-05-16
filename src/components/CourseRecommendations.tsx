
import React from 'react';
import { Course } from '@/data/courses';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Clock, BadgeDollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CourseRecommendationsProps {
  courses: Course[];
}

const CourseRecommendations: React.FC<CourseRecommendationsProps> = ({ courses }) => {
  const getProviderColor = (provider: Course['provider']): string => {
    switch (provider) {
      case 'Coursera': return 'bg-blue-600';
      case 'Udemy': return 'bg-purple-600';
      case 'edX': return 'bg-red-600';
      case 'LinkedIn Learning': return 'bg-blue-700';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-6">Recommended Courses</h2>
      
      {courses.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No course recommendations found. Try adjusting your preferences.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col transition-all hover:shadow-lg animate-fade-in">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <Badge className={`${getProviderColor(course.provider)} text-white`}>
                    {course.provider}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{course.duration}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <BadgeDollarSign className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{course.cost}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-career-blue hover:bg-career-light-blue flex items-center gap-2" 
                  asChild
                >
                  <a href={course.link} target="_blank" rel="noopener noreferrer">
                    <BookOpen className="h-4 w-4" />
                    <span>Learn More</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseRecommendations;
