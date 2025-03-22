import type { Asset } from "@/lib/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface AssetCardProps {
  asset: Asset
}

export function AssetCard({ asset }: AssetCardProps) {
  const isPositive = asset.price_change_percentage_24h >= 0

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{asset.name}</CardTitle>
        <CardDescription>
          {asset.type === "crypto" ? `${asset.symbol.toUpperCase()}/USD` : asset.category || asset.symbol.toUpperCase()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          $
          {asset.current_price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
        <div className={cn("flex items-center text-sm", isPositive ? "text-success" : "text-destructive")}>
          {isPositive ? <ArrowUp className="mr-1 h-4 w-4" /> : <ArrowDown className="mr-1 h-4 w-4" />}
          <span>
            {isPositive ? "+" : ""}
            {asset.price_change_percentage_24h.toFixed(1)}%
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

