"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell, Check, Info, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Notification } from "@/types";

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
}

const iconMap = {
  info: Info,
  success: Check,
  warning: AlertCircle,
  alert: Bell,
};

const colorMap = {
  info: "text-brand-indigo bg-brand-indigo/10",
  success: "text-emerald-500 bg-emerald-500/10",
  warning: "text-amber-500 bg-amber-500/10",
  alert: "text-brand-rose bg-brand-rose/10",
};

export function NotificationDrawer({ isOpen, onClose, notifications }: NotificationDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-sm glass-dark border-l border-white/5 z-[60] flex flex-col shadow-2xl"
          >
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-brand-indigo" />
                <h3 className="text-lg font-bold text-white">Notifications</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl hovr:bg-white/5 text-muted-foreground hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {notifications.map((notif, index) => {
                const Icon = iconMap[notif.type];
                return (
                  <motion.div
                    key={notif.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      "p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all group",
                      !notif.read && "bg-white/[0.05]"
                    )}
                  >
                    <div className="flex gap-4">
                      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", colorMap[notif.type])}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <p className="text-sm font-bold text-white leading-tight">{notif.title}</p>
                          <span className="text-[10px] text-muted-foreground whitespace-nowrap ml-2">{notif.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{notif.message}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="p-6 border-t border-white/5">
              <button className="w-full py-3 rounded-xl bg-brand-indigo text-white text-sm font-bold shadow-[0_0_20px_rgba(108,99,255,0.3)] hover:shadow-[0_0_30px_rgba(108,99,255,0.5)] transition-all">
                Mark all as read
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
