import type { PortfolioSummary } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface PortfolioSummaryCardsProps {
  summary: PortfolioSummary
}

export function PortfolioSummaryCards({ summary }: PortfolioSummaryCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardContent className="p-6">
          <div className="text-sm font-medium text-muted-foreground">Total Portfolio Value</div>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-2xl font-bold">${summary.totalValue.toLocaleString()}</div>
            <div
              className={cn(
                "flex items-center text-sm",
                summary.percentageChange >= 0 ? "text-success" : "text-destructive",
              )}
            >
              {summary.percentageChange >= 0 ? (
                <ArrowUp className="mr-1 h-4 w-4" />
              ) : (
                <ArrowDown className="mr-1 h-4 w-4" />
              )}
              <span>
                {summary.percentageChange >= 0 ? "+" : ""}
                {summary.percentageChange.toFixed(1)}% from last month
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="text-sm font-medium text-muted-foreground">Stock Holdings</div>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-2xl font-bold">${summary.stockHoldings.toLocaleString()}</div>
            <div
              className={cn(
                "flex items-center text-sm",
                summary.stockPercentageChange >= 0 ? "text-success" : "text-destructive",
              )}
            >
              {summary.stockPercentageChange >= 0 ? (
                <ArrowUp className="mr-1 h-4 w-4" />
              ) : (
                <ArrowDown className="mr-1 h-4 w-4" />
              )}
              <span>
                {summary.stockPercentageChange >= 0 ? "+" : ""}
                {summary.stockPercentageChange.toFixed(1)}% from last month
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="text-sm font-medium text-muted-foreground">Crypto Holdings</div>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-2xl font-bold">${summary.cryptoHoldings.toLocaleString()}</div>
            <div
              className={cn(
                "flex items-center text-sm",
                summary.cryptoPercentageChange >= 0 ? "text-success" : "text-destructive",
              )}
            >
              {summary.cryptoPercentageChange >= 0 ? (
                <ArrowUp className="mr-1 h-4 w-4" />
              ) : (
                <ArrowDown className="mr-1 h-4 w-4" />
              )}
              <span>
                {summary.cryptoPercentageChange >= 0 ? "+" : ""}
                {summary.cryptoPercentageChange.toFixed(1)}% from last month
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="text-sm font-medium text-muted-foreground">Cash Balance</div>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-2xl font-bold">${summary.cashBalance.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Available for trading</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
