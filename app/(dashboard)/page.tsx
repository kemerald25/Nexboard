"use client";

import React from "react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RevenueChart, TransactionBarChart } from "@/components/dashboard/Charts";
import { TransactionTable } from "@/components/dashboard/TransactionTable";
import { mockMetrics, mockChartData, mockTransactions } from "@/lib/mock-data";
import { motion } from "framer-motion";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="max-w-[1600px] mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col gap-1">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold tracking-tight text-white font-sans"
          >
            Dashboard Overview
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Welcome back, Felix. Here&apos;s what&apos;s happening with your portfolio today.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {mockMetrics.map((metric, index) => (
            <MetricCard key={metric.title} {...metric} index={index} />
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart data={mockChartData} />
          </div>
          <div className="lg:col-span-1">
            <TransactionBarChart data={mockChartData} />
          </div>
        </div>

        {/* Transactions Section */}
        <div className="pb-8">
          <TransactionTable transactions={mockTransactions} />
        </div>
      </div>
    </div>
  );
}
