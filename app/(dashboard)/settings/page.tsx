"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { User, Lock, Eye, Globe, CreditCard, Bell, Shield, LogOut, ChevronRight } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="max-w-[1000px] mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold tracking-tight text-white flex items-center gap-3 font-sans"
          >
            <User className="w-8 h-8 text-brand-indigo" />
            Account Settings
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Manage your profile, security preferences, and connected accounts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation Sidebar (Local) */}
          <nav className="space-y-1">
            {[
              { label: "Profile", icon: User, active: true },
              { label: "Security", icon: Lock },
              { label: "Preferences", icon: Eye },
              { label: "Language", icon: Globe },
              { label: "Billing", icon: CreditCard },
              { label: "Notifications", icon: Bell },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  item.active 
                  ? "bg-brand-indigo text-white shadow-lg shadow-brand-indigo/20" 
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
            <div className="pt-4 mt-4 border-t border-white/5">
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium text-brand-rose hover:bg-brand-rose/10 transition-all">
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </nav>

          {/* Settings content */}
          <div className="md:col-span-3 space-y-6">
            <section className="glass p-8 rounded-3xl space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-indigo to-brand-cyan p-[2px]">
                  <div className="w-full h-full rounded-2xl bg-surface flex items-center justify-center overflow-hidden relative">
                    <Image 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                      alt="Avatar" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-sans">Felix Vance</h3>
                  <p className="text-sm text-muted-foreground font-sans">Premium Account • Member since 2024</p>
                  <button className="mt-2 text-xs font-bold text-brand-indigo hover:text-brand-indigo/80 transition-colors uppercase tracking-wider">
                    Change Avatar
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-sans">Full Name</label>
                  <input 
                    type="text" 
                    defaultValue="Felix Vance"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-brand-indigo/50 transition-all font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-sans">Email Address</label>
                  <input 
                    type="email" 
                    defaultValue="felix@nexboard.io"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-brand-indigo/50 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest font-sans">Account Security</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-success" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white font-sans">Two-Factor Authentication</p>
                        <p className="text-xs text-muted-foreground font-sans">Your account is protected with 2FA.</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-brand-indigo" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white font-sans">Change Password</p>
                        <p className="text-xs text-muted-foreground font-sans">Last changed 3 months ago.</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-6 border-t border-white/5">
                <button className="px-6 py-2.5 rounded-xl border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-all font-sans">
                  Discard Changes
                </button>
                <button className="px-6 py-2.5 rounded-xl bg-brand-indigo text-white font-bold text-sm hover:bg-brand-indigo/90 transition-all font-sans shadow-lg shadow-brand-indigo/20">
                  Save Settings
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
