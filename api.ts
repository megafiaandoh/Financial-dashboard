import type { Asset, HistoricalData, MarketMover, MarketNews, PortfolioSummary, SearchResult } from "./types"

// This would be replaced with actual API calls in a production environment
export async function fetchCryptoAssets(): Promise<Asset[]> {
  // In a real app, we would fetch from CoinGecko or similar API
  // For demo purposes, we'll return mock data
  return [
    {
      id: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
      current_price: 43210.5,
      market_cap: 846573819564,
      market_cap_rank: 1,
      fully_diluted_valuation: 907402834050,
      total_volume: 28547896321,
      high_24h: 44102.12,
      low_24h: 42789.34,
      price_change_24h: 1021.23,
      price_change_percentage_24h: 2.8,
      market_cap_change_24h: 19874563210,
      market_cap_change_percentage_24h: 2.4,
      circulating_supply: 19584325,
      total_supply: 21000000,
      max_supply: 21000000,
      ath: 69045,
      ath_change_percentage: -37.42,
      ath_date: "2021-11-10T14:24:11.849Z",
      atl: 67.81,
      atl_change_percentage: 63613.12,
      atl_date: "2013-07-06T00:00:00.000Z",
      last_updated: "2023-06-15T12:30:45.678Z",
      sparkline_in_7d: {
        price: [42189.34, 42567.89, 43012.45, 42897.12, 43156.78, 43210.5],
      },
      type: "crypto",
    },
    {
      id: "ethereum",
      symbol: "eth",
      name: "Ethereum",
      image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
      current_price: 2305.75,
      market_cap: 276982345678,
      market_cap_rank: 2,
      fully_diluted_valuation: 276982345678,
      total_volume: 12345678901,
      high_24h: 2350.45,
      low_24h: 2290.12,
      price_change_24h: -11.65,
      price_change_percentage_24h: -0.5,
      market_cap_change_24h: -1345678901,
      market_cap_change_percentage_24h: -0.48,
      circulating_supply: 120123456,
      total_supply: null,
      max_supply: null,
      ath: 4878.26,
      ath_change_percentage: -52.73,
      ath_date: "2021-11-10T14:24:19.604Z",
      atl: 0.432979,
      atl_change_percentage: 532645.12,
      atl_date: "2015-10-20T00:00:00.000Z",
      last_updated: "2023-06-15T12:30:45.678Z",
      sparkline_in_7d: {
        price: [2290.12, 2310.45, 2325.67, 2315.89, 2300.23, 2305.75],
      },
      type: "crypto",
    },
  ]
}

