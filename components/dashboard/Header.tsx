"use client";

import React from "react";
import { Search, Bell, ChevronDown, Command } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HeaderProps {
  onNotificationClick: () => void;
}

export function Header({ onNotificationClick }: HeaderProps) {
  return (
    <header className="h-20 border-b border-white/5 bg-surface/50 backdrop-blur-md flex items-center px-8 justify-between sticky top-0 z-30">
      <div className="flex items-center gap-8 flex-1">
        {/* Search Bar */}
        <div className="relative max-w-md w-full group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-brand-indigo transition-colors" />
          <input
            type="text"
            placeholder="Search transactions, assets, or help..."
            className="w-full bg-white/5 border border-white/5 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-brand-indigo focus:bg-white/10 transition-all placeholder:text-muted-foreground/50"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
            <Command className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] font-medium text-muted-foreground">K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Notifications */}
        <button
          onClick={onNotificationClick}
          className="relative p-2.5 rounded-xl hover:bg-white/5 text-muted-foreground hover:text-white transition-all group"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-brand-rose rounded-full border-2 border-[#0A0B0F] shadow-[0_0_10px_#FF4D8D]" />
        </button>

        <div className="h-8 w-px bg-white/5 mx-2" />

        {/* User Profile */}
        <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-indigo to-brand-cyan flex items-center justify-center text-xs font-bold text-white shadow-lg overflow-hidden">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start sr-only sm:not-sr-only">
            <span className="text-sm font-semibold text-white">Felix Miller</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Pro Account</span>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors ml-1" />
        </button>
      </div>
    </header>
  );
}
