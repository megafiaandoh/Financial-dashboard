"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUp, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Asset } from "@/lib/types"
import { fetchStockAssets } from "@/lib/api"

interface WatchlistProps {
  fullPage?: boolean
}

export function Watchlist({ fullPage = false }: WatchlistProps) {
  const [watchlist, setWatchlist] = useState<Asset[]>([])

  useEffect(() => {
    // In a real app, this would fetch the user's watchlist
    // For demo purposes, we'll use the first few stock assets
    const fetchWatchlist = async () => {
      const stocks = await fetchStockAssets()
      setWatchlist(stocks.filter((stock) => stock.id === "aapl"))
    }

    fetchWatchlist()
  }, [])

  return (
    <Card className={fullPage ? "col-span-2" : ""}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Watchlist</CardTitle>
          <CardDescription>Track your favorite assets</CardDescription>
        </div>
        <Button size="sm" variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          Add
        </Button>
      </CardHeader>
      <CardContent>
        {watchlist.length > 0 ? (
          <div className="space-y-4">
            {watchlist.map((asset) => {
              const isPositive = asset.price_change_percentage_24h >= 0

              return (
                <div key={asset.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{asset.symbol.toUpperCase()}</div>
                    <div className="text-sm text-muted-foreground">{asset.name}</div>
                  </div>
                  <div>
                    <div className="text-right font-medium">
                      $
                      {asset.current_price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                    <div
                      className={cn(
                        "flex items-center justify-end text-sm",
                        isPositive ? "text-success" : "text-destructive",
                      )}
                    >
                      {isPositive ? <ArrowUp className="mr-1 h-4 w-4" /> : <ArrowDown className="mr-1 h-4 w-4" />}
                      <span>
                        {isPositive ? "+" : ""}
                        {asset.price_change_percentage_24h.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="flex h-[100px] items-center justify-center text-muted-foreground">No assets in watchlist</div>
        )}
      </CardContent>
    </Card>
  )
}

