"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down";
  sparklineData: { value: number }[];
  index: number;
}

function CountUp({ value }: { value: string }) {
  // Simple numeric extraction for animation
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ""));
  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const suffix = value.match(/[a-zA-Z]*$/)?.[0] || "";

  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(spring, (current) => {
    if (numericPart > 1000 && !value.includes("$")) {
      return Math.floor(current).toLocaleString();
    }
    if (value.includes("M")) {
       return `${prefix}${current.toFixed(1)}${suffix}`;
    }
    return `${prefix}${current.toLocaleString(undefined, { minimumFractionDigits: value.includes(".") ? 2 : 0, maximumFractionDigits: 2 })}${suffix}`;
  });

  const [counter, setCounter] = useState(displayValue.get());

  useEffect(() => {
    spring.set(numericPart);
    return displayValue.onChange((v) => setCounter(v));
  }, [numericPart, spring, displayValue]);

  return <span>{counter}</span>;
}

export function MetricCard({ title, value, change, trend, sparklineData, index }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden group hover:border-white/10 transition-colors"
    >
      <div className="flex justify-between items-start">
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
        <div
          className={cn(
            "flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold tracking-wider",
            trend === "up" ? "bg-brand-cyan/10 text-brand-cyan" : "bg-brand-rose/10 text-brand-rose"
          )}
        >
          {trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {Math.abs(change)}%
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold font-mono tracking-tight text-white tabular-nums">
            <CountUp value={value} />
          </h3>
        </div>

        <div className="h-10 w-24">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparklineData}>
              <defs>
                <linearGradient id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={trend === "up" ? "#00E5FF" : "#FF4D8D"} stopOpacity={0.4} />
                  <stop offset="100%" stopColor={trend === "up" ? "#00E5FF" : "#FF4D8D"} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={trend === "up" ? "#00E5FF" : "#FF4D8D"}
                strokeWidth={2}
                fill={`url(#gradient-${index})`}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-indigo/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
