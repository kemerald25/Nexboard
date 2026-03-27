"use client";

import React from "react";
import { TransactionTable } from "@/components/dashboard/TransactionTable";
import { mockTransactions } from "@/lib/mock-data";
import { motion } from "framer-motion";
import { List7, Search, Filter, Download } from "lucide-react";

export default function TransactionsPage() {
  return (
    <div className="p-8">
      <div className="max-w-[1600px] mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-1">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold tracking-tight text-white flex items-center gap-3 font-sans"
            >
              <Download className="rotate-180 w-8 h-8 text-brand-indigo" />
              Transaction History
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              A complete record of all your financial activities and transfers.
            </motion.p>
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="flex items-center gap-3"
          >
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
              <input 
                type="text" 
                placeholder="Search transactions..." 
                className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-indigo/50 transition-all w-64 font-sans"
              />
            </div>
            <button className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-sans text-sm px-4">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button className="flex items-center gap-2 p-2 rounded-xl bg-brand-indigo text-white hover:bg-brand-indigo/90 transition-all font-sans text-sm px-4 font-bold shadow-lg shadow-brand-indigo/20">
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </motion.div>
        </div>

        {/* Categories / Quick Filters */}
        <div className="flex flex-wrap gap-2">
          {["All", "Deposits", "Withdrawals", "Transfers", "Pending", "Completed"].map((filter, i) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                i === 0 
                ? "bg-brand-indigo border-brand-indigo text-white" 
                : "bg-white/5 border-white/10 text-muted-foreground hover:text-white hover:border-white/20"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Full Transaction Table */}
        <div className="pb-12">
            <TransactionTable transactions={mockTransactions} />
            <div className="mt-8 flex justify-center">
                <button className="text-sm font-bold text-muted-foreground hover:text-white transition-colors flex items-center gap-2 font-sans">
                  Load more transactions
                  <motion.span 
                    animate={{ y: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    ↓
                  </motion.span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
