"use client";

import React from "react";
import { AssetDistribution } from "@/components/dashboard/AssetDistribution";
import { mockAssetDistribution, mockTransactions } from "@/lib/mock-data";
import { motion } from "framer-motion";
import { Wallet, ArrowUpRight, ArrowDownRight, Briefcase } from "lucide-react";

export default function PortfolioPage() {
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
            <Briefcase className="w-8 h-8 text-brand-cyan" />
            Asset Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Manage and track your diverse digital asset holdings in one place.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Asset List & Distribution */}
          <div className="lg:col-span-2 space-y-8">
            <AssetDistribution data={mockAssetDistribution} />
            
            <div className="glass p-6 rounded-2xl space-y-6">
              <h3 className="text-lg font-bold text-white font-sans">Active Holdings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockAssetDistribution.map((asset, i) => (
                  <motion.div
                    key={asset.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5">
                        <Wallet className="w-5 h-5" style={{ color: asset.color }} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white font-sans">{asset.name}</p>
                        <p className="text-xs text-muted-foreground font-sans">{asset.value}% of Portfolio</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white font-mono">
                        ${(Math.random() * 50000 + 10000).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      </p>
                      <div className="flex items-center gap-1 justify-end text-[10px] text-success">
                        <ArrowUpRight className="w-3 h-3" />
                        <span>+{(Math.random() * 5).toFixed(2)}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Metrics & Quick Actions */}
          <div className="space-y-8">
          <div className="glass p-6 rounded-2xl space-y-6">
              <h3 className="text-lg font-bold text-white font-sans">Portfolio Summary</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20">
                  <p className="text-xs text-brand-indigo font-bold uppercase tracking-wider mb-1 font-sans">Total Net Worth</p>
                  <h2 className="text-3xl font-bold text-white font-mono">$124,592.00</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1 font-sans">24h Change</p>
                    <p className="text-lg font-bold text-success font-mono">+$2,450.00</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1 font-sans">Total Profit</p>
                    <p className="text-lg font-bold text-success font-mono">+$18,200.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl space-y-6">
              <h3 className="text-lg font-bold text-white font-sans">Allocation Strategy</h3>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  Your portfolio is currently <strong>Aggressive</strong>. You have a high exposure to volatile assets.
                </p>
                <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-bold transition-all border border-white/10 font-sans">
                  Optimize Allocation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
