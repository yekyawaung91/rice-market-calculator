import React from 'react';
import { vehicleTypes, cities, calculateDistance } from '../data/mockData';

interface TransportationCalculatorProps {
  onDataChange: (data: any) => void;
  data: any;
}

const TransportationCalculator: React.FC<TransportationCalculatorProps> = ({ onDataChange, data }) => {
  const calculateTransportCost = (origin: string, destination: string, vehicleTypeId: string) => {
    if (!origin || !destination || !vehicleTypeId) return 0;
    
    const distance = calculateDistance(origin, destination);
    const vehicle = vehicleTypes.find(v => v.id === vehicleTypeId);
    
    if (vehicle) {
      return distance * vehicle.costPerKm;
    }
    return 0;
  };

  const handleOriginChange = (origin: string) => {
    const cost = calculateTransportCost(origin, data.destination, data.vehicleTypeId);
    onDataChange({
      ...data,
      origin,
      cost: Math.round(cost)
    });
  };

  const handleDestinationChange = (destination: string) => {
    const cost = calculateTransportCost(data.origin, destination, data.vehicleTypeId);
    onDataChange({
      ...data,
      destination,
      cost: Math.round(cost)
    });
  };

  const handleVehicleTypeChange = (vehicleTypeId: string) => {
    const vehicle = vehicleTypes.find(v => v.id === vehicleTypeId);
    const cost = calculateTransportCost(data.origin, data.destination, vehicleTypeId);
    
    onDataChange({
      ...data,
      vehicleType: vehicle?.name || '',
      vehicleTypeId,
      cost: Math.round(cost)
    });
  };

  const distance = data.origin && data.destination ? calculateDistance(data.origin, data.destination) : 0;

  return (
    <div className="space-y-6">
      {/* Origin Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Origin City
        </label>
        <select
          value={data.origin || ''}
          onChange={(e) => handleOriginChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
        >
          <option value="">Select origin</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Destination Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Destination City
        </label>
        <select
          value={data.destination || ''}
          onChange={(e) => handleDestinationChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
        >
          <option value="">Select destination</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Vehicle Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Vehicle Type
        </label>
        <select
          value={data.vehicleTypeId || ''}
          onChange={(e) => handleVehicleTypeChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
        >
          <option value="">Select vehicle type</option>
          {vehicleTypes.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.name} - {vehicle.costPerKm} MMK/km (Capacity: {vehicle.capacity} tons)
            </option>
          ))}
        </select>
      </div>

      {/* Distance and Cost Display */}
      {distance > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-amber-700">Distance:</span>
              <span className="font-semibold text-amber-800">{distance} km</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-amber-700">Rate:</span>
              <span className="font-semibold text-amber-800">
                {vehicleTypes.find(v => v.id === data.vehicleTypeId)?.costPerKm || 0} MMK/km
              </span>
            </div>
            <div className="border-t border-amber-300 pt-2">
              <div className="flex justify-between">
                <span className="text-amber-700">Transport Cost:</span>
                <span className="text-xl font-bold text-amber-800">
                  {data.cost.toLocaleString()} MMK
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransportationCalculator;