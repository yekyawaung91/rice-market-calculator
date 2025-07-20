import React from 'react';
import { History, Download, Filter, Search } from 'lucide-react';
import RecentCalculations from '../components/RecentCalculations';
import { Calculation } from '../types';

interface HistoryPageProps {
  calculations: Calculation[];
}

const HistoryPage: React.FC<HistoryPageProps> = ({ calculations }) => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-gray-500">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <History className="h-8 w-8 text-gray-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Calculation History</h1>
              <p className="text-gray-600">View and manage your saved rice price and transportation calculations</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search calculations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option value="">All Rice Varieties</option>
              <option value="paw-san-hmwe">Paw San Hmwe</option>
              <option value="emata">Emata</option>
              <option value="manaw-thukha">Manaw Thukha</option>
            </select>
          </div>
          <div>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option value="">All Regions</option>
              <option value="yangon">Yangon</option>
              <option value="mandalay">Mandalay</option>
              <option value="naypyidaw">Naypyidaw</option>
            </select>
          </div>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-700">Total Calculations</p>
              <p className="text-2xl font-bold text-blue-800">{calculations.length}</p>
            </div>
            <History className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700">Average Cost</p>
              <p className="text-2xl font-bold text-green-800">
                {calculations.length > 0 
                  ? Math.round(calculations.reduce((sum, calc) => sum + calc.totalCost, 0) / calculations.length).toLocaleString()
                  : '0'
                } MMK
              </p>
            </div>
            <div className="text-green-500">MMK</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-700">Most Used Variety</p>
              <p className="text-lg font-bold text-purple-800">
                {calculations.length > 0 ? 'Paw San Hmwe' : 'N/A'}
              </p>
            </div>
            <div className="text-purple-500">🌾</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-amber-700">Popular Route</p>
              <p className="text-lg font-bold text-amber-800">
                {calculations.length > 0 ? 'Yangon-Mandalay' : 'N/A'}
              </p>
            </div>
            <div className="text-amber-500">🚛</div>
          </div>
        </div>
      </div>

      {/* Recent Calculations */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-2 mb-6">
          <History className="h-6 w-6 text-gray-600" />
          <h2 className="text-xl font-semibold text-gray-900">Your Calculations</h2>
        </div>
        <RecentCalculations calculations={calculations} />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <h3 className="font-semibold text-gray-900 mb-2">Export to CSV</h3>
            <p className="text-sm text-gray-600">Download your calculation history as a spreadsheet</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <h3 className="font-semibold text-gray-900 mb-2">Generate Report</h3>
            <p className="text-sm text-gray-600">Create a detailed analysis report of your trading patterns</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <h3 className="font-semibold text-gray-900 mb-2">Clear History</h3>
            <p className="text-sm text-gray-600">Remove old calculations to free up storage space</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;