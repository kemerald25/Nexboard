"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  MoreHorizontal,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Transaction } from "@/types";

interface TransactionTableProps {
  transactions: Transaction[];
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <div className="glass rounded-2xl overflow-hidden flex flex-col">
      <div className="p-6 flex items-center justify-between border-b border-white/5">
        <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
        <button className="text-xs font-bold text-brand-indigo hover:text-brand-indigo/80 transition-colors flex items-center gap-1 group">
          View All <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/5">
              <th className="px-6 py-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Transaction</th>
              <th className="px-6 py-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Amount</th>
              <th className="px-6 py-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Date</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.02]">
            {transactions.map((tx, index) => (
              <motion.tr
                key={tx.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                      tx.type === "deposit" 
                        ? "bg-brand-cyan/10 text-brand-cyan group-hover:bg-brand-cyan/20" 
                        : "bg-brand-rose/10 text-brand-rose group-hover:bg-brand-rose/20"
                    )}>
                      {tx.type === "deposit" ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-brand-indigo transition-colors">{tx.merchant}</p>
                      <p className="text-xs text-muted-foreground">{tx.category}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider",
                    tx.status === "completed" ? "bg-emerald-500/10 text-emerald-500" :
                    tx.status === "pending" ? "bg-amber-500/10 text-amber-500" :
                    "bg-rose-500/10 text-rose-500"
                  )}>
                    {tx.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className={cn(
                    "text-sm font-bold font-mono",
                    tx.type === "deposit" ? "text-brand-cyan" : "text-white"
                  )}>
                    {tx.type === "deposit" ? "+" : "-"}${tx.amount.toLocaleString()}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-xs text-muted-foreground">{tx.date}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-white transition-all">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
