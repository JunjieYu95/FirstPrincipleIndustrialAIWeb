import React from 'react';
import { Cpu, Target, CheckCircle, Lightbulb, Activity, Zap, Database } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-industrial-50 to-tech-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-br from-electric-500/20 to-secondary-500/20 border border-electric-500/30 rounded-xl w-24 h-24 flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Cpu className="h-12 w-12 text-electric-400" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-tech-900 mb-8">
            Our Philosophy
          </h1>
          <p className="text-xl text-tech-700 leading-relaxed font-mono">
            Evaluating industrial AI from first principles—focusing on tangible decision-making impact, 
            not technological sophistication for its own sake.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          <section>
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-accent-500/20 to-accent-600/20 p-3 rounded-lg border border-accent-500/30 mr-4">
                <Target className="h-8 w-8 text-accent-400" />
              </div>
              <h2 className="text-3xl font-bold text-tech-900">The Industrial AI Problem</h2>
            </div>
            <div className="prose prose-lg text-tech-700 pl-16">
              <p className="mb-6 text-lg leading-relaxed">
                Industrial environments are saturated with "AI-powered" solutions that fail to deliver 
                on their promises. Many systems labeled as AI are sophisticated dashboards, basic 
                automation, or digitalization projects wrapped in machine learning terminology.
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                True industrial AI applications must fundamentally alter decision-making processes—
                enabling choices that were previously impossible, impractical, or too complex for 
                human operators to make consistently at industrial scale.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-electric-500/5 via-secondary-500/5 to-accent-500/5 border border-electric-500/20 rounded-xl p-10 backdrop-blur-sm">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-electric-500/30 to-secondary-500/30 p-3 rounded-lg border border-electric-500/40 mr-4">
                <Lightbulb className="h-8 w-8 text-electric-400" />
              </div>
              <h2 className="text-3xl font-bold text-tech-900">First Principles Framework</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold text-tech-900 mb-6 font-mono uppercase tracking-wider">
                  ✓ Qualifying Criteria:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-tech-700 leading-relaxed">Autonomous decision-making that replaces human judgment in critical processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-tech-700 leading-relaxed">Pattern recognition and prediction beyond human cognitive capability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-tech-700 leading-relaxed">Real-time optimization of complex industrial systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-tech-700 leading-relaxed">Quantifiable business impact from AI-driven operational changes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-tech-900 mb-6 font-mono uppercase tracking-wider">
                  ✗ Exclusion Criteria:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-red-500/20 border-2 border-red-400/40 mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-tech-700 leading-relaxed">Data visualization dashboards with basic analytics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-red-500/20 border-2 border-red-400/40 mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-tech-700 leading-relaxed">Rule-based automation systems without learning capability</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-red-500/20 border-2 border-red-400/40 mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-tech-700 leading-relaxed">Data collection systems without decision-making impact</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-red-500/20 border-2 border-red-400/40 mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-tech-700 leading-relaxed">Technology demonstrations without measurable business outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-tech-900 mb-8">Industrial Imperative</h2>
            <div className="prose prose-lg text-tech-700">
              <p className="mb-6 text-lg leading-relaxed">
                Industrial leaders require concrete evidence of AI's transformative potential beyond 
                marketing claims. Our curated case studies provide detailed analysis of AI 
                implementations that have fundamentally altered operational decision-making processes.
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                Each case study demonstrates not only the technical implementation but quantifies 
                the decision-making transformation, business impact, and provides actionable insights 
                for similar industrial applications.
              </p>
              <p className="text-lg leading-relaxed">
                By applying first principles analysis—examining the fundamental ways AI augments or 
                replaces human decision-making—we help identify opportunities where AI creates 
                genuine competitive advantage in industrial operations.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-electric-500 via-secondary-500 to-accent-500 text-white rounded-xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>
            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 mr-3 animate-pulse" />
                <h2 className="text-3xl font-bold">Ready to Analyze Real Industrial AI?</h2>
              </div>
              <p className="text-xl mb-8 opacity-90 font-mono">
                Explore case studies that demonstrate AI's genuine transformative potential in industrial environments.
              </p>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 font-mono uppercase tracking-wider"
              >
                Analyze Case Studies
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};