import React, { useState } from 'react';
import { ArrowRightLeft, CircleDollarSign } from 'lucide-react';
import { currencyRates } from '../data/mockData';

interface CurrencyConverterProps {
  amount: number;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ amount }) => {
  const [fromCurrency, setFromCurrency] = useState('MMK');
  const [toCurrency, setToCurrency] = useState('USD');

  const convertCurrency = (amount: number, from: string, to: string): number => {
    if (amount === 0) return 0;
    
    const fromCurrency = currencyRates.find(r => r.currency === from);
    const toCurrency = currencyRates.find(r => r.currency === to);
    
    if (!fromCurrency || !toCurrency) return 0;
    
    // If converting from MMK to another currency
    if (from === 'MMK') {
      return amount * toCurrency.rate;
    }
    
    // If converting to MMK from another currency
    if (to === 'MMK') {
      return amount / fromCurrency.rate;
    }
    
    // Convert through MMK for other currency pairs
    const mmkAmount = amount / fromCurrency.rate;
    return mmkAmount * toCurrency.rate;
  };

  const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
  const toCurrencySymbol = currencyRates.find(r => r.currency === toCurrency)?.symbol || '';

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
      <div className="flex items-center space-x-2 mb-4">
        <CircleDollarSign className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Currency Converter</h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="flex-1">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            >
              {currencyRates.map((currency) => (
                <option key={currency.currency} value={currency.currency}>
                  {currency.currency} ({currency.symbol})
                </option>
              ))}
            </select>
          </div>
          
          <button
            onClick={swapCurrencies}
            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
          >
            <ArrowRightLeft className="h-4 w-4" />
          </button>
          
          <div className="flex-1">
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            >
              {currencyRates.map((currency) => (
                <option key={currency.currency} value={currency.currency}>
                  {currency.currency} ({currency.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="text-sm text-blue-700 mb-1">Converted Amount</div>
          <div className="text-xl font-bold text-blue-800">
            {toCurrencySymbol}{convertedAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
          <div className="text-xs text-blue-600 mt-1">
            {amount.toLocaleString()} {fromCurrency} = {convertedAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {toCurrency}
          </div>
        </div>

        <div className="text-xs text-gray-500">
          Exchange rates are indicative and may vary from actual market rates
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;