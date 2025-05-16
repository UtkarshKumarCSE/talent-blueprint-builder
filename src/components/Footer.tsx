
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-career-dark text-white p-6 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">CareerPathfinder</h3>
            <p className="text-sm text-gray-300">
              Helping you discover the perfect career path based on your skills and interests.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="/" className="hover:text-career-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-career-accent transition-colors">About</a></li>
              <li><a href="#privacy" className="hover:text-career-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-sm text-gray-300">
              Have questions or feedback?<br />
              <a href="mailto:info@careerpathfinder.com" className="text-career-accent hover:underline">
                info@careerpathfinder.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()} CareerPathfinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
