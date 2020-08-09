import { listFilteredMarkets, listMarkets, getMarketSummary, getBalances, getAddresses, getMarketTicker, getHistoricCandles } from './controllers/apiRequests';

// getAddresses();
// getBalances('BTC');
// listFilteredMarkets('BTC');
// getMarketSummary('BTC-USD');
// getMarketTicker('BTC-USD');
getHistoricCandles('BTC-USD', 'MINUTE_1', [2020, 12, 10]);