export async function fetchStockAssets(): Promise<Asset[]> {
  // In a real app, we would fetch from Alpha Vantage or similar API
  return [
    {
      id: "sp500",
      symbol: "SPX",
      name: "S&P 500",
      current_price: 5232.32,
      market_cap: 0,
      market_cap_rank: 0,
      fully_diluted_valuation: null,
      total_volume: 0,
      high_24h: 5245.67,
      low_24h: 5210.45,
      price_change_24h: 63.45,
      price_change_percentage_24h: 1.23,
      market_cap_change_24h: 0,
      market_cap_change_percentage_24h: 0,
      circulating_supply: 0,
      total_supply: null,
      max_supply: null,
      ath: 5300.12,
      ath_change_percentage: -1.28,
      ath_date: "2023-05-30T00:00:00.000Z",
      atl: 0,
      atl_change_percentage: 0,
      atl_date: "",
      last_updated: "2023-06-15T12:30:45.678Z",
      category: "US Large Cap",
      type: "stock",
    },
    {
      id: "nasdaq",
      symbol: "NDAQ",
      name: "Nasdaq",
      current_price: 16742.39,
      market_cap: 0,
      market_cap_rank: 0,
      fully_diluted_valuation: null,
      total_volume: 0,
      high_24h: 16800.12,
      low_24h: 16700.45,
      price_change_24h: 258.67,
      price_change_percentage_24h: 1.56,
      market_cap_change_24h: 0,
      market_cap_change_percentage_24h: 0,
      circulating_supply: 0,
      total_supply: null,
      max_supply: null,
      ath: 16900.34,
      ath_change_percentage: -0.93,
      ath_date: "2023-05-30T00:00:00.000Z",
      atl: 0,
      atl_change_percentage: 0,
      atl_date: "",
      last_updated: "2023-06-15T12:30:45.678Z",
      category: "US Tech",
      type: "stock",
    },
    {
      id: "aapl",
      symbol: "AAPL",
      name: "Apple Inc.",
      current_price: 182.52,
      market_cap: 2850000000000,
      market_cap_rank: 1,
      fully_diluted_valuation: null,
      total_volume: 58900000,
      high_24h: 183.45,
      low_24h: 181.23,
      price_change_24h: 5.67,
      price_change_percentage_24h: 3.2,
      market_cap_change_24h: 89000000000,
      market_cap_change_percentage_24h: 3.1,
      circulating_supply: 15600000000,
      total_supply: null,
      max_supply: null,
      ath: 190.73,
      ath_change_percentage: -4.3,
      ath_date: "2023-07-19T00:00:00.000Z",
      atl: 0.11,
      atl_change_percentage: 165927.27,
      atl_date: "1980-12-12T00:00:00.000Z",
      last_updated: "2023-06-15T12:30:45.678Z",
      type: "stock",
    },
    {
      id: "msft",
      symbol: "MSFT",
      name: "Microsoft Corp.",
      current_price: 415.25,
      market_cap: 3090000000000,
      market_cap_rank: 2,
      fully_diluted_valuation: null,
      total_volume: 22300000,
      high_24h: 417.89,
      low_24h: 412.56,
      price_change_24h: 7.89,
      price_change_percentage_24h: 1.9,
      market_cap_change_24h: 58700000000,
      market_cap_change_percentage_24h: 1.9,
      circulating_supply: 7440000000,
      total_supply: null,
      max_supply: null,
      ath: 420.12,
      ath_change_percentage: -1.16,
      ath_date: "2023-06-10T00:00:00.000Z",
      atl: 0.09,
      atl_change_percentage: 461388.89,
      atl_date: "1986-03-13T00:00:00.000Z",
      last_updated: "2023-06-15T12:30:45.678Z",
      type: "stock",
    },
    {
      id: "nvda",
      symbol: "NVDA",
      name: "NVIDIA Corp.",
      current_price: 950.12,
      market_cap: 2340000000000,
      market_cap_rank: 3,
      fully_diluted_valuation: null,
      total_volume: 41200000,
      high_24h: 955.67,
      low_24h: 940.23,
      price_change_24h: 11.45,
      price_change_percentage_24h: 1.2,
      market_cap_change_24h: 28100000000,
      market_cap_change_percentage_24h: 1.2,
      circulating_supply: 2460000000,
      total_supply: null,
      max_supply: null,
      ath: 960.56,
      ath_change_percentage: -1.09,
      ath_date: "2023-06-12T00:00:00.000Z",
      atl: 0.15,
      atl_change_percentage: 633313.33,
      atl_date: "1999-10-22T00:00:00.000Z",
      last_updated: "2023-06-15T12:30:45.678Z",
      type: "stock",
    },
  ]
}

export async function fetchPortfolioSummary(): Promise<PortfolioSummary> {
  // In a real app, this would be fetched from a backend API
  return {
    totalValue: 45231.89,
    stockHoldings: 25123.45,
    cryptoHoldings: 20108.44,
    cashBalance: 12500.0,
    percentageChange: 20.1,
    stockPercentageChange: 12.3,
    cryptoPercentageChange: -5.2,
  }
}

export async function fetchHistoricalPortfolioData(): Promise<HistoricalData[]> {
  // In a real app, this would be fetched from a backend API
  return [
    { date: "Jan", value: 30000 },
    { date: "Feb", value: 32000 },
    { date: "Mar", value: 31500 },
    { date: "Apr", value: 33000 },
    { date: "May", value: 35000 },
    { date: "Jun", value: 37000 },
    { date: "Jul", value: 39000 },
    { date: "Aug", value: 41000 },
    { date: "Sep", value: 40000 },
    { date: "Oct", value: 42000 },
    { date: "Nov", value: 44000 },
    { date: "Dec", value: 45231.89 },
  ]
}

