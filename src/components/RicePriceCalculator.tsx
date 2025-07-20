import React from 'react';
import { riceVarieties, regions } from '../data/mockData';

interface RicePriceCalculatorProps {
  onDataChange: (data: any) => void;
  data: any;
}

const RicePriceCalculator: React.FC<RicePriceCalculatorProps> = ({ onDataChange, data }) => {
  const handleVarietyChange = (varietyId: string) => {
    const variety = riceVarieties.find(v => v.id === varietyId);
    if (variety) {
      const region = regions.find(r => r.id === data.regionId);
      const basePrice = variety.pricePerTon * (data.quantity || 0);
      const price = region ? basePrice * region.priceMultiplier : basePrice;
      
      onDataChange({
        ...data,
        variety: variety.name,
        varietyId,
        price: Math.round(price)
      });
    }
  };

  const handleQuantityChange = (quantity: number) => {
    const variety = riceVarieties.find(v => v.id === data.varietyId);
    if (variety) {
      const region = regions.find(r => r.id === data.regionId);
      const basePrice = variety.pricePerTon * quantity;
      const price = region ? basePrice * region.priceMultiplier : basePrice;
      
      onDataChange({
        ...data,
        quantity,
        price: Math.round(price)
      });
    }
  };

  const handleRegionChange = (regionId: string) => {
    const region = regions.find(r => r.id === regionId);
    const variety = riceVarieties.find(v => v.id === data.varietyId);
    
    if (region && variety) {
      const basePrice = variety.pricePerTon * (data.quantity || 0);
      const price = basePrice * region.priceMultiplier;
      
      onDataChange({
        ...data,
        region: region.name,
        regionId,
        price: Math.round(price)
      });
    } else if (region) {
      onDataChange({
        ...data,
        region: region.name,
        regionId
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Rice Variety Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Rice Variety
        </label>
        <select
          value={data.varietyId || ''}
          onChange={(e) => handleVarietyChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
        >
          <option value="">Select rice variety</option>
          {riceVarieties.map((variety) => (
            <option key={variety.id} value={variety.id}>
              {variety.name} - {variety.pricePerTon.toLocaleString()} MMK/ton ({variety.quality})
            </option>
          ))}
        </select>
      </div>

      {/* Quantity Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quantity (tons)
        </label>
        <input
          type="number"
          min="0"
          step="0.1"
          value={data.quantity || ''}
          onChange={(e) => handleQuantityChange(parseFloat(e.target.value) || 0)}
          placeholder="Enter quantity in tons"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
        />
      </div>

      {/* Region Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Region
        </label>
        <select
          value={data.regionId || ''}
          onChange={(e) => handleRegionChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
        >
          <option value="">Select region</option>
          {regions.map((region) => (
            <option key={region.id} value={region.id}>
              {region.name} ({region.priceMultiplier > 1 ? '+' : ''}{((region.priceMultiplier - 1) * 100).toFixed(0)}%)
            </option>
          ))}
        </select>
      </div>

      {/* Price Display */}
      {data.variety && data.quantity > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="text-sm text-green-700 mb-1">Estimated Rice Cost</div>
          <div className="text-2xl font-bold text-green-800">
            {data.price.toLocaleString()} MMK
          </div>
          <div className="text-sm text-green-600 mt-1">
            {data.quantity} tons of {data.variety} in {data.region || 'selected region'}
          </div>
        </div>
      )}
    </div>
  );
};

export default RicePriceCalculator;