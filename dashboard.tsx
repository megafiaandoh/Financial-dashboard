"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  fetchCryptoAssets,
  fetchHistoricalPortfolioData,
  fetchMarketMovers,
  fetchMarketNews,
  fetchPortfolioSummary,
  fetchStockAssets,
} from "@/lib/api"
import type { Asset, HistoricalData, MarketMover, MarketNews, PortfolioSummary } from "@/lib/types"
import { AssetCard } from "@/components/asset-card"
import { PortfolioSummaryCards } from "@/components/portfolio-summary-cards"
import { PortfolioChart } from "@/components/portfolio-chart"
import { TopPerformers } from "@/components/top-performers"
import { Watchlist } from "@/components/watchlist"
import { MarketNewsSection } from "@/components/market-news"
import { MarketMoversSection } from "@/components/market-movers"
import { Search } from "lucide-react"

export function Dashboard() {
  const [cryptoAssets, setCryptoAssets] = useState<Asset[]>([])
  const [stockAssets, setStockAssets] = useState<Asset[]>([])
  const [portfolioSummary, setPortfolioSummary] = useState<PortfolioSummary | null>(null)
  const [historicalData, setHistoricalData] = useState<HistoricalData[]>([])
  const [marketNews, setMarketNews] = useState<MarketNews[]>([])
  const [marketMovers, setMarketMovers] = useState<{ gainers: MarketMover[]; losers: MarketMover[] }>({
    gainers: [],
    losers: [],
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const [crypto, stocks, portfolio, historical, news, movers] = await Promise.all([
          fetchCryptoAssets(),
          fetchStockAssets(),
          fetchPortfolioSummary(),
          fetchHistoricalPortfolioData(),
          fetchMarketNews(),
          fetchMarketMovers(),
        ])

        setCryptoAssets(crypto)
        setStockAssets(stocks)
        setPortfolioSummary(portfolio)
        setHistoricalData(historical)
        setMarketNews(news)
        setMarketMovers(movers)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  // Get top performing assets
  const topPerformers = [...cryptoAssets, ...stockAssets]
    .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
    .slice(0, 5)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button size="sm">Add Asset</Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="stocks">Stocks</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
            <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stockAssets.slice(0, 2).map((asset) => (
                <AssetCard key={asset.id} asset={asset} />
              ))}
              {cryptoAssets.slice(0, 2).map((asset) => (
                <AssetCard key={asset.id} asset={asset} />
              ))}
            </div>

            {portfolioSummary && <PortfolioSummaryCards summary={portfolioSummary} />}

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Portfolio Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <PortfolioChart data={historicalData} />
                </CardContent>
              </Card>

              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Top Performers</CardTitle>
                  <CardDescription>Your best performing assets</CardDescription>
                </CardHeader>
                <CardContent>
                  <TopPerformers assets={topPerformers} />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Watchlist />
              <div className="grid gap-4">
                <MarketNewsSection news={marketNews} />
                <MarketMoversSection marketMovers={marketMovers} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="stocks" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {stockAssets.map((asset) => (
                <AssetCard key={asset.id} asset={asset} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="crypto" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cryptoAssets.map((asset) => (
                <AssetCard key={asset.id} asset={asset} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="watchlist" className="space-y-4">
            <Watchlist fullPage />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

