export interface GrainData {
  purity: number;
  impurities: {
    husk: number;
    stones: number;
    brokenPieces: number;
    shriveledPieces: number;
    insectDamage: number;
    blackSpots: number;
    discoloration: number;
  };
  temperature: number;
  moisture: number;
}

export interface GradeInfo {
  grade: 'A' | 'B' | 'C';
  label: string;
  color: string;
  bgColor: string;
}

export interface AIAnalysis {
  advisory: string;
  pricing: number;
  shelfLife: number;
  shelfLifeUnit: string;
}