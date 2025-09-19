import React from 'react';

const WhatWeDo = () => {
  const industries = [
    {
      title: 'Banking & Finance',
      description: 'We built machine learning platforms in Azure ML that automated decision pipelines for major U.S. banks. The result is real-time modeling, governance, and insights at scale.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['Azure ML', 'Python', 'Real-time Analytics'],
      metrics: ['99.9%', 'Uptime'],
      color: 'blue',
      pattern: 'financial'
    },
    {
      title: 'Insurance',
      description: 'We transformed legacy SQL Server systems into cloud-native Snowflake environments on AWS. With predictive models and CI/CD automation, insurers can now adapt and act with confidence.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['Snowflake', 'AWS', 'CI/CD Pipelines'],
      metrics: ['10x', 'Faster'],
      color: 'green',
      pattern: 'security'
    },
    {
      title: 'Social Media & Digital Advertising',
      description: 'Behind one of the world’s largest platforms, we engineered big-data pipelines in Python, Spark, and Presto. These systems optimize campaigns for millions of businesses every day. By adding predictive and generative models, we made targeting smarter and experiences more relevant.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80',
      technologies: ['Python', 'Spark', 'Presto', 'Big Data'],
      metrics: ['1M+', 'Daily Users'],
      color: 'purple',
      pattern: 'network'
    },
    {
      title: 'Entertainment & Streaming',
      description: 'For a global streaming leader, we designed analytics ecosystems with Hadoop, Hive, PySpark, and Snowflake. Predictive analytics now help teams measure performance across markets and anticipate what resonates with audiences.',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      technologies: ['Hadoop', 'Hive', 'PySpark', 'Snowflake'],
      metrics: ['50TB', 'Processed'],
      color: 'pink',
      pattern: 'streaming'
    },
    {
      title: 'Wellness & Consumer Brands',
      description: 'We unified fragmented membership data using SQL, R, and MongoDB. Insights pipelines in BigQuery now drive predictive engagement models, helping wellness leaders turn health signals into better member experiences.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['SQL', 'R', 'MongoDB', 'BigQuery'],
      metrics: ['23%', 'Engagement'],
      color: 'emerald',
      pattern: 'health'
    },
    {
      title: 'Healthcare & Genomics',
      description: 'We integrated health records and genomics data into structured cloud databases. AI-powered dashboards and predictive workflows in SQL and Python gave clinicians tools that directly improve patient outcomes.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80',
      technologies: ['R Shiny', 'ETL', 'SQL', 'Python'],
      metrics: ['95%', 'Accuracy'],
      color: 'red',
      pattern: 'medical'
    },
    {
      title: 'Telecommunications',
      description: 'We developed churn prediction models using Hadoop/Spark and collaborative filtering. Generative AI now helps carriers design smarter offers and improve customer experiences at national scale.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      technologies: ['Hadoop', 'Spark', 'Predictive Modeling'],
      metrics: ['30%', 'Churn Reduction'],
      color: 'cyan',
      pattern: 'telecom'
    },
    {
      title: 'Retail & Industrial Supply',
      description: 'We delivered recommendation engines with Spark MLlib and association rule mining. By adding predictive and generative models, a Fortune 500 supplier transformed personalization in e-commerce and direct sales.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['Spark MLlib', 'Association Rules', 'ML'],
      metrics: ['40%', 'Revenue Lift'],
      color: 'yellow',
      pattern: 'retail'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'from-blue-100 to-cyan-100',
        border: 'border-blue-200',
        text: 'text-blue-800',
        accent: 'bg-blue-500',
        metric: 'text-blue-600'
      },
      green: {
        bg: 'from-green-100 to-emerald-100',
        border: 'border-green-200',
        text: 'text-green-800',
        accent: 'bg-green-500',
        metric: 'text-green-600'
      },
      purple: {
        bg: 'from-purple-100 to-pink-100',
        border: 'border-purple-200',
        text: 'text-purple-800',
        accent: 'bg-purple-500',
        metric: 'text-purple-600'
      },
      pink: {
        bg: 'from-pink-100 to-rose-100',
        border: 'border-pink-200',
        text: 'text-pink-800',
        accent: 'bg-pink-500',
        metric: 'text-pink-600'
      },
      emerald: {
        bg: 'from-emerald-100 to-teal-100',
        border: 'border-emerald-200',
        text: 'text-emerald-800',
        accent: 'bg-emerald-500',
        metric: 'text-emerald-600'
      },
      red: {
        bg: 'from-red-100 to-pink-100',
        border: 'border-red-200',
        text: 'text-red-800',
        accent: 'bg-red-500',
        metric: 'text-red-600'
      },
      cyan: {
        bg: 'from-cyan-100 to-blue-100',
        border: 'border-cyan-200',
        text: 'text-cyan-800',
        accent: 'bg-cyan-500',
        metric: 'text-cyan-600'
      },
      yellow: {
        bg: 'from-yellow-100 to-orange-100',
        border: 'border-yellow-200',
        text: 'text-yellow-800',
        accent: 'bg-yellow-500',
        metric: 'text-yellow-600'
      }
    };
    return colors[color];
  };

  return (
    <div className="space-y-12 pt-16 bg-black text-white min-h-screen">
      {/* Enhanced Industries Header */}
      <div className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white py-16 overflow-hidden">
        {/* Matrix-like Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-8 gap-1 w-full h-full p-4">
            {[...Array(96)].map((_, i) => (
              <div key={i} className="bg-green-400 text-xs flex items-center justify-center font-mono"
                   style={{animationDelay: `${i * 0.05}s`}}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="flex space-x-2 mr-4">
              <div className="w-2 h-8 bg-cyan-400 rounded animate-pulse"></div>
              <div className="w-2 h-12 bg-green-400 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-6 bg-blue-400 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
              <div className="w-2 h-10 bg-purple-400 rounded animate-pulse" style={{animationDelay: '0.6s'}}></div>
            </div>
            <span className="text-sm font-mono text-cyan-300">INDUSTRY SOLUTIONS</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-green-100 bg-clip-text text-transparent">
            Our Work Across Industries
          </h1>
          <p className="text-xl text-gray-300">Think of us as the Swiss Army Knife for data. From data architecture to
             engineering, from analytics to predictive modeling, from generative AI to automation, we cover the full 
             spectrum. What sets us apart is how we bring the right tools together to address your challenge and deliver
              results that last.</p>
        </div>
      </div>

      {/* Enhanced Industries Grid */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-16">
          {industries.map((industry, index) => {
            const colorClasses = getColorClasses(industry.color);
            
            return (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} group`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className={`w-4 h-4 ${colorClasses.accent} rounded-full mr-3 animate-pulse`}></div>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wide">
                      {industry.pattern} Solutions
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{industry.description}</p>
                  
                  {/* Performance Metric */}
                  <div className={`inline-flex items-center bg-gradient-to-r ${colorClasses.bg} px-4 py-2 rounded-lg ${colorClasses.border} border mb-4`}>
                    <div className={`w-2 h-2 ${colorClasses.accent} rounded-full mr-2 animate-pulse`}></div>
                    <span className={`text-2xl font-bold ${colorClasses.metric} mr-2`}>
                      {industry.metrics[0]}
                    </span>
                    <span className={`text-sm ${colorClasses.text} font-medium`}>
                      {industry.metrics[1]}
                    </span>
                  </div>
                  
                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2">
                    {industry.technologies.map((tech, techIndex) => (
                      <span key={techIndex} 
                            className={`bg-gradient-to-r ${colorClasses.bg} ${colorClasses.text} px-3 py-2 rounded-full text-sm font-medium border ${colorClasses.border} hover:shadow-md transition-all duration-300`}>
                        <span className="font-mono text-xs mr-1">&gt;</span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className={`relative bg-gradient-to-br ${colorClasses.bg} p-8 rounded-xl border ${colorClasses.border} overflow-hidden group-hover:shadow-xl transition-all duration-500`}>
                    {/* Data Visualization Overlay */}
                    <div className="absolute inset-4 opacity-20">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        {/* Dynamic data points */}
                        <circle cx="15%" cy="20%" r="2" fill={colorClasses.accent.replace('bg-', '#')} className="animate-pulse" />
                        <circle cx="85%" cy="30%" r="3" fill={colorClasses.accent.replace('bg-', '#')} className="animate-pulse" />
                        <circle cx="60%" cy="60%" r="2.5" fill={colorClasses.accent.replace('bg-', '#')} className="animate-pulse" />
                        <circle cx="25%" cy="75%" r="2" fill={colorClasses.accent.replace('bg-', '#')} className="animate-pulse" />
                        <circle cx="80%" cy="80%" r="3" fill={colorClasses.accent.replace('bg-', '#')} className="animate-pulse" />
                        
                        {/* Connection lines */}
                        <path d="M 15 20 Q 50 30 85 30" stroke={colorClasses.accent.replace('bg-', '#')} strokeWidth="1" fill="none" opacity="0.4" />
                        <path d="M 60 60 L 25 75" stroke={colorClasses.accent.replace('bg-', '#')} strokeWidth="1" opacity="0.4" />
                        <path d="M 60 60 L 80 80" stroke={colorClasses.accent.replace('bg-', '#')} strokeWidth="1" opacity="0.4" />
                        
                        {/* Data bars */}
                        <rect x="10%" y="85%" width="8" height="10%" fill={colorClasses.accent.replace('bg-', '#')} opacity="0.3" />
                        <rect x="20%" y="75%" width="8" height="20%" fill={colorClasses.accent.replace('bg-', '#')} opacity="0.3" />
                        <rect x="30%" y="80%" width="8" height="15%" fill={colorClasses.accent.replace('bg-', '#')} opacity="0.3" />
                      </svg>
                    </div>
                    
                    {/* Code-like Pattern */}
                    <div className="absolute top-4 right-4 opacity-10">
                      <div className="font-mono text-xs space-y-1">
                        <div className="flex space-x-1">
                          <span className={colorClasses.accent.replace('bg-', 'text-')}>if</span>
                          <span>data.accuracy</span>
                          <span className={colorClasses.accent.replace('bg-', 'text-')}>&gt;</span>
                          <span>0.95:</span>
                        </div>
                        <div className="ml-4 flex space-x-1">
                          <span className={colorClasses.accent.replace('bg-', 'text-')}>deploy</span>
                          <span>model()</span>
                        </div>
                      </div>
                    </div>
                    
                    <img src={industry.image} 
                         alt={industry.title} 
                         className="relative w-full rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI/ML Process Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI/ML Process</h2>
            <p className="text-lg text-gray-600">From data ingestion to model deployment</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Data Ingestion', desc: 'Multi-source data pipeline setup', icon: '📊' },
              { step: '02', title: 'Model Training', desc: 'Advanced ML algorithm development', icon: '🤖' },
              { step: '03', title: 'Validation', desc: 'Rigorous testing and optimization', icon: '✅' },
              { step: '04', title: 'Deployment', desc: 'Production-ready scaling', icon: '🚀' }
            ].map((process, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-indigo-600 font-mono">{process.step}</span>
                    <div className="text-2xl animate-bounce">{process.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.desc}</p>
                </div>
                
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-cyan-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;