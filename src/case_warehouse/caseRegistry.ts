import { CaseStudy } from '../types';

export interface CaseStudyRegistry {
  id: string;
  caseStudy: CaseStudy;
  htmlPath: string;
  folderName: string;
}

export const caseStudyRegistry: CaseStudyRegistry[] = [
  {
    id: '1',
    caseStudy: {
      id: '1',
      title: 'Predictive Maintenance Revolution at Steel Manufacturing',
      company: 'ArcelorMittal',
      industry: 'Steel Manufacturing',
      aiTechnique: 'Machine Learning + IoT Sensors',
      impactLevel: 'Transformational',
      description: 'Implementation of ML algorithms to predict equipment failures 2-3 weeks in advance, fundamentally changing maintenance scheduling decisions.',
      challenge: 'Unplanned downtime was costing $50M annually. Traditional time-based maintenance was inefficient and reactive.',
      solution: 'Deployed 15,000+ sensors across critical equipment, feeding real-time data to ML models that learned failure patterns and predicted optimal maintenance windows.',
      results: '47% reduction in unplanned downtime, $23M annual savings, 31% increase in equipment lifespan.',
      decisionImpact: 'Maintenance crews now make data-driven decisions about when to service equipment, moving from reactive to predictive operations. Production schedules are optimized around predicted maintenance windows.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
      readTime: 8,
      publishedDate: '2024-01-15',
      tags: ['Predictive Analytics', 'IoT', 'Manufacturing', 'Cost Reduction']
    },
    htmlPath: '/case_warehouse/case_001_arcelormittal_predictive_maintenance/index.html',
    folderName: 'case_001_arcelormittal_predictive_maintenance'
  },
  {
    id: '2',
    caseStudy: {
      id: '2',
      title: 'AI-Driven Supply Chain Optimization in Automotive',
      company: 'BMW Group',
      industry: 'Automotive',
      aiTechnique: 'Deep Learning + Graph Neural Networks',
      impactLevel: 'High',
      description: 'Neural networks analyze complex supplier relationships and market dynamics to make real-time sourcing decisions across 12,000+ suppliers.',
      challenge: 'Managing complex global supply chain with volatile demand, supplier risks, and price fluctuations affecting production decisions.',
      solution: 'Graph neural networks model supplier relationships, while deep learning algorithms predict demand patterns and optimize sourcing decisions in real-time.',
      results: '18% reduction in supply chain costs, 60% faster response to supply disruptions, 25% improvement in demand forecast accuracy.',
      decisionImpact: 'Procurement teams now rely on AI recommendations for supplier selection, contract negotiations, and risk mitigation strategies. Production planning decisions are made based on AI-predicted supply scenarios.',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg',
      readTime: 6,
      publishedDate: '2024-01-10',
      tags: ['Supply Chain', 'Deep Learning', 'Automotive', 'Risk Management']
    },
    htmlPath: '/case_warehouse/case_002_bmw_supply_chain/index.html',
    folderName: 'case_002_bmw_supply_chain'
  },
  {
    id: '3',
    caseStudy: {
      id: '3',
      title: 'Computer Vision for Quality Control in Pharmaceuticals',
      company: 'Novartis',
      industry: 'Pharmaceuticals',
      aiTechnique: 'Computer Vision + Deep CNN',
      impactLevel: 'High',
      description: 'Convolutional neural networks inspect tablet quality at microscopic level, making instant pass/fail decisions that human inspectors cannot match.',
      challenge: 'Manual quality inspection was slow, subjective, and missed subtle defects that could compromise patient safety.',
      solution: 'High-resolution cameras combined with deep CNN models trained on millions of tablet images to detect defects invisible to human inspectors.',
      results: '99.7% defect detection accuracy (vs 94% human), 85% faster inspection, zero patient safety incidents related to missed defects.',
      decisionImpact: 'Quality control decisions are now made by AI systems that can detect microscopic cracks, color variations, and dimensional inconsistencies. Batch release decisions are based on AI quality assessments.',
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg',
      readTime: 7,
      publishedDate: '2024-01-05',
      tags: ['Computer Vision', 'Quality Control', 'Pharmaceuticals', 'Safety']
    },
    htmlPath: '/case_warehouse/case_003_novartis_quality_control/index.html',
    folderName: 'case_003_novartis_quality_control'
  },
  {
    id: '4',
    caseStudy: {
      id: '4',
      title: 'Dynamic Pricing Algorithm in Energy Trading',
      company: 'Shell Energy',
      industry: 'Energy',
      aiTechnique: 'Reinforcement Learning',
      impactLevel: 'Transformational',
      description: 'RL agents make split-second energy trading decisions, adapting pricing strategies based on market conditions, weather forecasts, and grid demand.',
      challenge: 'Energy markets fluctuate rapidly based on weather, demand, and grid conditions. Human traders cannot process information fast enough for optimal decisions.',
      solution: 'Reinforcement learning agents trained on historical market data and real-time inputs make autonomous trading decisions, adjusting strategies every millisecond.',
      results: '32% increase in trading profits, 78% reduction in human intervention, ability to capitalize on microsecond market opportunities.',
      decisionImpact: 'Trading decisions are now made by AI agents that consider hundreds of variables simultaneously. Pricing strategies adapt in real-time based on market feedback and learning.',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg',
      readTime: 9,
      publishedDate: '2023-12-28',
      tags: ['Reinforcement Learning', 'Energy Trading', 'Real-time Decisions', 'Financial Optimization']
    },
    htmlPath: '/case_warehouse/case_004_shell_energy_trading/index.html',
    folderName: 'case_004_shell_energy_trading'
  },
  {
    id: '5',
    caseStudy: {
      id: '5',
      title: 'AI-Powered Crop Yield Optimization',
      company: 'John Deere',
      industry: 'Agriculture',
      aiTechnique: 'Multi-modal AI + Satellite Imagery',
      impactLevel: 'High',
      description: 'AI analyzes satellite imagery, soil sensors, and weather data to make field-by-field planting and harvesting decisions.',
      challenge: 'Farmers needed to optimize crop yields across thousands of acres with varying soil conditions, weather patterns, and market demands.',
      solution: 'Multi-modal AI system combines satellite imagery, soil sensors, weather forecasts, and historical yield data to recommend optimal planting patterns and timing.',
      results: '15% average yield increase, 20% reduction in seed waste, $2,400 additional profit per farm annually.',
      decisionImpact: 'Farmers now make planting decisions based on AI analysis of soil composition, weather predictions, and market forecasts. Harvesting schedules are optimized using AI-predicted optimal timing.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
      readTime: 6,
      publishedDate: '2023-12-20',
      tags: ['Agriculture', 'Satellite Imagery', 'Multi-modal AI', 'Yield Optimization']
    },
    htmlPath: '/case_warehouse/case_005_john_deere_agriculture/index.html',
    folderName: 'case_005_john_deere_agriculture'
  }
];

// Export individual case studies for backward compatibility
export const caseStudies = caseStudyRegistry.map(registry => registry.caseStudy);

export const industries = [
  'All Industries',
  'Steel Manufacturing',
  'Automotive',
  'Pharmaceuticals',
  'Energy',
  'Agriculture',
  'Legal Services',
  'Data Center'
];

export const impactLevels = [
  'All Impact Levels',
  'High',
  'Transformational'
];

// Helper function to get case study by ID
export const getCaseStudyById = (id: string): CaseStudyRegistry | undefined => {
  return caseStudyRegistry.find(registry => registry.id === id);
};

// Helper function to get case study HTML path by ID
export const getCaseStudyHtmlPath = (id: string): string | undefined => {
  const registry = getCaseStudyById(id);
  return registry?.htmlPath;
}; 