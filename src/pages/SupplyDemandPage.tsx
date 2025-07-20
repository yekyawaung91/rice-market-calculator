import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import SupplyDemandIndicators from '../components/SupplyDemandIndicators';

const SupplyDemandPage: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
        <div className="flex items-center space-x-3">
          <BarChart3 className="h-8 w-8 text-indigo-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Regional Supply & Demand Analysis</h1>
            <p className="text-gray-600">Monitor market dynamics and trading opportunities across Myanmar regions</p>
          </div>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">High Supply Regions</p>
              <p className="text-2xl font-bold text-green-600">3</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">Bago, Ayeyarwady, Mandalay</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">High Demand Regions</p>
              <p className="text-2xl font-bold text-red-600">2</p>
            </div>
            <TrendingDown className="h-8 w-8 text-red-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">Yangon, Magway</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Market Pressure</p>
              <p className="text-2xl font-bold text-yellow-600">Medium</p>
            </div>
            <AlertCircle className="h-8 w-8 text-yellow-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">Balanced supply-demand</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Markets</p>
              <p className="text-2xl font-bold text-purple-600">8/8</p>
            </div>
            <BarChart3 className="h-8 w-8 text-purple-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">All regions operational</p>
        </div>
      </div>

      {/* Supply & Demand Indicators */}
      <div>
        <SupplyDemandIndicators />
      </div>

      {/* Trading Opportunities */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-emerald-500">
        <div className="flex items-center space-x-2 mb-6">
          <TrendingUp className="h-6 w-6 text-emerald-600" />
          <h2 className="text-xl font-semibold text-gray-900">Trading Opportunities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-3">Best Selling Opportunities</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-green-700">Yangon (High Demand)</span>
                <span className="font-semibold text-green-800">+10% premium</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-green-700">Magway (Low Supply)</span>
                <span className="font-semibold text-green-800">+12% premium</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-green-700">Naypyidaw (Stable)</span>
                <span className="font-semibold text-green-800">+8% premium</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-3">Best Buying Opportunities</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Bago (High Supply)</span>
                <span className="font-semibold text-blue-800">-5% discount</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Ayeyarwady (Surplus)</span>
                <span className="font-semibold text-blue-800">-10% discount</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Sagaing (Low Demand)</span>
                <span className="font-semibold text-blue-800">-8% discount</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyDemandPage;