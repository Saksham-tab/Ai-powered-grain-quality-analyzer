import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ImpurityData {
  husk: number;
  stones: number;
  brokenPieces: number;
  shriveledPieces: number;
  insectDamage: number;
  blackSpots: number;
  discoloration: number;
}

interface ImpurityListProps {
  impurities: ImpurityData;
}

const ImpurityList: React.FC<ImpurityListProps> = ({ impurities }) => {
  const impurityItems = [
    { name: 'Husk', value: impurities.husk, icon: '🌾' },
    { name: 'Stones', value: impurities.stones, icon: '🪨' },
    { name: 'Broken Pieces', value: impurities.brokenPieces, icon: '💥' },
    { name: 'Shriveled Pieces', value: impurities.shriveledPieces, icon: '🥀' },
    { name: 'Insect Damage', value: impurities.insectDamage, icon: '🐛' },
    { name: 'Black Spots', value: impurities.blackSpots, icon: '⚫' },
    { name: 'Discoloration', value: impurities.discoloration, icon: '🎨' }
  ];

  const totalDamage = Object.values(impurities).reduce((sum, val) => sum + val, 0) / Object.values(impurities).length;

  const getDamageColor = (damage: number) => {
    if (damage <= 2) return 'text-green-600 bg-green-50';
    if (damage <= 5) return 'text-amber-600 bg-amber-50';
    return 'text-red-500 bg-red-50';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6 relative">
      {/* Total Damage Badge */}
      <div className="absolute top-4 right-4">
        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getDamageColor(totalDamage)}`}>
          Total Damage: {totalDamage.toFixed(1)}%
        </div>
      </div>

      <div className="flex items-center mb-6">
        <AlertTriangle className="w-5 h-5 text-green-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-700">Impurity Analysis</h3>
      </div>

      <div className="space-y-3">
        {impurityItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-green-25 rounded-lg hover:bg-green-50 transition-colors duration-200 border border-green-50">
            <div className="flex items-center space-x-3">
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium text-gray-700">{item.name}</span>
            </div>
            <span className={`font-semibold ${getDamageColor(item.value).split(' ')[0]}`}>
              {item.value.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpurityList;