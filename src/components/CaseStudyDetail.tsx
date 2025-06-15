import React from 'react';
import { ArrowLeft, Clock, TrendingUp, Target, Lightbulb, BarChart3, Calendar, Tag, Activity, Cpu } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
  onBack: () => void;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ caseStudy, onBack }) => {
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
    <div className="min-h-screen bg-gradient-to-br from-industrial-50 to-tech-50">
      <div className="bg-industrial-100 border-b border-tech-400/20">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-electric-400 hover:text-electric-300 transition-colors mb-4 font-mono text-sm"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            BACK TO CASE STUDIES
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-industrial-100 to-tech-100 rounded-xl border border-tech-400/20 overflow-hidden backdrop-blur-sm">
          {/* Header Image */}
          <div className="aspect-video overflow-hidden relative">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-industrial-900/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center space-x-3 mb-4">
                <Activity className="h-5 w-5 text-electric-400 animate-pulse" />
                <span className="text-sm font-mono text-tech-300 uppercase tracking-wider">
                  Industrial AI System Active
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm ${getImpactColor(caseStudy.impactLevel)}`}>
                <TrendingUp className="h-4 w-4 mr-2" />
                {caseStudy.impactLevel} Impact
              </span>
              <div className="flex items-center text-tech-600 text-sm font-mono">
                <Clock className="h-4 w-4 mr-1" />
                {caseStudy.readTime} min analysis
              </div>
              <div className="flex items-center text-tech-600 text-sm font-mono">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(caseStudy.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>

            {/* Title and Company */}
            <h1 className="text-4xl sm:text-5xl font-bold text-tech-900 mb-4 leading-tight">
              {caseStudy.title}
            </h1>
            <div className="text-lg text-tech-700 mb-8 font-mono">
              <span className="font-bold text-electric-400">{caseStudy.company}</span>
              <span className="text-tech-500 mx-3">•</span>
              <span>{caseStudy.industry}</span>
            </div>

            {/* AI Technique Highlight */}
            <div className="bg-gradient-to-r from-electric-500/10 to-secondary-500/10 border border-electric-500/30 rounded-xl p-6 mb-8 backdrop-blur-sm">
              <div className="flex items-center mb-3">
                <Cpu className="h-6 w-6 text-electric-400 mr-3" />
                <span className="font-bold text-electric-400 font-mono uppercase tracking-wider">AI System Architecture</span>
              </div>
              <p className="text-tech-800 text-lg font-medium">{caseStudy.aiTechnique}</p>
            </div>

            {/* Main Sections */}
            <div className="space-y-10">
              <section>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-accent-500/20 to-accent-600/20 p-3 rounded-lg border border-accent-500/30 mr-4">
                    <Target className="h-6 w-6 text-accent-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-tech-900">Industrial Challenge</h2>
                </div>
                <p className="text-tech-700 leading-relaxed text-lg pl-16">
                  {caseStudy.challenge}
                </p>
              </section>

              <section>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-electric-500/20 to-secondary-500/20 p-3 rounded-lg border border-electric-500/30 mr-4">
                    <Lightbulb className="h-6 w-6 text-electric-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-tech-900">AI Solution Implementation</h2>
                </div>
                <p className="text-tech-700 leading-relaxed text-lg pl-16">
                  {caseStudy.solution}
                </p>
              </section>

              <section>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 p-3 rounded-lg border border-green-500/30 mr-4">
                    <BarChart3 className="h-6 w-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-tech-900">Operational Results</h2>
                </div>
                <p className="text-tech-700 leading-relaxed text-lg pl-16 mb-4">
                  {caseStudy.results}
                </p>
              </section>

              <section className="bg-gradient-to-r from-electric-500/5 via-secondary-500/5 to-accent-500/5 border border-electric-500/20 rounded-xl p-8 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-electric-500/30 to-secondary-500/30 p-3 rounded-lg border border-electric-500/40 mr-4">
                    <Activity className="h-6 w-6 text-electric-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-tech-900">Decision-Making Transformation</h2>
                </div>
                <p className="text-tech-800 leading-relaxed text-lg font-medium pl-16">
                  {caseStudy.decisionImpact}
                </p>
              </section>
            </div>

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-tech-400/20">
              <div className="flex items-center mb-6">
                <Tag className="h-5 w-5 text-tech-600 mr-3" />
                <span className="font-medium text-tech-800 font-mono uppercase tracking-wider">System Tags</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {caseStudy.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-gradient-to-r from-tech-500/10 to-tech-600/10 text-tech-700 border border-tech-500/20 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};