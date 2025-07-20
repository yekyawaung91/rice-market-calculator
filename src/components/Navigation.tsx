import React from 'react';
import { Calculator, TrendingUp, Cloud, BarChart3, History } from 'lucide-react';
import logo from '../assets/logo.png';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const menuItems = [
    { id: 'calculator', label: 'Calculator', icon: Calculator },
    { id: 'supply-demand', label: 'Supply & Demand', icon: BarChart3 },
    { id: 'weather', label: 'Weather Alerts', icon: Cloud },
    { id: 'market-summary', label: 'Market Summary', icon: TrendingUp },
    { id: 'history', label: 'Recent Calculations', icon: History }
  ];

  return (
    <nav className="bg-white shadow-lg border-b-2 border-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-gray-900">Rice Market</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <select
              value={currentPage}
              onChange={(e) => onPageChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
            >
              {menuItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;