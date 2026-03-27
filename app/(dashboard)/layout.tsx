"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { NotificationDrawer } from "@/components/dashboard/NotificationDrawer";
import { mockNotifications } from "@/lib/mock-data";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        <Header onNotificationClick={() => setIsNotificationsOpen(true)} />

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </main>

      {/* Notification Drawer */}
      <NotificationDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        notifications={mockNotifications}
      />

      {/* Background Decorative Elements */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </div>
  );
}
