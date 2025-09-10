import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "DataScienceGT transformed our entire data infrastructure. Their AI-powered cloud migration saved us months of development time.",
      author: "Sarah Johnson",
      position: "CTO, Fortune 500 Financial Services",
      rating: 5,
      metric: "99.9% uptime achieved",
      category: "Infrastructure",
      color: "blue"
    },
    {
      quote: "The real-time analytics platform they built has revolutionized how we make business decisions. Truly exceptional ML engineering.",
      author: "Michael Chen",
      position: "VP of Data, Major Insurance Company",
      rating: 5,
      metric: "10x faster queries",
      category: "Analytics",
      color: "green"
    },
    {
      quote: "Their team's depth in both data science and AI engineering is rare. They deliver enterprise-grade solutions with startup agility.",
      author: "Lisa Rodriguez",
      position: "Head of Analytics, Streaming Platform",
      rating: 5,
      metric: "50TB daily processing",
      category: "Engineering",
      color: "purple"
    },
    {
      quote: "The machine learning models they developed have increased our customer retention by 23%. Outstanding predictive accuracy.",
      author: "David Kim",
      position: "Director of Analytics, E-commerce Platform",
      rating: 5,
      metric: "95% model accuracy",
      category: "ML Models",
      color: "pink"
    },
    {
      quote: "DataScienceGT's approach to data governance helped us achieve compliance while improving operational efficiency by 40%.",
      author: "Jennifer Martinez",
      position: "Chief Data Officer, Healthcare System",
      rating: 5,
      metric: "100% compliance rate",
      category: "Governance",
      color: "emerald"
    },
    {
      quote: "Their predictive analytics solution has given us a competitive edge in forecasting market trends with unprecedented precision.",
      author: "Robert Thompson",
      position: "VP Strategy, Telecommunications Company",
      rating: 5,
      metric: "30% churn reduction",
      category: "Predictions",
      color: "cyan"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'from-blue-50 to-cyan-50',
        border: 'border-blue-200',
        accent: 'bg-blue-500',
        text: 'text-blue-600'
      },
      green: {
        bg: 'from-green-50 to-emerald-50',
        border: 'border-green-200',
        accent: 'bg-green-500',
        text: 'text-green-600'
      },
      purple: {
        bg: 'from-purple-50 to-pink-50',
        border: 'border-purple-200',
        accent: 'bg-purple-500',
        text: 'text-purple-600'
      },
      pink: {
        bg: 'from-pink-50 to-rose-50',
        border: 'border-pink-200',
        accent: 'bg-pink-500',
        text: 'text-pink-600'
      },
      emerald: {
        bg: 'from-emerald-50 to-teal-50',
        border: 'border-emerald-200',
        accent: 'bg-emerald-500',
        text: 'text-emerald-600'
      },
      cyan: {
        bg: 'from-cyan-50 to-blue-50',
        border: 'border-cyan-200',
        accent: 'bg-cyan-500',
        text: 'text-cyan-600'
      }
    };
    return colors[color];
  };

  return (
    <div className="space-y-12 pt-16 bg-black text-white min-h-screen">
      {/* Enhanced Testimonials Header */}
      <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 overflow-hidden">
        {/* Neural Network Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Neural network nodes */}
            <circle cx="10%" cy="20%" r="4" fill="#F59E0B" className="animate-pulse" />
            <circle cx="30%" cy="15%" r="3" fill="#10B981" className="animate-pulse" />
            <circle cx="20%" cy="40%" r="3.5" fill="#3B82F6" className="animate-pulse" />
            <circle cx="50%" cy="25%" r="4" fill="#8B5CF6" className="animate-pulse" />
            <circle cx="70%" cy="30%" r="3" fill="#06B6D4" className="animate-pulse" />
            <circle cx="80%" cy="15%" r="3.5" fill="#EF4444" className="animate-pulse" />
            <circle cx="90%" cy="35%" r="3" fill="#F59E0B" className="animate-pulse" />
            
            <circle cx="15%" cy="70%" r="3" fill="#10B981" className="animate-pulse" />
            <circle cx="35%" cy="80%" r="4" fill="#3B82F6" className="animate-pulse" />
            <circle cx="55%" cy="75%" r="3.5" fill="#8B5CF6" className="animate-pulse" />
            <circle cx="75%" cy="80%" r="3" fill="#06B6D4" className="animate-pulse" />
            <circle cx="85%" cy="70%" r="3.5" fill="#EF4444" className="animate-pulse" />
            
            {/* Connection lines */}
            <line x1="10%" y1="20%" x2="20%" y2="40%" stroke="#F59E0B" strokeWidth="1" opacity="0.3" />
            <line x1="30%" y1="15%" x2="50%" y2="25%" stroke="#10B981" strokeWidth="1" opacity="0.3" />
            <line x1="50%" y1="25%" x2="70%" y2="30%" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
            <line x1="70%" y1="30%" x2="90%" y2="35%" stroke="#06B6D4" strokeWidth="1" opacity="0.3" />
            
            <line x1="20%" y1="40%" x2="35%" y2="80%" stroke="#3B82F6" strokeWidth="1" opacity="0.3" />
            <line x1="50%" y1="25%" x2="55%" y2="75%" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
            <line x1="70%" y1="30%" x2="75%" y2="80%" stroke="#06B6D4" strokeWidth="1" opacity="0.3" />
          </svg>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-mono text-green-300">CLIENT_FEEDBACK.validated</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-100 to-cyan-100 bg-clip-text text-transparent">
            What Others Say About Us
          </h1>
          <p className="text-xl text-purple-100">Trusted by industry leaders worldwide for AI-driven solutions</p>
        </div>
      </div>

      {/* Enhanced Testimonials Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const colorClasses = getColorClasses(testimonial.color);
            
            return (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg border ${colorClasses.border} hover:shadow-2xl transition-all duration-500 group overflow-hidden`}>
                {/* Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg} opacity-30`}></div>
                
                {/* Data Visualization Corner */}
                <div className="absolute top-4 right-4 opacity-20">
                  <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="8" width="2" height="4" fill={colorClasses.accent.replace('bg-', '#')} />
                    <rect x="4" y="6" width="2" height="6" fill={colorClasses.accent.replace('bg-', '#')} />
                    <rect x="7" y="4" width="2" height="8" fill={colorClasses.accent.replace('bg-', '#')} />
                    <rect x="10" y="7" width="2" height="5" fill={colorClasses.accent.replace('bg-', '#')} />
                  </svg>
                </div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${colorClasses.bg} px-3 py-1 rounded-full border ${colorClasses.border}`}>
                  <span className={`text-xs font-mono ${colorClasses.text} uppercase tracking-wide`}>
                    {testimonial.category}
                  </span>
                </div>
                
                <div className="relative p-8 pt-16">
                  {/* Performance Metric */}
                  <div className="flex items-center mb-4">
                    <div className={`w-3 h-3 ${colorClasses.accent} rounded-full mr-2 animate-pulse`}></div>
                    <span className={`text-sm font-bold ${colorClasses.text} font-mono`}>
                      {testimonial.metric}
                    </span>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex mb-4">
                    <div className="text-yellow-500 font-bold text-lg">★★★★★</div>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI-Powered Client Success Metrics */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">AI-Powered Results</h2>
            <p className="text-lg text-gray-300">Real metrics from our data science implementations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { metric: "99.9%", label: "Model Accuracy", sublabel: "Average across deployments", color: "cyan" },
              { metric: "10x", label: "Processing Speed", sublabel: "Performance improvement", color: "green" },
              { metric: "50TB", label: "Daily Processing", sublabel: "Data pipeline capacity", color: "purple" },
              { metric: "95%", label: "Client Retention", sublabel: "Long-term partnerships", color: "yellow" }
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <div className="relative mb-4">
                  <div className={`text-4xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                    {stat.metric}
                  </div>
                  <div className={`absolute -top-2 -right-2 w-3 h-3 bg-${stat.color}-400 rounded-full animate-ping group-hover:animate-pulse`}></div>
                </div>
                <div className={`text-${stat.color}-100 font-medium mb-1`}>{stat.label}</div>
                <div className={`text-xs text-${stat.color}-300 font-mono`}>{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Client Logos Section */}
      <div className="bg-gray-50 py-16 relative overflow-hidden">
        {/* Background Tech Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-10 grid-rows-6 gap-2 w-full h-full p-8">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="bg-gray-400 rounded-sm animate-pulse" 
                   style={{animationDelay: `${i * 0.1}s`, height: `${20 + Math.random() * 60}%`}}></div>
            ))}
          </div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Trusted by Leading Companies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: "Fortune 500 Bank", tech: "ML Platform", color: "blue" },
              { name: "Global Insurer", tech: "AI Analytics", color: "green" },
              { name: "Streaming Leader", tech: "Big Data", color: "purple" },
              { name: "Healthcare System", tech: "Predictive Models", color: "red" }
            ].map((client, idx) => (
              <div key={idx} className="group">
                <div className={`bg-white p-6 rounded-lg shadow-sm border-l-4 border-${client.color}-400 hover:shadow-lg transition-all duration-300`}>
                  <div className="text-lg font-bold text-gray-700 mb-2">{client.name}</div>
                  <div className={`text-sm text-${client.color}-600 font-mono`}>{client.tech}</div>
                  <div className="flex justify-center mt-3">
                    <div className={`w-8 h-1 bg-gradient-to-r from-${client.color}-400 to-${client.color}-600 rounded-full`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="relative bg-gradient-to-r from-blue-50 to-cyan-50 py-16 overflow-hidden">
        {/* Circuit Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="#3B82F6" />
                <circle cx="80" cy="20" r="2" fill="#06B6D4" />
                <circle cx="50" cy="50" r="3" fill="#8B5CF6" />
                <circle cx="20" cy="80" r="2" fill="#10B981" />
                <circle cx="80" cy="80" r="2" fill="#F59E0B" />
                <line x1="20" y1="20" x2="50" y2="50" stroke="#3B82F6" strokeWidth="1" />
                <line x1="80" y1="20" x2="50" y2="50" stroke="#06B6D4" strokeWidth="1" />
                <line x1="50" y1="50" x2="20" y2="80" stroke="#8B5CF6" strokeWidth="1" />
                <line x1="50" y1="50" x2="80" y2="80" stroke="#10B981" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Transform Your Data?</h2>
          <p className="text-lg text-gray-700 mb-8">Join the companies that trust DataScienceGT with their most critical AI and machine learning challenges.</p>
          
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              Start Your AI Project →
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              Schedule ML Consultation
            </button>
          </div>
          
          <div className="mt-8 flex justify-center items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              <span>Custom AI solutions</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
              <span>Enterprise-ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;