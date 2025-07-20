import React from 'react';
import { Cloud, CloudRain, Sun, AlertTriangle, Info } from 'lucide-react';
import { weatherAlerts } from '../data/mockData';
import { WeatherAlert } from '../types';

const WeatherAlerts: React.FC = () => {
  const getWeatherIcon = (type: WeatherAlert['type']) => {
    switch (type) {
      case 'flood':
        return <CloudRain className="h-5 w-5" />;
      case 'drought':
        return <Sun className="h-5 w-5" />;
      case 'storm':
        return <Cloud className="h-5 w-5" />;
      case 'favorable':
        return <Sun className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  const getAlertColor = (severity: WeatherAlert['severity'], type: WeatherAlert['type']) => {
    if (type === 'favorable') {
      return {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
        icon: 'text-green-600'
      };
    }

    switch (severity) {
      case 'high':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          text: 'text-red-700',
          icon: 'text-red-600'
        };
      case 'medium':
        return {
          bg: 'bg-yellow-50',
          border: 'border-yellow-200',
          text: 'text-yellow-700',
          icon: 'text-yellow-600'
        };
      case 'low':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-700',
          icon: 'text-blue-600'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          text: 'text-gray-700',
          icon: 'text-gray-600'
        };
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
      <div className="flex items-center space-x-2 mb-4">
        <AlertTriangle className="h-5 w-5 text-orange-600" />
        <h3 className="text-lg font-semibold text-gray-900">Weather Impact Alerts</h3>
      </div>

      <div className="space-y-3">
        {weatherAlerts.map((alert) => {
          const colors = getAlertColor(alert.severity, alert.type);
          return (
            <div
              key={alert.id}
              className={`${colors.bg} ${colors.border} border rounded-lg p-4`}
            >
              <div className="flex items-start space-x-3">
                <div className={`${colors.icon} mt-0.5`}>
                  {getWeatherIcon(alert.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className={`font-semibold ${colors.text}`}>
                      {alert.region} - {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
                    </h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      alert.severity === 'high' ? 'bg-red-100 text-red-700' :
                      alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className={`text-sm ${colors.text} mb-2`}>
                    {alert.message}
                  </p>
                  <p className={`text-xs ${colors.text} opacity-80`}>
                    <strong>Impact:</strong> {alert.impact}
                  </p>
                  <p className={`text-xs ${colors.text} opacity-60 mt-1`}>
                    {alert.date}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 text-xs text-gray-500">
        Weather alerts are updated daily and may affect rice prices and transportation
      </div>
    </div>
  );
};

export default WeatherAlerts;