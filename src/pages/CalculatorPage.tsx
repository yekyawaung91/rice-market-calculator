import React, { useState } from 'react';
import { Calculator, Truck, Package, CircleDollarSign } from 'lucide-react';
import RicePriceCalculator from '../components/RicePriceCalculator';
import TransportationCalculator from '../components/TransportationCalculator';
import CurrencyConverter from '../components/CurrencyConverter';
import WeightVolumeConverter from '../components/WeightVolumeConverter';
import { Calculation } from '../types';

interface CalculatorPageProps {
  onSaveCalculation: (calculation: Calculation) => void;
}

const CalculatorPage: React.FC<CalculatorPageProps> = ({ onSaveCalculation }) => {
  const [riceData, setRiceData] = useState({
    variety: '',
    varietyId: '',
    quantity: 0,
    region: '',
    regionId: '',
    price: 0
  });
  
  const [transportData, setTransportData] = useState({
    origin: '',
    destination: '',
    vehicleType: '',
    vehicleTypeId: '',
    cost: 0
  });

  const saveCalculation = () => {
    if (riceData.variety && transportData.origin && transportData.destination) {
      const newCalculation: Calculation = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString(),
        riceVariety: riceData.variety,
        quantity: riceData.quantity,
        region: riceData.region,
        ricePrice: riceData.price,
        origin: transportData.origin,
        destination: transportData.destination,
        vehicleType: transportData.vehicleType,
        transportCost: transportData.cost,
        totalCost: riceData.price + transportData.cost
      };

      onSaveCalculation(newCalculation);
    }
  };

  const totalCost = riceData.price + transportData.cost;

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
        <div className="flex items-center space-x-3">
          <Calculator className="h-8 w-8 text-green-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Rice Price & Transportation Calculator</h1>
            <p className="text-gray-600">Calculate rice prices and transportation costs for informed trading decisions</p>
          </div>
        </div>
      </div>

      {/* Main Calculators */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Rice Price Calculator */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center space-x-2 mb-6">
              <Package className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Rice Price Calculator</h2>
            </div>
            <RicePriceCalculator 
              onDataChange={setRiceData}
              data={riceData}
            />
          </div>
        </div>

        {/* Transportation Calculator */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
            <div className="flex items-center space-x-2 mb-6">
              <Truck className="h-6 w-6 text-amber-600" />
              <h2 className="text-xl font-semibold text-gray-900">Transportation Cost</h2>
            </div>
            <TransportationCalculator 
              onDataChange={setTransportData}
              data={transportData}
            />
          </div>
        </div>

        {/* Total Cost & Actions */}
        <div className="lg:col-span-1 space-y-6">
          {/* Total Cost Summary */}
          <div className="bg-gradient-to-r from-green-500 to-amber-500 rounded-xl shadow-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-4">Total Estimated Cost</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Rice Cost:</span>
                <span className="font-bold">{riceData.price.toLocaleString()} MMK</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Transport Cost:</span>
                <span className="font-bold">{transportData.cost.toLocaleString()} MMK</span>
              </div>
              <div className="border-t border-white/30 pt-3">
                <div className="flex justify-between items-center text-xl">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold">{totalCost.toLocaleString()} MMK</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-white py-4">
              Overview of the total estimated cost, including rice and transport expenses. Final amount shown below. Click 'Save calculation' to store this estimate.
            </div>
            <button
              onClick={saveCalculation}
              disabled={!riceData.variety || !transportData.origin}
              className="w-full mt-6 bg-white text-green-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4"
            >
              Save Calculation
            </button>
          </div>

          
        </div>
      </div>

      {/* Market Insights */}
          <div className="bg-gradient-to-r from-green-500 to-red-500 rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <CircleDollarSign className="h-5 w-5 text-white" />
              <h3 className="text-lg font-semibold text-white">Market Insights</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-white">Average Rice Price:</span>
                <span className="font-semibold text-white">850,000 MMK/ton</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Transport Rate:</span>
                <span className="font-semibold text-white">45 MMK/km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Market Status:</span>
                <span className="text-white font-semibold">Stable</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Price Trend:</span>
                <span className="text-white font-semibold">+2.5% this week</span>
              </div>
            </div>
          </div>

      {/* Converter Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Currency Converter */}
        <div>
          <CurrencyConverter amount={totalCost} />
        </div>

        {/* Weight/Volume Converter */}
        <div>
          <WeightVolumeConverter />
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;