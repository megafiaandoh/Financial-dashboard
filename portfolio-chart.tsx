"use client"

import type { HistoricalData } from "@/lib/types"
import { ChartContainer, ChartTooltip, ChartTooltipContent, Line, LineChart, XAxis, YAxis } from "@/components/ui/chart"

interface PortfolioChartProps {
  data: HistoricalData[]
}

export function PortfolioChart({ data }: PortfolioChartProps) {
  if (!data.length) {
    return <div className="flex h-[300px] items-center justify-center">No data available</div>
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="h-[300px] w-full">
      <ChartContainer>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis tickFormatter={formatCurrency} width={80} />
          <ChartTooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  )
}

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <ChartTooltipContent>
        <div className="text-sm font-medium">{label}</div>
        <div className="text-sm font-bold">${payload[0].value.toLocaleString()}</div>
      </ChartTooltipContent>
    )
  }

  return null
}

