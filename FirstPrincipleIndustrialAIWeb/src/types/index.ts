export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  aiTechnique: string;
  impactLevel: 'High' | 'Medium' | 'Transformational';
  description: string;
  challenge: string;
  solution: string;
  results: string;
  decisionImpact: string;
  image: string;
  readTime: number;
  publishedDate: string;
  tags: string[];
}

export type ViewType = 'home' | 'case-study' | 'about';

export interface AppState {
  currentView: ViewType;
  selectedCaseStudy: CaseStudy | null;
  searchQuery: string;
  selectedIndustry: string;
  selectedImpactLevel: string;
}