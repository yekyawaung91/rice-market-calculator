import { RiceVariety, Region, VehicleType } from '../types';

import { WeatherAlert, SupplyDemandData, CurrencyRate } from '../types';

export const riceVarieties: RiceVariety[] = [
  { id: '1', name: 'Paw San Hmwe', pricePerTon: 920000, quality: 'Premium' },
  { id: '2', name: 'Paw San Yin', pricePerTon: 850000, quality: 'Premium' },
  { id: '3', name: 'Emata', pricePerTon: 780000, quality: 'Standard' },
  { id: '4', name: 'Manaw Thukha', pricePerTon: 820000, quality: 'Standard' },
  { id: '5', name: 'Shwe Bo Pawsan', pricePerTon: 890000, quality: 'Premium' },
  { id: '6', name: 'Nga Kywe', pricePerTon: 750000, quality: 'Standard' },
  { id: '7', name: 'Sin Thuka', pricePerTon: 680000, quality: 'Basic' },
  { id: '8', name: 'Thee Htat Yin', pricePerTon: 720000, quality: 'Basic' }
];

export const regions: Region[] = [
  { id: '1', name: 'Yangon', priceMultiplier: 1.1 },
  { id: '2', name: 'Mandalay', priceMultiplier: 1.05 },
  { id: '3', name: 'Naypyidaw', priceMultiplier: 1.08 },
  { id: '4', name: 'Bago', priceMultiplier: 0.95 },
  { id: '5', name: 'Ayeyarwady', priceMultiplier: 0.9 },
  { id: '6', name: 'Sagaing', priceMultiplier: 0.92 },
  { id: '7', name: 'Magway', priceMultiplier: 0.88 },
  { id: '8', name: 'Shan State', priceMultiplier: 0.98 }
];

export const vehicleTypes: VehicleType[] = [
  { id: '1', name: 'Small Truck (1-3 tons)', capacity: 3, costPerKm: 35 },
  { id: '2', name: 'Medium Truck (3-6 tons)', capacity: 6, costPerKm: 45 },
  { id: '3', name: 'Large Truck (6-10 tons)', capacity: 10, costPerKm: 60 },
  { id: '4', name: 'Heavy Truck (10+ tons)', capacity: 15, costPerKm: 80 },
  { id: '5', name: 'Container Truck', capacity: 20, costPerKm: 95 }
];

export const cities = [
  'Yangon', 'Mandalay', 'Naypyidaw', 'Bago', 'Mawlamyine', 'Pathein',
  'Monywa', 'Meiktila', 'Sittwe', 'Taunggyi', 'Lashio', 'Myitkyina',
  'Magway', 'Pyay', 'Hpa-An', 'Loikaw'
];

// Mock distance calculation (in real app, this would use a mapping service)
export const calculateDistance = (origin: string, destination: string): number => {
  if (origin === destination) return 0;
  
  // Simple mock calculation based on city names
  const cityDistances: { [key: string]: number } = {
    'Yangon-Mandalay': 650,
    'Yangon-Naypyidaw': 320,
    'Yangon-Bago': 80,
    'Mandalay-Naypyidaw': 280,
    'Mandalay-Monywa': 140,
    'Yangon-Pathein': 190,
    'Yangon-Mawlamyine': 300,
    'Mandalay-Lashio': 200,
    'Naypyidaw-Magway': 180
  };

  const key1 = `${origin}-${destination}`;
  const key2 = `${destination}-${origin}`;
  
  return cityDistances[key1] || cityDistances[key2] || Math.floor(Math.random() * 500) + 100;
};

export const weatherAlerts: WeatherAlert[] = [
  {
    id: '1',
    region: 'Ayeyarwady',
    type: 'flood',
    severity: 'high',
    message: 'Heavy rainfall expected in delta region',
    impact: 'May affect rice harvesting and transportation',
    date: '2025-01-15'
  },
  {
    id: '2',
    region: 'Magway',
    type: 'drought',
    severity: 'medium',
    message: 'Below average rainfall this season',
    impact: 'Rice yields may be reduced by 15-20%',
    date: '2025-01-14'
  },
  {
    id: '3',
    region: 'Mandalay',
    type: 'favorable',
    severity: 'low',
    message: 'Optimal weather conditions for rice cultivation',
    impact: 'Expected good harvest quality',
    date: '2025-01-13'
  }
];

export const supplyDemandData: SupplyDemandData[] = [
  { region: 'Yangon', supply: 'medium', demand: 'high', trend: 'increasing', percentage: 85 },
  { region: 'Mandalay', supply: 'high', demand: 'medium', trend: 'stable', percentage: 65 },
  { region: 'Naypyidaw', supply: 'medium', demand: 'medium', trend: 'stable', percentage: 70 },
  { region: 'Bago', supply: 'high', demand: 'low', trend: 'decreasing', percentage: 45 },
  { region: 'Ayeyarwady', supply: 'high', demand: 'medium', trend: 'increasing', percentage: 75 },
  { region: 'Sagaing', supply: 'medium', demand: 'low', trend: 'stable', percentage: 55 },
  { region: 'Magway', supply: 'low', demand: 'medium', trend: 'increasing', percentage: 80 },
  { region: 'Shan State', supply: 'medium', demand: 'medium', trend: 'stable', percentage: 68 }
];

export const currencyRates: CurrencyRate[] = [
  { currency: 'MMK', rate: 1, symbol: 'MMK' },
  { currency: 'USD', rate: 0.00048, symbol: '$' },
  { currency: 'EUR', rate: 0.00045, symbol: '€' },
  { currency: 'THB', rate: 0.016, symbol: '฿' },
  { currency: 'CNY', rate: 0.0034, symbol: '¥' }
];

// Weight/Volume conversion factors (to kg)
export const weightConversions = {
  kg: 1,
  ton: 1000,
  pound: 0.453592,
  basket: 20.4, // Traditional Myanmar rice basket
  pyi: 1.632, // Traditional Myanmar unit
  viss: 1.633 // Traditional Myanmar unit
};

// Volume conversions (to liters)
export const volumeConversions = {
  liter: 1,
  gallon: 3.78541,
  pint: 0.473176,
  tin: 16.3, // Traditional Myanmar unit
  condensed_milk_tin: 0.397 // Common reference in Myanmar
};