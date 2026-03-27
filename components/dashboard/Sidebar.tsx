"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BarChart3,
  Wallet,
  ArrowLeftRight,
  Bell,
  Settings,
  ChevronLeft,
  Search,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Wallet, label: "Portfolio", href: "/portfolio" },
  { icon: ArrowLeftRight, label: "Transactions", href: "/transactions" },
  { icon: Bell, label: "Alerts", href: "/alerts" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 260 }}
      className={cn(
        "relative h-screen bg-surface border-r border-white/5 flex flex-col transition-all duration-300 ease-in-out z-40",
        "before:absolute before:inset-0 before:bg-[url('https://grainy-gradients.vercel.app/noise.svg')] before:opacity-[0.03] before:pointer-events-none"
      )}
    >
      {/* Logo Section */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-brand-indigo flex items-center justify-center shadow-[0_0_15px_rgba(108,99,255,0.4)]">
          <Zap className="w-5 h-5 text-white fill-white" />
        </div>
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold tracking-tight text-white"
          >
            Nexboard
          </motion.span>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 space-y-1 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative",
                isActive
                  ? "bg-white/5 text-white shadow-[inset_0_0_10px_rgba(255,255,255,0.02)]"
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-brand-indigo" : "group-hover:text-brand-indigo"
                )}
              />
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-medium"
                >
                  {item.label}
                </motion.span>
              )}
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute left-0 w-1 h-6 bg-brand-indigo rounded-r-full shadow-[0_0_10px_#6C63FF]"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-4 mx-3 mb-6 flex items-center gap-3 rounded-xl text-muted-foreground hover:text-white hover:bg-white/5 transition-all"
      >
        <div
          className={cn(
            "w-5 h-5 flex items-center justify-center border border-white/10 rounded-md transition-transform duration-300",
            isCollapsed && "rotate-180"
          )}
        >
          <ChevronLeft className="w-3 h-3" />
        </div>
        {!isCollapsed && <span className="text-sm font-medium">Collapse</span>}
      </button>
    </motion.aside>
  );
}
