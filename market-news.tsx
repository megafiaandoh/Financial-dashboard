import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { MarketNews } from "@/lib/types"

interface MarketNewsSectionProps {
  news: MarketNews[]
}

export function MarketNewsSection({ news }: MarketNewsSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market News</CardTitle>
        <CardDescription>Latest financial news</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {news.map((item) => (
            <div key={item.id} className="space-y-1">
              <a href={item.url} className="font-medium hover:underline">
                {item.title}
              </a>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>{item.source}</span>
                <span className="mx-2">•</span>
                <span>{item.published_at}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

