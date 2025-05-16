
import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-career-blue text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-6 w-6" />
          <h1 className="text-xl font-bold">CareerPathfinder</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-career-light transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-career-light transition-colors">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
