import React from 'react';
import { Cpu, Search, Menu, X, Zap } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: 'home' | 'about') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  searchQuery,
  onSearchChange,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-industrial-100 border-b border-electric-500/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onViewChange('home')}
          >
            <div className="bg-gradient-to-br from-electric-500 to-secondary-600 p-2.5 rounded-lg group-hover:animate-glow transition-all duration-300">
              <Cpu className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-tech-900 group-hover:text-electric-400 transition-colors">
                First Principle Industrial AI
              </h1>
              <p className="text-xs text-tech-600 font-mono">Real Decision-Making Impact</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onViewChange('home')}
              className={`text-sm font-medium transition-all duration-300 relative ${
                currentView === 'home'
                  ? 'text-electric-400'
                  : 'text-tech-700 hover:text-tech-900'
              }`}
            >
              Case Studies
              {currentView === 'home' && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-500 to-secondary-500 animate-pulse-slow"></div>
              )}
            </button>
            <button
              onClick={() => onViewChange('about')}
              className={`text-sm font-medium transition-all duration-300 relative ${
                currentView === 'about'
                  ? 'text-electric-400'
                  : 'text-tech-700 hover:text-tech-900'
              }`}
            >
              Philosophy
              {currentView === 'about' && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-500 to-secondary-500 animate-pulse-slow"></div>
              )}
            </button>
          </nav>

          {/* Search Bar */}
          {currentView === 'home' && (
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-tech-600" />
                <input
                  type="text"
                  placeholder="Search industrial AI cases..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-industrial-200 border border-tech-400/30 rounded-lg focus:ring-2 focus:ring-electric-500/50 focus:border-electric-500 outline-none text-sm text-tech-900 placeholder-tech-600 transition-all duration-300"
                />
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-industrial-200 transition-colors text-tech-700"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-tech-400/20">
            <nav className="space-y-4">
              <button
                onClick={() => {
                  onViewChange('home');
                  setIsMobileMenuOpen(false);
                }}
                className={`block text-left w-full text-sm font-medium transition-colors ${
                  currentView === 'home' ? 'text-electric-400' : 'text-tech-700'
                }`}
              >
                Case Studies
              </button>
              <button
                onClick={() => {
                  onViewChange('about');
                  setIsMobileMenuOpen(false);
                }}
                className={`block text-left w-full text-sm font-medium transition-colors ${
                  currentView === 'about' ? 'text-electric-400' : 'text-tech-700'
                }`}
              >
                Philosophy
              </button>
              {currentView === 'home' && (
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-tech-600" />
                  <input
                    type="text"
                    placeholder="Search industrial AI cases..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-industrial-200 border border-tech-400/30 rounded-lg focus:ring-2 focus:ring-electric-500/50 focus:border-electric-500 outline-none text-sm text-tech-900 placeholder-tech-600"
                  />
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};