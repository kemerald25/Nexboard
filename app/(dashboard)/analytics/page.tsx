"use client";

import React from "react";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { mockPerformanceData, mockAnalyticsStats } from "@/lib/mock-data";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <div className="max-w-[1600px] mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold tracking-tight text-white flex items-center gap-3 font-sans"
          >
            <BarChart3 className="w-8 h-8 text-brand-indigo" />
            Analytics & Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Deep dive into your portfolio performance and user engagement metrics.
          </motion.p>
        </div>

        {/* Analytics Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockAnalyticsStats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl group hover:border-white/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm font-medium text-muted-foreground font-sans">{stat.title}</p>
                <div className={stat.trend === "up" ? "text-success" : "text-destructive"}>
                  <TrendingUp className={`w-4 h-4 ${stat.trend === "down" && "rotate-180"}`} />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold text-white font-mono">{stat.value}</h3>
                <span className={`text-xs font-medium ${stat.trend === "up" ? "text-success" : "text-destructive"}`}>
                  {stat.trend === "up" ? "+" : ""}{stat.change}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Performance Chart */}
        <div className="grid grid-cols-1 gap-6">
          <PerformanceChart data={mockPerformanceData} />
        </div>

        {/* Secondary Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-2xl flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white font-sans">User Demographics</h3>
            <div className="flex-1 min-h-[200px] flex items-center justify-center border border-dashed border-white/10 rounded-xl bg-white/[0.02]">
              <p className="text-muted-foreground font-sans text-sm italic text-center px-8">
                Geographic distribution data is being processed. 
                <br />Check back in 24 hours for full visualization.
              </p>
            </div>
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white font-sans">Behavioral Trends</h3>
            <div className="space-y-4">
              {[
                { label: "New Signups", value: 450, total: 1000, color: "bg-brand-indigo" },
                { label: "Retention Rate", value: 820, total: 1000, color: "bg-brand-cyan" },
                { label: "Upgrade Rate", value: 120, total: 1000, color: "bg-brand-rose" },
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex justify-between text-xs font-sans">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="text-white font-mono">{(item.value / 10).toFixed(1)}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.value / item.total) * 100}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full ${item.color} shadow-[0_0_8px_rgba(255,255,255,0.1)]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
