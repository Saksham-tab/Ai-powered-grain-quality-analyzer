import React, { useEffect, useState } from 'react';
import CircularGauge from '../components/CircularGauge';
import TemperatureGauge from '../components/TemperatureGauge';
import AIAnalysisBox from '../components/AIAnalysisBox';
import { mockGrainData, mockAIAnalysis } from '../data/mockData';
import { GrainData } from '../types';

const RealtimeAnalyzer: React.FC = () => {
  const [grainData, setGrainData] = useState<GrainData>(mockGrainData);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setGrainData(prev => ({
        ...prev,
        temperature: prev.temperature + (Math.random() - 0.5) * 2,
        moisture: Math.max(0, Math.min(100, prev.moisture + (Math.random() - 0.5) * 1))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getMoistureColor = (moisture: number) => {
    if (moisture <= 12) return '#22c55e'; // green - optimal
    if (moisture <= 16) return '#f59e0b'; // amber - caution
    return '#ef4444'; // red - too high
  };

  const getMoistureBgColor = (moisture: number) => {
    if (moisture <= 12) return '#f0fdf4';
    if (moisture <= 16) return '#fefce8';
    return '#fef2f2';
  };

  const getMoistureLabel = (moisture: number) => {
    if (moisture <= 12) return 'Optimal Moisture';
    if (moisture <= 16) return 'Moderate Moisture';
    return 'High Moisture';
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Real-Time Grain Analysis
        </h1>
        <p className="text-lg text-gray-500">
          Live monitoring of environmental conditions and market predictions
        </p>
      </div>

      {/* Gauges Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Temperature Gauge */}
        <TemperatureGauge temperature={grainData.temperature} />

        {/* Moisture Gauge */}
        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6 flex justify-center">
          <CircularGauge
            value={grainData.moisture}
            max={100}
            color={getMoistureColor(grainData.moisture)}
            bgColor={getMoistureBgColor(grainData.moisture)}
            label={getMoistureLabel(grainData.moisture)}
            unit="% Moisture"
            size={240}
          />
        </div>
      </div>

      {/* AI Analysis Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Pricing Agent */}
        <AIAnalysisBox
          title="💰 AI Market Pricing"
          content={`Based on current grain quality metrics (Purity: ${grainData.purity.toFixed(1)}%, Temperature: ${grainData.temperature.toFixed(1)}°C, Moisture: ${grainData.moisture.toFixed(1)}%), the estimated market price is ₹${mockAIAnalysis.pricing.toLocaleString()}/quintal. Market conditions are favorable for medium-grade grain with current quality parameters.`}
          icon="trending"
          bgColor="bg-green-50"
          textColor="text-green-700"
        />

        {/* AI Shelf-Life Predictor */}
        <AIAnalysisBox
          title="⏰ AI Shelf-Life Prediction"
          content={`Current storage conditions indicate an estimated shelf-life of ${mockAIAnalysis.shelfLife} ${mockAIAnalysis.shelfLifeUnit}. The combination of ${grainData.moisture.toFixed(1)}% moisture content and ${grainData.temperature.toFixed(1)}°C temperature provides optimal preservation conditions. Regular monitoring recommended to maintain quality.`}
          icon="clock"
          bgColor="bg-amber-50"
          textColor="text-amber-700"
        />
      </div>

      {/* Real-time Stats */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-sm p-6 text-white">
        <h3 className="text-xl font-semibold mb-4">📊 Live Data Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">{grainData.purity.toFixed(1)}%</div>
            <div className="text-sm opacity-90">Purity</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">{grainData.temperature.toFixed(1)}°C</div>
            <div className="text-sm opacity-90">Temperature</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">{grainData.moisture.toFixed(1)}%</div>
            <div className="text-sm opacity-90">Moisture</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">₹{mockAIAnalysis.pricing.toLocaleString()}</div>
            <div className="text-sm opacity-90">Est. Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtimeAnalyzer;