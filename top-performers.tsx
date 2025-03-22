import type { Asset } from "@/lib/types"
import { ArrowDown, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface TopPerformersProps {
  assets: Asset[]
}

export function TopPerformers({ assets }: TopPerformersProps) {
  return (
    <div className="space-y-1">
      <div className="text-sm text-muted-foreground">Your best performing assets</div>
      <div className="space-y-2">
        {assets.map((asset) => {
          const isPositive = asset.price_change_percentage_24h >= 0

          return (
            <div key={asset.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="font-medium">{asset.symbol.toUpperCase()}</div>
                <div className="text-sm text-muted-foreground">{asset.name}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right font-medium">
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
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

