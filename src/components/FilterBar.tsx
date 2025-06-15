import React from 'react';
import { Filter, Settings } from 'lucide-react';

interface FilterBarProps {
  selectedIndustry: string;
  selectedImpactLevel: string;
  onIndustryChange: (industry: string) => void;
  onImpactLevelChange: (level: string) => void;
  industries: string[];
  impactLevels: string[];
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedIndustry,
  selectedImpactLevel,
  onIndustryChange,
  onImpactLevelChange,
  industries,
  impactLevels,
}) => {
  return (
    <div className="bg-industrial-100 border-b border-tech-400/20 py-6">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-electric-500/20 to-secondary-500/20 p-2 rounded-lg border border-electric-500/30">
              <Settings className="h-5 w-5 text-electric-400" />
            </div>
            <span className="text-sm font-medium text-tech-800 font-mono">FILTER PARAMETERS:</span>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <select
              value={selectedIndustry}
              onChange={(e) => onIndustryChange(e.target.value)}
              className="px-4 py-2.5 bg-industrial-200 border border-tech-400/30 rounded-lg focus:ring-2 focus:ring-electric-500/50 focus:border-electric-500 outline-none text-sm text-tech-900 font-mono transition-all duration-300"
            >
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
            
            <select
              value={selectedImpactLevel}
              onChange={(e) => onImpactLevelChange(e.target.value)}
              className="px-4 py-2.5 bg-industrial-200 border border-tech-400/30 rounded-lg focus:ring-2 focus:ring-electric-500/50 focus:border-electric-500 outline-none text-sm text-tech-900 font-mono transition-all duration-300"
            >
              {impactLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};