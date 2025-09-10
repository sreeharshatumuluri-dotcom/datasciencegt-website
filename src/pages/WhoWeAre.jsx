import React from 'react';
import videoSrc from '../videos/data-background.mp4';
import { Typewriter } from 'react-simple-typewriter';

const WhoWeAre = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-16">
      {/* Hero Section with Video Background */}
      <div className="relative overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20 pb-32">
          {/* Status Badge */}
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 text-sm">
              Since 2015 • Pittsburgh HQ • Cloud + ML + Analytics
            </span>
          </div>

          {/* Headline with Typewriter */}
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold leading-tight mb-8">
              End-to-end{' '}
              <span className="text-blue-400">
                <Typewriter
                  words={['data platforms']}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
              <br />
              for decisive teams
            </h1>

            {/* Static supporting paragraph */}
            <p className="text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
              DataScienceGT is a boutique engineering partner delivering credible results at
              enterprise scale. We design and build modern data stacks on AWS, Azure, and GCP
              streaming pipelines with Python &amp; Spark, and analytics on Snowflake &amp; BigQuery
              so your org moves from raw data to insight to impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4 mb-16">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get a proposal
              </button>
              <button className="border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                See case studies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-800 rounded-lg p-6">
              <div className="text-gray-400 text-sm mb-2">Platforms shipped</div>
              <div className="text-4xl font-bold text-white mb-2">60+</div>
            </div>
            <div className="border border-gray-800 rounded-lg p-6">
              <div className="text-gray-400 text-sm mb-2">Latency reduced</div>
              <div className="text-4xl font-bold text-white mb-2 flex items-center">
                <span className="text-2xl mr-2">↓</span>80%
              </div>
            </div>
            <div className="border border-gray-800 rounded-lg p-6">
              <div className="text-gray-400 text-sm mb-2">Clouds</div>
              <div className="text-lg font-semibold text-white">
                AWS • Azure • GCP
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our Approach to Data Engineering
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Like the Gran Turismo standard that inspires our name, we focus on complete
                performance: from neural architecture to predictive analytics, from raw data
                to actionable insights.
              </p>
              <p className="text-gray-400 text-lg mb-8">
                Our strength lies in credibility. For nearly a decade, we've delivered
                AI-powered solutions with the depth of a global firm and the agility of
                a boutique team.
              </p>

              {/* Tech Stack */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                  <span className="text-gray-300">Cloud Platforms</span>
                  <span className="text-blue-400 font-mono text-sm">AWS • Azure • GCP</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                  <span className="text-gray-300">ML/AI Stack</span>
                  <span className="text-green-400 font-mono text-sm">Python • Spark • TensorFlow</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                  <span className="text-gray-300">Data Platforms</span>
                  <span className="text-purple-400 font-mono text-sm">Snowflake • BigQuery</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                  <span className="text-gray-300">Analytics</span>
                  <span className="text-yellow-400 font-mono text-sm">Hadoop • Hive</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Data Science Team"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              {/* Floating metric cards */}
              <div className="absolute -top-4 -right-4 bg-black border border-gray-700 rounded-lg p-4">
                <div className="text-green-400 text-2xl font-bold">99.9%</div>
                <div className="text-gray-400 text-xs">Uptime</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-black border border-gray-700 rounded-lg p-4">
                <div className="text-blue-400 text-2xl font-bold">10x</div>
                <div className="text-gray-400 text-xs">Faster</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Preview */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 text-lg">AI-powered solutions across diverse sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Banking & Finance',
              'Insurance',
              'Healthcare',
              'Entertainment',
              'Social Media',
              'Telecommunications',
              'Retail',
              'Genomics'
            ].map((industry, idx) => (
              <div
                key={idx}
                className="border border-gray-800 rounded-lg p-6 hover:bg-gray-900 transition-colors cursor-pointer"
              >
                <div className="text-white font-medium">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
