export interface BAddress {
  status: string, // REQUESTED or PROVISIONED
  currencySymbol: string,
  cryptoAddress?:  string,
  cryptoAddressTag?: string
}

export interface BBalance {
  currencySymbol: string,
  total: number,
  available: number,
  updatedAt: string
}

export interface BMarket {
  symbol: string,
  baseCurrencySymbol: string,
  quoteCurrencySymbol: string,
  minTradeSize: number,
  precision: number,
  state: string, // ONLINE or OFFLINE
  createdAt: string //date-time timestamp in UTC
  notice: string,
  prohibitedIn: string[]
}

export interface BMarketSummary {
  symbol: string,
  high: number, //within the last 24 hours
  low: number, //within the last 24 hours
  volume: number, //within the last 24 hours
  quoteVolume: number,
  percentChange: number,
  updatedAt: string // date-time in UTC
}

export interface BTicker {
  symbol: string,
  lastTradeRate: number,
  bidRate: number,
  askRate: number
}

export interface BCandle {
startsAt: string,
open: number,
high: number,
low: number,
close: number,
volume: number,
quoteVolume: number
}
