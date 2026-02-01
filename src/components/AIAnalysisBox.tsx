import React from 'react';
import { Bot, TrendingUp, Clock } from 'lucide-react';

interface AIAnalysisBoxProps {
  title: string;
  content: string;
  icon: 'bot' | 'trending' | 'clock';
  bgColor?: string;
  textColor?: string;
}

const AIAnalysisBox: React.FC<AIAnalysisBoxProps> = ({
  title,
  content,
  icon,
  bgColor = 'bg-white',
  textColor = 'text-gray-700'
}) => {
  const IconComponent = {
    bot: Bot,
    trending: TrendingUp,
    clock: Clock
  }[icon];

  return (
    <div className={`${bgColor} rounded-xl p-6 border border-green-100 shadow-sm`}>
      <div className="flex items-start space-x-3">
        <div className={`p-2 rounded-lg ${bgColor === 'bg-white' ? 'bg-green-50' : bgColor === 'bg-green-50' ? 'bg-green-100' : 'bg-amber-50'}`}>
          <IconComponent className={`w-5 h-5 ${textColor}`} />
        </div>
        
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${textColor} mb-2`}>
            {title}
          </h3>
          <div className={`${textColor} opacity-90 leading-relaxed`}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalysisBox;