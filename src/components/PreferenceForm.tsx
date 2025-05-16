
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { industries } from '@/data/industries';
import { skills } from '@/data/skills';
import { interests } from '@/data/interests';
import { UserPreferences } from '@/utils/recommendationUtils';
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from 'lucide-react';

interface PreferenceFormProps {
  onSubmit: (preferences: UserPreferences) => void;
}

const PreferenceForm: React.FC<PreferenceFormProps> = ({ onSubmit }) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [skillSearch, setSkillSearch] = useState("");
  const [interestSearch, setInterestSearch] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedSkills.length === 0 || selectedInterests.length === 0 || !selectedIndustry) {
      // Show validation error
      alert("Please fill out all fields");
      return;
    }
    
    onSubmit({
      skills: selectedSkills,
      interests: selectedInterests,
      industry: selectedIndustry
    });
  };
  
  const toggleSkill = (skillId: string) => {
    if (selectedSkills.includes(skillId)) {
      setSelectedSkills(selectedSkills.filter(id => id !== skillId));
    } else if (selectedSkills.length < 5) {
      setSelectedSkills([...selectedSkills, skillId]);
    }
  };
  
  const toggleInterest = (interestId: string) => {
    if (selectedInterests.includes(interestId)) {
      setSelectedInterests(selectedInterests.filter(id => id !== interestId));
    } else if (selectedInterests.length < 5) {
      setSelectedInterests([...selectedInterests, interestId]);
    }
  };
  
  const filteredSkills = skills.filter(skill => 
    skill.name.toLowerCase().includes(skillSearch.toLowerCase())
  );
  
  const filteredInterests = interests.filter(interest => 
    interest.name.toLowerCase().includes(interestSearch.toLowerCase())
  );
  
  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <Label htmlFor="industry" className="text-lg font-medium">Preferred Industry</Label>
          <Select onValueChange={setSelectedIndustry} value={selectedIndustry}>
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Select an industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry.id} value={industry.id}>
                  {industry.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-lg font-medium">Skills (Select up to 5)</Label>
          <div className="mt-2 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for skills..."
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-2">
            {selectedSkills.map(skillId => {
              const skill = skills.find(s => s.id === skillId);
              return skill ? (
                <Badge 
                  key={skill.id} 
                  variant="secondary" 
                  className="bg-career-accent text-white cursor-pointer"
                  onClick={() => toggleSkill(skill.id)}
                >
                  {skill.name} ✕
                </Badge>
              ) : null;
            })}
          </div>
          
          <ScrollArea className="h-40 border rounded-md">
            <div className="p-2">
              {filteredSkills.map((skill) => (
                <div 
                  key={skill.id}
                  className={`p-2 cursor-pointer rounded hover:bg-gray-100 transition-colors ${
                    selectedSkills.includes(skill.id) ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => toggleSkill(skill.id)}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
        
        <div>
          <Label className="text-lg font-medium">Interests (Select up to 5)</Label>
          <div className="mt-2 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for interests..."
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={interestSearch}
                onChange={(e) => setInterestSearch(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-2">
            {selectedInterests.map(interestId => {
              const interest = interests.find(i => i.id === interestId);
              return interest ? (
                <Badge 
                  key={interest.id} 
                  variant="secondary" 
                  className="bg-career-light-blue text-white cursor-pointer"
                  onClick={() => toggleInterest(interest.id)}
                >
                  {interest.name} ✕
                </Badge>
              ) : null;
            })}
          </div>
          
          <ScrollArea className="h-40 border rounded-md">
            <div className="p-2">
              {filteredInterests.map((interest) => (
                <div 
                  key={interest.id}
                  className={`p-2 cursor-pointer rounded hover:bg-gray-100 transition-colors ${
                    selectedInterests.includes(interest.id) ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => toggleInterest(interest.id)}
                >
                  {interest.name}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-career-blue hover:bg-career-light-blue text-white"
      >
        Get Recommendations
      </Button>
    </form>
  );
};

export default PreferenceForm;
