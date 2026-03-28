"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bell, AlertTriangle, ShieldCheck, Info, Plus, Settings2, Trash2 } from "lucide-react";

const mockAlerts = [
  { id: 1, title: "Price Target Reached", description: "BTC hit $65,000 as per your alert.", time: "10 mins ago", type: "success", active: true },
  { id: 2, title: "Unusual Login Activity", description: "New login from a different IP address (192.168.1.1).", time: "1 hour ago", type: "warning", active: true },
  { id: 3, title: "Low Balance Warning", description: "Your Ethereum wallet balance is below 0.5 ETH.", time: "Yesterday", type: "danger", active: false },
  { id: 4, title: "System Scheduled Maintenance", description: "Nexboard will be offline for 15 mins on Sunday.", time: "2 days ago", type: "info", active: true },
];

const typeStyles = {
  success: { icon: ShieldCheck, color: "text-success", bg: "bg-success/10", border: "border-success/20" },
  warning: { icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  danger: { icon: AlertTriangle, color: "text-brand-rose", bg: "bg-brand-rose/10", border: "border-brand-rose/20" },
  info: { icon: Info, color: "text-brand-cyan", bg: "bg-brand-cyan/10", border: "border-brand-cyan/20" },
};

export default function AlertsPage() {
  return (
    <div className="p-8">
      <div className="max-w-[1200px] mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold tracking-tight text-white flex items-center gap-3 font-sans"
            >
              <Bell className="w-8 h-8 text-brand-rose" />
              Alert Center
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              Manage your notifications, security triggers, and custom price alerts.
            </motion.p>
          </div>

          <motion.button 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-white/90 transition-all font-sans shadow-lg shadow-white/5"
          >
            <Plus className="w-4 h-4" />
            Create Alert
          </motion.button>
        </div>

        {/* Alerts Grid */}
        <div className="grid grid-cols-1 gap-4">
          {mockAlerts.map((alert, i) => {
            const style = typeStyles[alert.type as keyof typeof typeStyles];
            const Icon = style.icon;

            return (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`glass p-5 rounded-2xl flex items-start gap-4 border ${alert.active ? "border-white/10" : "opacity-60 grayscale-[0.5] border-transparent"}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${style.bg} ${style.border}`}>
                  <Icon className={`w-6 h-6 ${style.color}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-bold text-white font-sans truncate">{alert.title}</h3>
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest font-sans">{alert.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-sans line-clamp-2">{alert.description}</p>
                </div>

                <div className="flex items-center gap-2 self-center ml-4">
                  <button className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-white transition-all">
                    <Settings2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-brand-rose/10 text-muted-foreground hover:text-brand-rose transition-all">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Configuration Section */}
        <div className="glass p-8 rounded-3xl space-y-8">
            <h3 className="text-xl font-bold text-white font-sans">Notification Settings</h3>
            
            <div className="space-y-6">
                {[
                    { label: "Push Notifications", desc: "Receive alerts directly on your browser or device.", checked: true },
                    { label: "Email Summaries", desc: "Get a daily breakdown of your transactions and alerts.", checked: false },
                    { label: "SMS Critical Alerts", desc: "High-priority security alerts sent to your phone.", checked: true },
                ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-8 py-4 border-b border-white/5 last:border-0">
                        <div>
                            <p className="text-base font-bold text-white font-sans">{item.label}</p>
                            <p className="text-sm text-muted-foreground font-sans">{item.desc}</p>
                        </div>
                        <div className={`w-12 h-6 rounded-full relative transition-all cursor-pointer ${item.checked ? "bg-brand-indigo" : "bg-white/10"}`}>
                            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${item.checked ? "left-7" : "left-1"}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
