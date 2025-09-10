import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-lg font-bold mb-4 block hover:text-blue-400 transition-colors">
              DataScienceGT
            </Link>
            <p className="text-gray-400">Delivering enterprise-grade data solutions since 2015.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Data Engineering</li>
              <li className="hover:text-white transition-colors cursor-pointer">Machine Learning</li>
              <li className="hover:text-white transition-colors cursor-pointer">Cloud Migration</li>
              <li className="hover:text-white transition-colors cursor-pointer">Analytics Platforms</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Banking & Finance</li>
              <li className="hover:text-white transition-colors cursor-pointer">Healthcare</li>
              <li className="hover:text-white transition-colors cursor-pointer">Entertainment</li>
              <li className="hover:text-white transition-colors cursor-pointer">Retail</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">info@datasciencegt.com</li>
              <li className="hover:text-white transition-colors cursor-pointer">+1 (555) 123-4567</li>
              <li className="hover:text-white transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-white transition-colors cursor-pointer">Twitter</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DataScienceGT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;