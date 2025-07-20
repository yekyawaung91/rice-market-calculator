export interface Calculation {
  id: string;
  date: string;
  riceVariety: string;
  quantity: number;
  region: string;
  ricePrice: number;
  origin: string;
  destination: string;
  vehicleType: string;
  transportCost: number;
  totalCost: number;
}

export interface RiceVariety {
  id: string;
  name: string;
  pricePerTon: number;
  quality: 'Premium' | 'Standard' | 'Basic';
}

export interface Region {
  id: string;
  name: string;
  priceMultiplier: number;
}

export interface VehicleType {
  id: string;
  name: string;
  capacity: number;
  costPerKm: number;
}
export interface WeatherAlert {
  id: string;
  region: string;
  type: 'drought' | 'flood' | 'storm' | 'favorable';
  severity: 'low' | 'medium' | 'high';
  message: string;
  impact: string;
  date: string;
}

export interface SupplyDemandData {
  region: string;
  supply: 'low' | 'medium' | 'high';
  demand: 'low' | 'medium' | 'high';
  trend: 'increasing' | 'stable' | 'decreasing';
  percentage: number;
}

export interface CurrencyRate {
  currency: string;
  rate: number;
  symbol: string;
}