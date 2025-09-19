import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navigation = [
    { path: '/', label: 'Who We Are' },
    { path: '/what-we-do', label: 'What We Do?' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-black border-b border-gray-800 z-50">
      <div className="max-w-none mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DS</span>
            </div>
            <Link to="/" className="text-white font-semibold text-lg">
              DataScienceGT
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Talk to an expert →
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;