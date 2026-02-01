import React, { useEffect, useState } from 'react';

interface CircularGaugeProps {
  value: number;
  max: number;
  color: string;
  bgColor: string;
  label: string;
  unit: string;
  size?: number;
}

const CircularGauge: React.FC<CircularGaugeProps> = ({
  value,
  max,
  color,
  bgColor,
  label,
  unit,
  size = 200
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value);
    }, 300);
    return () => clearTimeout(timer);
  }, [value]);

  const circumference = 2 * Math.PI * 85;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedValue / max) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div 
        className="relative"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
          viewBox="0 0 200 200"
        >
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r="85"
            stroke="#f1f5f9"
            strokeWidth="12"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="100"
            cy="100"
            r="85"
            stroke={color}
            strokeWidth="12"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div 
            className="text-3xl font-bold"
            style={{ color }}
          >
            {animatedValue.toFixed(1)}
          </div>
          <div className="text-sm text-gray-500 mt-1">{unit}</div>
        </div>
      </div>
      
      <div 
        className="mt-4 px-4 py-2 rounded-full text-sm font-medium"
        style={{ backgroundColor: bgColor, color }}
      >
        {label}
      </div>
    </div>
  );
};

export default CircularGauge;