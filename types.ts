export interface Asset {
  id: string
  symbol: string
  name: string
  image?: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  fully_diluted_valuation: number | null
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  circulating_supply: number
  total_supply: number | null
  max_supply: number | null
  ath: number
  ath_change_percentage: number
  ath_date: string
  atl: number
  atl_change_percentage: number
  atl_date: string
  last_updated: string
  price_change_percentage_7d_in_currency?: number
  price_change_percentage_30d_in_currency?: number
  sparkline_in_7d?: {
    price: number[]
  }
  category?: string
  type?: "crypto" | "stock"
}

export interface MarketNews {
  id: string
  title: string
  source: string
  published_at: string
  url: string
}

export interface PortfolioSummary {
  totalValue: number
  stockHoldings: number
  cryptoHoldings: number
  cashBalance: number
  percentageChange: number
  stockPercentageChange: number
  cryptoPercentageChange: number
}

export interface HistoricalData {
  date: string
  value: number
}

export interface MarketMover {
  id: string
  symbol: string
  name: string
  price: number
  change_percentage: number
}

export interface SearchResult {
  id: string
  symbol: string
  name: string
  type: "crypto" | "stock"
  image?: string
}

