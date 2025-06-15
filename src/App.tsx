import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { CaseStudyCard } from './components/CaseStudyCard';
import { CaseStudyDetail } from './components/CaseStudyDetail';
import { About } from './components/About';
import { caseStudies, industries, impactLevels } from './data/caseStudies';
import { CaseStudy, ViewType } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedImpactLevel, setSelectedImpactLevel] = useState('All Impact Levels');

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((caseStudy) => {
      const matchesSearch = searchQuery === '' || 
        caseStudy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseStudy.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseStudy.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseStudy.aiTechnique.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseStudy.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesIndustry = selectedIndustry === 'All Industries' || 
        caseStudy.industry === selectedIndustry;

      const matchesImpactLevel = selectedImpactLevel === 'All Impact Levels' || 
        caseStudy.impactLevel === selectedImpactLevel;

      return matchesSearch && matchesIndustry && matchesImpactLevel;
    });
  }, [searchQuery, selectedIndustry, selectedImpactLevel]);

  const handleCaseStudyClick = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setCurrentView('case-study');
  };

  const handleBackToHome = () => {
    setSelectedCaseStudy(null);
    setCurrentView('home');
  };

  const handleViewChange = (view: 'home' | 'about') => {
    setCurrentView(view);
    setSelectedCaseStudy(null);
  };

  if (currentView === 'case-study' && selectedCaseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-industrial-50 to-tech-50">
        <Header
          currentView={currentView}
          onViewChange={handleViewChange}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <CaseStudyDetail
          caseStudy={selectedCaseStudy}
          onBack={handleBackToHome}
        />
      </div>
    );
  }

  if (currentView === 'about') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-industrial-50 to-tech-50">
        <Header
          currentView={currentView}
          onViewChange={handleViewChange}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <About />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-industrial-50 to-tech-50">
      <Header
        currentView={currentView}
        onViewChange={handleViewChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <Hero />
      <FilterBar
        selectedIndustry={selectedIndustry}
        selectedImpactLevel={selectedImpactLevel}
        onIndustryChange={setSelectedIndustry}
        onImpactLevelChange={setSelectedImpactLevel}
        industries={industries}
        impactLevels={impactLevels}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="bg-gradient-to-r from-electric-500/20 to-secondary-500/20 p-2 rounded-lg border border-electric-500/30 mr-3">
              <div className="h-4 w-4 bg-electric-400 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-4xl font-bold text-tech-900 font-mono uppercase tracking-wider">
              Active Case Studies
            </h2>
          </div>
          <p className="text-tech-700 text-lg font-mono">
            {filteredCaseStudies.length} systems demonstrating real AI decision-making impact
          </p>
        </div>

        {filteredCaseStudies.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-gradient-to-r from-tech-500/10 to-tech-600/10 border border-tech-500/20 rounded-xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <div className="text-tech-400 text-3xl">🔍</div>
            </div>
            <h3 className="text-2xl font-bold text-tech-900 mb-3 font-mono">No Systems Found</h3>
            <p className="text-tech-700 mb-6 text-lg">
              Adjust search parameters or filter criteria to locate relevant industrial AI cases.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedIndustry('All Industries');
                setSelectedImpactLevel('All Impact Levels');
              }}
              className="text-electric-400 hover:text-electric-300 font-medium font-mono uppercase tracking-wider transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                caseStudy={caseStudy}
                onClick={() => handleCaseStudyClick(caseStudy)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;