import React, { useState, useEffect } from 'react';
import { MapPin, DollarSign } from 'lucide-react';
import Navigation from './components/Navigation';
import CalculatorPage from './pages/CalculatorPage';
import SupplyDemandPage from './pages/SupplyDemandPage';
import WeatherPage from './pages/WeatherPage';
import MarketSummaryPage from './pages/MarketSummaryPage';
import HistoryPage from './pages/HistoryPage';
import { Calculation } from './types';
import logo from './assets/logo.png';

function App() {
  const [currentPage, setCurrentPage] = useState('calculator');
  const [calculations, setCalculations] = useState<Calculation[]>([]);

  useEffect(() => {
    const savedCalculations = localStorage.getItem('riceCalculations');
    if (savedCalculations) {
      setCalculations(JSON.parse(savedCalculations));
    }
  }, []);

  const saveCalculation = (calculation: Calculation) => {
    const updatedCalculations = [calculation, ...calculations.slice(0, 9)];
    setCalculations(updatedCalculations);
    localStorage.setItem('riceCalculations', JSON.stringify(updatedCalculations));
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'calculator':
        return <CalculatorPage onSaveCalculation={saveCalculation} />;
      case 'supply-demand':
        return <SupplyDemandPage />;
      case 'weather':
        return <WeatherPage />;
      case 'market-summary':
        return <MarketSummaryPage />;
      case 'history':
        return <HistoryPage calculations={calculations} />;
      default:
        return <CalculatorPage onSaveCalculation={saveCalculation} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Rice Market Platform</h1>
                <p className="text-gray-600">Comprehensive rice trading and market intelligence platform</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Myanmar Markets</span>
              </div>
              <div className="flex items-center space-x-1">
                <DollarSign className="h-4 w-4" />
                <span>MMK Currency</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;