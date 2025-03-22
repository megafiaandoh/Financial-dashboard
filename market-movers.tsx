import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDown, ArrowUp } from "lucide-react"
import type { MarketMover } from "@/lib/types"

interface MarketMoversSectionProps {
  marketMovers: {
    gainers: MarketMover[]
    losers: MarketMover[]
  }
}

export function MarketMoversSection({ marketMovers }: MarketMoversSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Movers</CardTitle>
        <CardDescription>Biggest gainers and losers today</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="gainers">
          <TabsList className="mb-4 grid w-full grid-cols-2">
            <TabsTrigger value="gainers">Top Gainers</TabsTrigger>
            <TabsTrigger value="losers">Top Losers</TabsTrigger>
          </TabsList>
          <TabsContent value="gainers">
            <div className="space-y-2">
              {marketMovers.gainers.map((mover) => (
                <div key={mover.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{mover.symbol}</div>
                    <div className="text-sm text-muted-foreground">{mover.name}</div>
                  </div>
                  <div>
                    <div className="text-right font-medium">
                      $
                      {mover.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                    <div className="flex items-center justify-end text-sm text-success">
                      <ArrowUp className="mr-1 h-4 w-4" />
                      <span>+{mover.change_percentage.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="losers">
            <div className="space-y-2">
              {marketMovers.losers.map((mover) => (
                <div key={mover.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{mover.symbol}</div>
                    <div className="text-sm text-muted-foreground">{mover.name}</div>
                  </div>
                  <div>
                    <div className="text-right font-medium">
                      $
                      {mover.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                    <div className="flex items-center justify-end text-sm text-destructive">
                      <ArrowDown className="mr-1 h-4 w-4" />
                      <span>{mover.change_percentage.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

