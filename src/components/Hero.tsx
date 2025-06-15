import React from 'react';
import { TrendingUp, Target, Zap, Activity, Cpu, Database } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-industrial-50 via-industrial-100 to-tech-100 py-20 sm:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-circuit-pattern bg-circuit opacity-20"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-electric-500 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-secondary-500 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent-600 rounded-full animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-electric-500/20 to-secondary-500/20 border border-electric-500/30 px-6 py-3 rounded-full text-electric-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <Activity className="h-4 w-4 mr-2 animate-pulse" />
            First Principles Approach to Industrial AI
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-tech-900">Industrial AI That</span>
            <br />
            <span className="bg-gradient-to-r from-electric-400 via-secondary-500 to-accent-500 bg-clip-text text-transparent animate-pulse-slow">
              Drives Decisions
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-tech-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Beyond dashboards. Beyond hype. Discover industrial AI applications that 
            fundamentally transform how critical decisions are made in manufacturing, 
            energy, and heavy industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-gradient-to-r from-electric-500 to-secondary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-electric-600 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-electric-500/25">
              Explore Case Studies
            </button>
            <button className="border border-tech-400 text-tech-800 px-8 py-4 rounded-lg font-semibold hover:bg-tech-100 hover:border-tech-500 transition-all duration-300">
              Learn Our Philosophy
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-industrial-200 to-tech-200 border border-electric-500/20 rounded-xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:border-electric-500/40 transition-all duration-300">
              <Target className="h-10 w-10 text-electric-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold text-tech-900 mb-3">Decision Automation</h3>
            <p className="text-tech-700 leading-relaxed">
              AI systems that replace human judgment in critical industrial processes, 
              not just data visualization tools.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-industrial-200 to-tech-200 border border-secondary-500/20 rounded-xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:border-secondary-500/40 transition-all duration-300">
              <Database className="h-10 w-10 text-secondary-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold text-tech-900 mb-3">Measurable Impact</h3>
            <p className="text-tech-700 leading-relaxed">
              Quantified business results from AI-driven decisions with clear ROI 
              and operational improvements.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-industrial-200 to-tech-200 border border-accent-500/20 rounded-xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:border-accent-500/40 transition-all duration-300">
              <Cpu className="h-10 w-10 text-accent-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold text-tech-900 mb-3">Industrial Focus</h3>
            <p className="text-tech-700 leading-relaxed">
              Real-world applications in manufacturing, energy, mining, and other 
              mission-critical industrial environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};