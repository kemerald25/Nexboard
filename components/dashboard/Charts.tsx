"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { ChartDataPoint } from "@/types";

interface ChartsProps {
  data: ChartDataPoint[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-dark p-4 rounded-xl border border-white/10 shadow-2xl">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">{label}</p>
        {payload.map((item: any, i: number) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.payload?.color || item.color }} />
            <p className="text-sm font-bold text-white font-mono">
              {item.name}: {item.name === "Revenue" ? `$${item.value.toLocaleString()}` : item.value}
            </p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function RevenueChart({ data }: ChartsProps) {
  return (
    <div className="glass p-6 rounded-2xl h-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-white">Revenue Overview</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-indigo" />
            <span className="text-xs text-muted-foreground">Revenue</span>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6C63FF" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6C63FF" stopOpacity={0} />
              </linearGradient>
            </defs>
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
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(255,255,255,0.1)", strokeWidth: 2 }} />
            <Area
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#6C63FF"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function TransactionBarChart({ data }: ChartsProps) {
  return (
    <div className="glass p-6 rounded-2xl h-[400px] flex flex-col gap-4">
      <h3 className="text-lg font-bold text-white">Weekly Transactions</h3>
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 500 }}
              dy={10}
            />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 500 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.05)" }} />
            <Bar dataKey="transactions" name="Transactions" radius={[4, 4, 0, 0]} animationDuration={1500}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#6C63FF" : "#00E5FF"} fillOpacity={0.8} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
