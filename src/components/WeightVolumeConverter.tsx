import React, { useState } from 'react';
import { Scale, ArrowRightLeft } from 'lucide-react';
import { weightConversions, volumeConversions } from '../data/mockData';

const WeightVolumeConverter: React.FC = () => {
  const [conversionType, setConversionType] = useState<'weight' | 'volume'>('weight');
  const [inputValue, setInputValue] = useState<number>(1);
  const [fromUnit, setFromUnit] = useState('kg');
  const [toUnit, setToUnit] = useState('ton');

  const getConversions = () => {
    return conversionType === 'weight' ? weightConversions : volumeConversions;
  };

  const convertValue = (value: number, from: string, to: string): number => {
    const conversions = getConversions();
    const fromFactor = conversions[from as keyof typeof conversions] || 1;
    const toFactor = conversions[to as keyof typeof conversions] || 1;
    
    // Convert to base unit first, then to target unit
    const baseValue = value * fromFactor;
    return baseValue / toFactor;
  };

  const convertedValue = convertValue(inputValue, fromUnit, toUnit);

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const getUnitOptions = () => {
    const conversions = getConversions();
    return Object.keys(conversions).map(unit => ({
      value: unit,
      label: unit === 'basket' ? 'Basket (Traditional)' :
             unit === 'pyi' ? 'Pyi (Traditional)' :
             unit === 'viss' ? 'Viss (Traditional)' :
             unit === 'tin' ? 'Tin (Traditional)' :
             unit === 'condensed_milk_tin' ? 'Condensed Milk Tin' :
             unit.charAt(0).toUpperCase() + unit.slice(1)
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
      <div className="flex items-center space-x-2 mb-4">
        <Scale className="h-5 w-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-900">Weight/Volume Converter</h3>
      </div>

      <div className="space-y-4">
        {/* Conversion Type Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => {
              setConversionType('weight');
              setFromUnit('kg');
              setToUnit('ton');
            }}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              conversionType === 'weight'
                ? 'bg-white text-purple-600 shadow-sm'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Weight
          </button>
          <button
            onClick={() => {
              setConversionType('volume');
              setFromUnit('liter');
              setToUnit('gallon');
            }}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              conversionType === 'volume'
                ? 'bg-white text-purple-600 shadow-sm'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Volume
          </button>
        </div>

        {/* Input Value */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter {conversionType} value
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={inputValue}
            onChange={(e) => setInputValue(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Unit Selection */}
        <div className="flex items-center space-x-2">
          <div className="flex-1">
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            >
              {getUnitOptions().map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>
          
          <button
            onClick={swapUnits}
            className="p-2 text-gray-400 hover:text-purple-600 transition-colors"
          >
            <ArrowRightLeft className="h-4 w-4" />
          </button>
          
          <div className="flex-1">
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            >
              {getUnitOptions().map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Conversion Result */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
          <div className="text-sm text-purple-700 mb-1">Converted Value</div>
          <div className="text-xl font-bold text-purple-800">
            {convertedValue.toLocaleString(undefined, { 
              minimumFractionDigits: 2, 
              maximumFractionDigits: 4 
            })} {toUnit}
          </div>
          <div className="text-xs text-purple-600 mt-1">
            {inputValue} {fromUnit} = {convertedValue.toLocaleString(undefined, { 
              minimumFractionDigits: 2, 
              maximumFractionDigits: 4 
            })} {toUnit}
          </div>
        </div>

        {conversionType === 'weight' && (
          <div className="text-xs text-gray-500">
            Traditional Myanmar units: 1 Basket ≈ 20.4kg, 1 Pyi ≈ 1.63kg, 1 Viss ≈ 1.63kg
          </div>
        )}
      </div>
    </div>
  );
};

export default WeightVolumeConverter;