export type TransactionStatus = "completed" | "pending" | "failed";
export type TransactionType = "deposit" | "withdrawal";
export type NotificationType = "info" | "success" | "warning" | "alert";

export interface Transaction {
  id: string;
  merchant: string;
  category: string;
  amount: number;
  status: TransactionStatus;
  type: TransactionType;
  date: string;
  method?: string;
}

export interface Metric {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down";
  sparklineData: { value: number }[];
}

export interface ChartDataPoint {
  date: string;
  revenue: number;
  transactions: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: NotificationType;
  read: boolean;
}
