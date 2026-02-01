import { GrainData, AIAnalysis } from '../types';

export const mockGrainData: GrainData = {
  purity: 87.5,
  impurities: {
    husk: 3.2,
    stones: 1.8,
    brokenPieces: 4.1,
    shriveledPieces: 2.3,
    insectDamage: 0.7,
    blackSpots: 1.1,
    discoloration: 1.3
  },
  temperature: 28.5,
  moisture: 12.8
};

export const mockAIAnalysis: AIAnalysis = {
  advisory: "Based on current purity levels at 87.5%, your grain quality is in the Medium Grade range. To achieve Premium Grade, focus on reducing husk content through better winnowing techniques and minimizing broken pieces during harvesting. Consider adjusting storage conditions to prevent moisture fluctuations.",
  pricing: 4850,
  shelfLife: 8,
  shelfLifeUnit: "months"
};

export const getGradeInfo = (purity: number) => {
  if (purity >= 90) {
    return {
      grade: 'A' as const,
      label: 'Premium Grade',
      color: '#22c55e',
      bgColor: '#f0fdf4'
    };
  } else if (purity >= 70) {
    return {
      grade: 'B' as const,
      label: 'Medium Grade', 
      color: '#eab308',
      bgColor: '#fefce8'
    };
  } else {
    return {
      grade: 'C' as const,
      label: 'Low Grade',
      color: '#ef4444',
      bgColor: '#fef2f2'
    };
  }
};