export async function fetchMarketNews(): Promise<MarketNews[]> {
  // In a real app, this would be fetched from a news API
  return [
    {
      id: "1",
      title: "Fed Signals Potential Rate Cut in Coming Months",
      source: "Financial Times",
      published_at: "2h ago",
      url: "#",
    },
    {
      id: "2",
      title: "Tech Stocks Rally as Inflation Cools",
      source: "Wall Street Journal",
      published_at: "4h ago",
      url: "#",
    },
    {
      id: "3",
      title: "Bitcoin Surges Past $43,000 on ETF Approval News",
      source: "Bloomberg",
      published_at: "6h ago",
      url: "#",
    },
  ]
}

export async function fetchMarketMovers(): Promise<{ gainers: MarketMover[]; losers: MarketMover[] }> {
  // In a real app, this would be fetched from a market data API
  return {
    gainers: [
      {
        id: "xyz",
        symbol: "XYZ",
        name: "XYZ Corp",
        price: 45.23,
        change_percentage: 15.2,
      },
      {
        id: "abc",
        symbol: "ABC",
        name: "ABC Inc",
        price: 78.45,
        change_percentage: 8.7,
      },
      {
        id: "def",
        symbol: "DEF",
        name: "DEF Technologies",
        price: 123.45,
        change_percentage: 7.3,
      },
    ],
    losers: [
      {
        id: "ghi",
        symbol: "GHI",
        name: "GHI Holdings",
        price: 34.56,
        change_percentage: -12.4,
      },
      {
        id: "jkl",
        symbol: "JKL",
        name: "JKL Enterprises",
        price: 56.78,
        change_percentage: -8.9,
      },
      {
        id: "mno",
        symbol: "MNO",
        name: "MNO Group",
        price: 89.01,
        change_percentage: -6.5,
      },
    ],
  }
}

export async function searchAssets(query: string): Promise<SearchResult[]> {
  // In a real app, this would search through an API
  if (!query) return []

  const allAssets = [...(await fetchCryptoAssets()), ...(await fetchStockAssets())]

  return allAssets
    .filter(
      (asset) =>
        asset.name.toLowerCase().includes(query.toLowerCase()) ||
        asset.symbol.toLowerCase().includes(query.toLowerCase()),
    )
    .map((asset) => ({
      id: asset.id,
      symbol: asset.symbol,
      name: asset.name,
      type: asset.type || "stock",
      image: asset.image,
    }))
    .slice(0, 5)
}

export async function fetchAssetHistoricalData(id: string, days = 7): Promise<HistoricalData[]> {
  // In a real app, this would be fetched from a market data API
  // Generate random data for demo purposes
  const data: HistoricalData[] = []
  const today = new Date()

  for (let i = days; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)

    // Base value that changes slightly each day
    const baseValue = id === "bitcoin" ? 43000 : id === "ethereum" ? 2300 : 100
    const randomFactor = 0.05 // 5% random variation
    const randomChange = baseValue * randomFactor * (Math.random() * 2 - 1)

    data.push({
      date: date.toISOString().split("T")[0],
      value: baseValue + randomChange + i * baseValue * 0.01, // Slight upward trend
    })
  }

  return data
}

export async function fetchCurrencies(): Promise<string[]> {
  // In a real app, this would be fetched from a currency API
  return ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "INR"]
}

export async function convertCurrency(amount: number, from: string, to: string): Promise<number> {
  // In a real app, this would use a currency conversion API
  const rates: Record<string, number> = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 149.82,
    CAD: 1.35,
    AUD: 1.51,
    CHF: 0.89,
    CNY: 7.24,
    INR: 83.12,
  }

  return amount * (rates[to] / rates[from])
}
