import React from 'react';
import { TrendingUp, DollarSign, BarChart3, Activity, ArrowUp, ArrowDown } from 'lucide-react';

const MarketSummaryPage: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-emerald-500">
        <div className="flex items-center space-x-3">
          <TrendingUp className="h-8 w-8 text-emerald-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Market Summary & Analytics</h1>
            <p className="text-gray-600">Comprehensive overview of rice market trends and performance indicators</p>
          </div>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-emerald-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-emerald-700">Average Price</p>
              <p className="text-2xl font-bold text-emerald-800">850,000 MMK</p>
              <p className="text-xs text-emerald-600">per ton</p>
            </div>
            <DollarSign className="h-8 w-8 text-emerald-500" />
          </div>
          <div className="flex items-center mt-2">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+2.5% this week</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-700">Trading Volume</p>
              <p className="text-2xl font-bold text-blue-800">12,450</p>
              <p className="text-xs text-blue-600">tons this week</p>
            </div>
            <BarChart3 className="h-8 w-8 text-blue-500" />
          </div>
          <div className="flex items-center mt-2">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+8.3% vs last week</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-700">Active Markets</p>
              <p className="text-2xl font-bold text-purple-800">8/8</p>
              <p className="text-xs text-purple-600">regions</p>
            </div>
            <Activity className="h-8 w-8 text-purple-500" />
          </div>
          <div className="flex items-center mt-2">
            <span className="text-sm text-gray-600">All regions operational</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-amber-700">Weather Risk</p>
              <p className="text-2xl font-bold text-amber-800">Medium</p>
              <p className="text-xs text-amber-600">risk level</p>
            </div>
            <TrendingUp className="h-8 w-8 text-amber-500" />
          </div>
          <div className="flex items-center mt-2">
            <span className="text-sm text-amber-600">2 regions affected</span>
          </div>
        </div>
      </div>

      {/* Market Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Regional Performance */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Regional Performance</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
              <div>
                <p className="font-semibold text-green-800">Yangon</p>
                <p className="text-sm text-green-600">High demand, premium prices</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-800">+5.2%</p>
                <p className="text-xs text-green-600">vs avg</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
              <div>
                <p className="font-semibold text-green-800">Ayeyarwady</p>
                <p className="text-sm text-green-600">Good supply, stable prices</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-800">+3.8%</p>
                <p className="text-xs text-green-600">vs avg</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div>
                <p className="font-semibold text-blue-800">Mandalay</p>
                <p className="text-sm text-blue-600">Moderate activity</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-blue-800">+2.1%</p>
                <p className="text-xs text-blue-600">vs avg</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div>
                <p className="font-semibold text-yellow-800">Magway</p>
                <p className="text-sm text-yellow-600">Weather concerns</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-yellow-800">-1.5%</p>
                <p className="text-xs text-yellow-600">vs avg</p>
              </div>
            </div>
          </div>
        </div>

        {/* Price Trends */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Price Trends (Last 30 Days)</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
              <div>
                <p className="font-semibold text-emerald-800">Paw San Hmwe</p>
                <p className="text-sm text-emerald-600">Premium variety</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-emerald-800">920,000 MMK</p>
                <div className="flex items-center">
                  <ArrowUp className="h-4 w-4 text-green-500" />
                  <span className="text-xs text-green-600">+3.2%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div>
                <p className="font-semibold text-blue-800">Emata</p>
                <p className="text-sm text-blue-600">Standard variety</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-blue-800">780,000 MMK</p>
                <div className="flex items-center">
                  <ArrowUp className="h-4 w-4 text-green-500" />
                  <span className="text-xs text-green-600">+1.8%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <div>
                <p className="font-semibold text-gray-800">Sin Thuka</p>
                <p className="text-sm text-gray-600">Basic variety</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-800">680,000 MMK</p>
                <div className="flex items-center">
                  <ArrowDown className="h-4 w-4 text-red-500" />
                  <span className="text-xs text-red-600">-0.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Insights */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Market Insights & Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-indigo-800">Key Market Drivers</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                <span>Increased demand from Yangon urban markets driving premium prices</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></span>
                <span>Weather concerns in Magway affecting supply expectations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                <span>Transportation costs stable across major routes</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                <span>Export opportunities emerging in neighboring markets</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-indigo-800">Trading Recommendations</h3>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="font-medium text-green-800">Buy Opportunity</p>
                <p className="text-sm text-green-600">Ayeyarwady surplus creating favorable buying conditions</p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-medium text-blue-800">Hold Strategy</p>
                <p className="text-sm text-blue-600">Premium varieties showing strong upward momentum</p>
              </div>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="font-medium text-yellow-800">Monitor Closely</p>
                <p className="text-sm text-yellow-600">Weather developments in drought-affected regions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSummaryPage;