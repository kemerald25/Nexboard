import { Metric, Transaction, ChartDataPoint, Notification } from "@/types";

export const mockMetrics: Metric[] = [
  {
    title: "Total Balance",
    value: "$124,592.00",
    change: 12.5,
    trend: "up",
    sparklineData: [45, 52, 48, 61, 59, 72, 68, 75, 82, 90].map(v => ({ value: v })),
  },
  {
    title: "Monthly Revenue",
    value: "$42,850.50",
    change: 8.2,
    trend: "up",
    sparklineData: [30, 35, 32, 40, 38, 45, 42, 50, 48, 55].map(v => ({ value: v })),
  },
  {
    title: "Active Users",
    value: "2,420",
    change: -2.4,
    trend: "down",
    sparklineData: [50, 48, 45, 42, 44, 40, 38, 35, 37, 34].map(v => ({ value: v })),
  },
  {
    title: "Conversion Rate",
    value: "4.2%",
    change: 0.6,
    trend: "up",
    sparklineData: [10, 12, 11, 14, 13, 16, 15, 18, 17, 20].map(v => ({ value: v })),
  },
];

export const mockChartData: ChartDataPoint[] = [
  { date: "Mon", revenue: 4500, transactions: 120 },
  { date: "Tue", revenue: 5200, transactions: 145 },
  { date: "Wed", revenue: 4800, transactions: 130 },
  { date: "Thu", revenue: 6100, transactions: 170 },
  { date: "Fri", revenue: 5900, transactions: 160 },
  { date: "Sat", revenue: 7200, transactions: 190 },
  { date: "Sun", revenue: 6800, transactions: 180 },
];

export const mockTransactions: Transaction[] = [
  {
    id: "tx1",
    merchant: "Apple Store",
    category: "Technology",
    amount: 1299.0,
    status: "completed",
    type: "withdrawal",
    date: "2 mins ago",
  },
  {
    id: "tx2",
    merchant: "Stripe Deposit",
    category: "Revenue",
    amount: 4500.5,
    status: "completed",
    type: "deposit",
    date: "1 hour ago",
  },
  {
    id: "tx3",
    merchant: "Amazon Web Services",
    category: "Infrastructure",
    amount: 840.2,
    status: "pending",
    type: "withdrawal",
    date: "3 hours ago",
  },
  {
    id: "tx4",
    merchant: "Figma Subscription",
    category: "Design Tools",
    amount: 45.0,
    status: "completed",
    type: "withdrawal",
    date: "Yesterday",
  },
  {
    id: "tx5",
    merchant: "Client Payment",
    category: "Services",
    amount: 2800.0,
    status: "completed",
    type: "deposit",
    date: "Yesterday",
  },
];

export const mockNotifications: Notification[] = [
  {
    id: "n1",
    title: "Large Deposit Received",
    message: "A deposit of $4,500.50 from Stripe has been credited to your account.",
    time: "2 mins ago",
    type: "success",
    read: false,
  },
  {
    id: "n2",
    title: "Security Alert",
    message: "New login detected from a Chrome browser on Windows 11.",
    time: "1 hour ago",
    type: "warning",
    read: false,
  },
  {
    id: "n3",
    title: "System Update",
    message: "Nexboard v2.4 layout engine has been successfully deployed.",
    time: "3 hours ago",
    type: "info",
    read: true,
  },
];

export const mockAssetDistribution = [
  { name: "Bitcoin", value: 45, color: "#F7931A" },
  { name: "Ethereum", value: 30, color: "#627EEA" },
  { name: "Solana", value: 15, color: "#14F195" },
  { name: "Stablecoins", value: 10, color: "#6C63FF" },
];

export const mockPerformanceData = [
  { date: "Jan", portfolio: 4000, market: 3500 },
  { date: "Feb", portfolio: 4500, market: 3800 },
  { date: "Mar", portfolio: 4200, market: 4100 },
  { date: "Apr", portfolio: 5800, market: 4600 },
  { date: "May", portfolio: 6200, market: 4900 },
  { date: "Jun", portfolio: 7500, market: 5200 },
];

export const mockAnalyticsStats = [
  { title: "Active Users", value: "2.4k", change: 12.5, trend: "up" as const },
  { title: "Avg. Session", value: "4m 22s", change: 3.2, trend: "up" as const },
  { title: "Bounce Rate", value: "24.5%", change: -2.1, trend: "down" as const },
  { title: "Conversion", value: "3.8%", change: 0.4, trend: "up" as const },
];
