import React from 'react';
import { TrendingUp, TrendingDown, Minus, BarChart3 } from 'lucide-react';
import { supplyDemandData } from '../data/mockData';
import { SupplyDemandData } from '../types';

const SupplyDemandIndicators: React.FC = () => {
  const getSupplyColor = (level: SupplyDemandData['supply']) => {
    switch (level) {
      case 'high':
        return 'text-green-600 bg-green-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getDemandColor = (level: SupplyDemandData['demand']) => {
    switch (level) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrendIcon = (trend: SupplyDemandData['trend']) => {
    switch (trend) {
      case 'increasing':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'decreasing':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      case 'stable':
        return <Minus className="h-4 w-4 text-gray-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-600" />;
    }
  };

  const getMarketPressure = (supply: string, demand: string) => {
    if (supply === 'low' && demand === 'high') return { label: 'High Pressure', color: 'text-red-600' };
    if (supply === 'high' && demand === 'low') return { label: 'Low Pressure', color: 'text-green-600' };
    return { label: 'Moderate', color: 'text-yellow-600' };
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
      <div className="flex items-center space-x-2 mb-4">
        <BarChart3 className="h-5 w-5 text-indigo-600" />
        <h3 className="text-lg font-semibold text-gray-900">Regional Supply & Demand</h3>
      </div>

      <div className="space-y-4">
        {supplyDemandData.map((data, index) => {
          const marketPressure = getMarketPressure(data.supply, data.demand);
          
          return (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{data.region}</h4>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(data.trend)}
                  <span className="text-sm text-gray-600 capitalize">{data.trend}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Supply</div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSupplyColor(data.supply)}`}>
                    {data.supply.toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Demand</div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDemandColor(data.demand)}`}>
                    {data.demand.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Market Pressure</div>
                  <span className={`text-sm font-semibold ${marketPressure.color}`}>
                    {marketPressure.label}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Activity Index</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          data.percentage >= 80 ? 'bg-red-500' :
                          data.percentage >= 60 ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${data.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {data.percentage}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
        <div className="text-sm text-indigo-700">
          <strong>Market Insights:</strong>
          <ul className="mt-2 space-y-1 text-xs">
            <li>• High demand regions typically offer better prices for sellers</li>
            <li>• Low supply areas may experience price volatility</li>
            <li>• Activity index shows overall market engagement level</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupplyDemandIndicators;