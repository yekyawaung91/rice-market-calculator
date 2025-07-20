import React from 'react';
import { Cloud, AlertTriangle, MapPin, Calendar } from 'lucide-react';
import WeatherAlerts from '../components/WeatherAlerts';

const WeatherPage: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
        <div className="flex items-center space-x-3">
          <Cloud className="h-8 w-8 text-orange-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Weather Impact Alerts</h1>
            <p className="text-gray-600">Monitor weather conditions affecting rice production and transportation</p>
          </div>
        </div>
      </div>

      {/* Weather Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">High Risk Areas</h3>
            <AlertTriangle className="h-6 w-6 text-red-500" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-red-500" />
              <span className="text-sm text-gray-700">Ayeyarwady - Flood Risk</span>
            </div>
            <p className="text-xs text-gray-500">Heavy rainfall expected, may affect harvesting</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Medium Risk Areas</h3>
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-gray-700">Magway - Drought Conditions</span>
            </div>
            <p className="text-xs text-gray-500">Below average rainfall, yield reduction expected</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Favorable Conditions</h3>
            <Cloud className="h-6 w-6 text-green-500" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-700">Mandalay - Optimal Weather</span>
            </div>
            <p className="text-xs text-gray-500">Good harvest quality expected</p>
          </div>
        </div>
      </div>

      {/* Weather Alerts Component */}
      <div>
        <WeatherAlerts />
      </div>

      {/* Weather Impact Analysis */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
        <div className="flex items-center space-x-2 mb-6">
          <Calendar className="h-6 w-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">7-Day Weather Impact Forecast</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Production Impact</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                <div>
                  <p className="font-medium text-red-800">Ayeyarwady Delta</p>
                  <p className="text-sm text-red-600">Flood risk - harvest delays expected</p>
                </div>
                <span className="text-red-700 font-bold">-15%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div>
                  <p className="font-medium text-yellow-800">Magway Region</p>
                  <p className="text-sm text-yellow-600">Drought conditions - yield reduction</p>
                </div>
                <span className="text-yellow-700 font-bold">-20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                <div>
                  <p className="font-medium text-green-800">Mandalay Region</p>
                  <p className="text-sm text-green-600">Favorable conditions</p>
                </div>
                <span className="text-green-700 font-bold">+5%</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Transportation Impact</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                <div>
                  <p className="font-medium text-red-800">Delta Routes</p>
                  <p className="text-sm text-red-600">Flooding may block major highways</p>
                </div>
                <span className="text-red-700 font-bold">+25%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div>
                  <p className="font-medium text-yellow-800">Central Routes</p>
                  <p className="text-sm text-yellow-600">Dust storms possible</p>
                </div>
                <span className="text-yellow-700 font-bold">+10%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                <div>
                  <p className="font-medium text-green-800">Northern Routes</p>
                  <p className="text-sm text-green-600">Clear weather expected</p>
                </div>
                <span className="text-green-700 font-bold">Normal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;