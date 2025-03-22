"use client"

import type * as React from "react"
import {
  LineChart as RechartsLineChart,
  Line as RechartsLine,
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts"

export const LineChart = RechartsLineChart
export const Line = RechartsLine
export const XAxis = RechartsXAxis
export const YAxis = RechartsYAxis
export const ChartTooltip = RechartsTooltip

interface ChartTooltipProps {
  children: React.ReactNode
}

export const ChartTooltipContent = ({ children }: ChartTooltipProps) => {
  return (
    <div className="rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none">{children}</div>
  )
}

export const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {children}
    </ResponsiveContainer>
  )
}

