import React, { useEffect, useState } from 'react';
import CircularGauge from '../components/CircularGauge';
import ImpurityList from '../components/ImpurityList';
import AIAnalysisBox from '../components/AIAnalysisBox';
import { mockGrainData, mockAIAnalysis, getGradeInfo } from '../data/mockData';
import { GrainData } from '../types';

const PurityDashboard: React.FC = () => {
  const [grainData, setGrainData] = useState<GrainData>(mockGrainData);
  const gradeInfo = getGradeInfo(grainData.purity);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setGrainData(prev => ({
        ...prev,
        purity: prev.purity + (Math.random() - 0.5) * 0.5, // Small random changes
        impurities: {
          ...prev.impurities,
          husk: Math.max(0, prev.impurities.husk + (Math.random() - 0.5) * 0.1),
          stones: Math.max(0, prev.impurities.stones + (Math.random() - 0.5) * 0.1)
        }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Grain Quality Analyzer – Purity & Impurities
        </h1>
        <p className="text-lg text-gray-500">
          Real-time analysis of grain quality and contamination levels
        </p>
      </div>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Purity Gauge Section */}
        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
            Purity Dashboard
          </h2>
          
          <div className="flex justify-center mb-6">
            <CircularGauge
              value={grainData.purity}
              max={100}
              color={gradeInfo.color}
              bgColor={gradeInfo.bgColor}
              label={`${gradeInfo.label} (Grade ${gradeInfo.grade})`}
              unit="% Purity"
              size={280}
            />
          </div>

          <div className="text-center">
            <div 
              className="inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold"
              style={{ 
                backgroundColor: gradeInfo.bgColor, 
                color: gradeInfo.color 
              }}
            >
              Grade {gradeInfo.grade} - {gradeInfo.label}
            </div>
          </div>
        </div>

        {/* Impurities Section */}
        <ImpurityList impurities={grainData.impurities} />
      </div>

      {/* AI Advisory Section */}
      <div className="grid grid-cols-1 gap-6">
        <AIAnalysisBox
          title="🤖 AI Agricultural Advisory"
          content={mockAIAnalysis.advisory}
          icon="bot"
          bgColor="bg-white"
          textColor="text-gray-700"
        />
      </div>
    </div>
  );
};

export default PurityDashboard;