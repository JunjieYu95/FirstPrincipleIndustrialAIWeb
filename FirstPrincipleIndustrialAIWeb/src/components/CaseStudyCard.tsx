import React from 'react';
import { Clock, TrendingUp, ArrowRight, Zap, Activity } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onClick: () => void;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, onClick }) => {
  const getImpactColor = (level: string) => {
    switch (level) {
      case 'Transformational':
        return 'bg-gradient-to-r from-accent-500/20 to-accent-600/20 text-accent-400 border-accent-500/30';
      case 'High':
        return 'bg-gradient-to-r from-electric-500/20 to-secondary-500/20 text-electric-400 border-electric-500/30';
      default:
        return 'bg-gradient-to-r from-tech-500/20 to-tech-600/20 text-tech-400 border-tech-500/30';
    }
  };

  return (
    <div 
      className="bg-gradient-to-br from-industrial-100 to-tech-100 rounded-xl border border-tech-400/20 hover:border-electric-500/40 transition-all duration-300 cursor-pointer group overflow-hidden backdrop-blur-sm hover:shadow-2xl hover:shadow-electric-500/10"
      onClick={onClick}
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-900/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-2">
            <Activity className="h-4 w-4 text-electric-400 animate-pulse" />
            <span className="text-xs font-mono text-tech-300 uppercase tracking-wider">
              Active System
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm ${getImpactColor(caseStudy.impactLevel)}`}>
            <TrendingUp className="h-3 w-3 mr-1.5" />
            {caseStudy.impactLevel} Impact
          </span>
          <div className="flex items-center text-tech-600 text-sm font-mono">
            <Clock className="h-4 w-4 mr-1" />
            {caseStudy.readTime}min
          </div>
        </div>

        <h3 className="text-xl font-bold text-tech-900 mb-3 group-hover:text-electric-400 transition-colors duration-300">
          {caseStudy.title}
        </h3>
        
        <div className="text-sm text-tech-700 mb-4 font-mono">
          <span className="font-semibold text-electric-400">{caseStudy.company}</span>
          <span className="text-tech-500 mx-2">•</span>
          <span>{caseStudy.industry}</span>
        </div>
        
        <p className="text-tech-700 mb-6 leading-relaxed">
          {caseStudy.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-tech-600">
            <span className="font-medium text-tech-800">AI System:</span>
            <br />
            <span className="font-mono text-xs">{caseStudy.aiTechnique}</span>
          </div>
          <div className="flex items-center space-x-2 text-electric-400 group-hover:text-electric-300 transition-colors">
            <span className="text-sm font-mono">ANALYZE</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};