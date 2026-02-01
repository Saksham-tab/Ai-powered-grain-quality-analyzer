import React, { useEffect, useState } from 'react';
import { Thermometer } from 'lucide-react';

interface TemperatureGaugeProps {
  temperature: number;
}

const TemperatureGauge: React.FC<TemperatureGaugeProps> = ({ temperature }) => {
  const [animatedTemp, setAnimatedTemp] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedTemp(temperature);
    }, 300);
    return () => clearTimeout(timer);
  }, [temperature]);

  const getTemperatureColor = (temp: number) => {
    if (temp <= 20) return '#64748b'; // cool gray
    if (temp <= 30) return '#22c55e'; // green
    if (temp <= 40) return '#f59e0b'; // amber
    return '#ef4444'; // red
  };

  const temperatureHeight = Math.min(Math.max((animatedTemp / 50) * 100, 10), 100);
  const color = getTemperatureColor(animatedTemp);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6 flex flex-col items-center">
      <div className="flex items-center mb-4">
        <Thermometer className="w-5 h-5 text-green-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-700">Temperature</h3>
      </div>
      
      <div className="relative w-16 h-48 bg-green-50 rounded-full overflow-hidden border border-green-100">
        {/* Temperature fill */}
        <div
          className="absolute bottom-0 w-full transition-all duration-1000 ease-out rounded-full"
          style={{
            height: `${temperatureHeight}%`,
            backgroundColor: color,
          }}
        />
        
        {/* Temperature scale */}
        <div className="absolute right-full mr-2 h-full flex flex-col justify-between text-xs text-gray-400">
          <span>50°</span>
          <span>40°</span>
          <span>30°</span>
          <span>20°</span>
          <span>10°</span>
          <span>0°</span>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <div 
          className="text-2xl font-bold"
          style={{ color }}
        >
          {animatedTemp.toFixed(1)}°C
        </div>
        <div className="text-sm text-gray-500 mt-1">
          Current Temperature
        </div>
      </div>
    </div>
  );
};

export default TemperatureGauge;