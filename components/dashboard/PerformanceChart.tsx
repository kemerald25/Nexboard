"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface PerformanceDataPoint {
  date: string;
  portfolio: number;
  market: number;
}

interface PerformanceChartProps {
  data: PerformanceDataPoint[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-dark p-4 rounded-xl border border-white/10 shadow-2xl">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 font-sans">{label}</p>
        {payload.map((item: any, i: number) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
            <p className="text-sm font-bold text-white font-mono">
              {item.name}: ${item.value.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function PerformanceChart({ data }: PerformanceChartProps) {
  return (
    <div className="glass p-6 rounded-2xl h-[450px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-white font-sans">Portfolio vs Market Performance</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-indigo shadow-[0_0_8px_rgba(108,99,255,0.6)]" />
            <span className="text-xs text-muted-foreground font-sans">Portfolio</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
            <span className="text-xs text-muted-foreground font-sans">Market</span>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 500 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 500 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="portfolio"
              name="Portfolio"
              stroke="#6C63FF"
              strokeWidth={4}
              dot={{ r: 4, fill: "#6C63FF", strokeWidth: 2, stroke: "#0A0B0F" }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              animationDuration={1500}
            />
            <Line
              type="monotone"
              dataKey="market"
              name="Market"
              stroke="#00E5FF"
              strokeWidth={4}
              dot={{ r: 4, fill: "#00E5FF", strokeWidth: 2, stroke: "#0A0B0F" }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
