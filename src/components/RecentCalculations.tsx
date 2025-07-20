import React from 'react';
import { Trash2, Eye } from 'lucide-react';
import { Calculation } from '../types';

interface RecentCalculationsProps {
  calculations: Calculation[];
}

const RecentCalculations: React.FC<RecentCalculationsProps> = ({ calculations }) => {
  if (calculations.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No recent calculations found.</p>
        <p className="text-sm mt-1">Complete a calculation to see it saved here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {calculations.map((calc) => (
        <div key={calc.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {calc.riceVariety}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {calc.quantity} tons
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  {calc.region}
                </span>
              </div>
              
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex items-center gap-4">
                  <span>Route: {calc.origin} → {calc.destination}</span>
                  <span>Vehicle: {calc.vehicleType}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>Rice: {calc.ricePrice.toLocaleString()} MMK</span>
                  <span>Transport: {calc.transportCost.toLocaleString()} MMK</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900">
                  {calc.totalCost.toLocaleString()} MMK
                </div>
                <div className="text-xs text-gray-500">{calc.date}</div>
              </div>
              
              <div className="flex items-center gap-1">
                <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentCalculations;