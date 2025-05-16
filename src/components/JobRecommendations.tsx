
import React from 'react';
import { JobRole } from '@/data/jobRoles';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Award, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/skills';

interface JobRecommendationsProps {
  jobs: JobRole[];
}

const JobRecommendations: React.FC<JobRecommendationsProps> = ({ jobs }) => {
  const getSkillName = (skillId: string) => {
    const skill = skills.find(s => s.id === skillId);
    return skill ? skill.name : skillId;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-6">Recommended Job Roles</h2>
      
      {jobs.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No job recommendations found. Try adjusting your preferences.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="transition-all hover:shadow-lg animate-fade-in">
              <CardHeader className="bg-gradient-to-r from-career-blue to-career-light-blue text-white">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  {job.title}
                </CardTitle>
                <CardDescription className="text-career-light opacity-90">
                  {job.industries.join(", ")}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-4 w-4 text-career-light-blue" />
                  <span className="text-sm font-medium">Avg. Salary: {job.avgSalary}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-4 w-4 text-career-light-blue" />
                  <span className="text-sm font-medium">Outlook: {job.growthOutlook}</span>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requiredSkills.slice(0, 4).map((skillId) => (
                      <Badge key={skillId} variant="outline" className="bg-gray-100">
                        {getSkillName(skillId)}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobRecommendations;
