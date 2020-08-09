import { apiRequest } from './apiRequest';
import { BBalance, BAddress, BMarket, BMarketSummary, BTicker, BCandle } from '../types/bittrex';

// getBalance
export const getBalances = async (symbol?: string): Promise<BBalance[]> => {
  let extension = '/balances' + (symbol ? '/' + symbol : '');
  console.log(extension);
  let balances = apiRequest({endpoint: extension, method: 'GET', content: ''});
  let results = await balances;
  console.log(results.data);
  return results.data;
}

// getAddresses (for a particular currency if specified)
export const getAddresses = async (symbol?: string): Promise<BAddress[]> => {
  let extension = '/addresses' + symbol ? '/' + symbol : '';
  let addresses = await apiRequest({endpoint: extension, method: 'GET', content: ''});
  let results = await addresses;
  console.log(results.data);
  return results.data;
}

// ------ Markets ----- \\
export const listMarkets = async (): Promise<BMarket[]> => {
  let extension = '/markets';
  let marketResponse = await apiRequest({
    endpoint: extension,
    method: 'GET',
    content: ''});
  let results = await marketResponse;
  console.log(results.data);
  return results.data;
}

export const listFilteredMarkets = async (symbol: string): Promise<BMarket[]> => {
  let markets = listMarkets();
  let filteredMarkets = await markets;
  console.log(filteredMarkets);
  return filteredMarkets;
}

export const getMarketSummary = async (symbol: string): Promise<BMarketSummary> => {
  let extension = '/markets/' + symbol + '/summary';
  let marketSummary = apiRequest({endpoint: extension, method: 'GET', content: ''});
  let results = await marketSummary;
  console.log(results.data);
  return results.data;
}

export const getMarketTicker = async (symbol: string): Promise<BTicker> => {
  let extension = '/markets/' + symbol + '/ticker';
  let marketTicker = apiRequest({endpoint: extension, method: 'GET', content: ''});
  let results = await marketTicker;
  console.log(results.data);
  return results.data;
}

export const getHistoricCandles = async (
  symbol: string,
  interval: string, // MINUTE_1, MINUTE_5, HOUR_1, DAY_1
  dateArgs: number[]): Promise<BCandle[]> => {
  let allowed_time_intervals: string[] = ["MINUTE_1", "MINUTE_5", "HOUR_1", "DAY_1"];
  if (allowed_time_intervals.indexOf(interval) < 0) {
    console.log('Interval given not valid, defaulting to MINUTE_1');
    interval = "MINUTE_1";
  }

  let extension = '/markets/' + symbol + '/candles/' + interval + '/historical/' + dateArgs.join('/');
  console.log(extension);
  let historicCandles = await apiRequest({endpoint: extension, method: 'GET', content: ''});
  let results = await historicCandles;
  console.log(results);
  return results.data;
}
