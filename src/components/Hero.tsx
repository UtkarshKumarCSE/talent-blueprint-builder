
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <div className="bg-gradient-to-b from-career-blue to-career-light-blue text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Your Perfect Career Path
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Discover job roles and courses tailored to your skills, interests, and industry preferences.
          </p>
          <Button 
            onClick={onGetStarted} 
            size="lg" 
            className="bg-white text-career-blue hover:bg-career-light hover:text-career-blue text-lg px-8 py-6"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
