# Nexboard — Premium SaaS Admin Dashboard

Nexboard is a production-grade, high-performance SaaS analytics and fintech dashboard built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. It features a modern, "dark-first" aesthetic with a focus on data density, micro-animations, and premium user experience.

![Nexboard Preview](https://grainy-gradients.vercel.app/noise.svg)

## 💎 Design Philosophy
- **Fintech Aesthetic**: Near-black surfaces (#0A0B0F) with electric indigo accents (#6C63FF) and vibrant status indicators.
- **Glassmorphism**: Subtle backdrop blurs and translucent surfaces for a high-end feel.
- **Micro-Animations**: Staggered entrances, smooth sidebar transitions, and interactive charts powered by **Framer Motion**.
- **Typography**: `DM Sans` for a clean UI and `JetBrains Mono` for precise, tabular data display.

## 🚀 Core Features
- **Unified Dashboard**: Real-time KPI monitoring with interactive revenue and activity charts.
- **Advanced Analytics**: Compare performance metrics against market benchmarks with multi-series line charts.
- **Portfolio Management**: Visualize asset distribution and manage individual holdings.
- **Transaction History**: Comprehensive, filterable, and searchable records of all activities.
- **Alert Center**: Sophisticated notification management for security, price targets, and system updates.
- **Account Settings**: Polished profile management, security configurations, and user preferences.

## 🛠️ Technology Stack
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Utils**: `clsx`, `tailwind-merge`

## 📦 Project Structure
```text
├── app/
│   ├── (dashboard)/       # Shared layout and dashboard pages
│   │   ├── analytics/     # Performance & insights
│   │   ├── portfolio/     # Asset management
│   │   ├── transactions/  # History records
│   │   ├── alerts/        # Notification center
│   │   └── settings/      # User configurations
│   └── layout.tsx         # Root layout with custom fonts
├── components/
│   ├── dashboard/         # UI components (Sidebar, Charts, MetricCards)
│   └── ui/                # Base UI elements
├── lib/
│   ├── mock-data.ts       # Central data store for the prototype
│   └── utils.ts           # Styling & formatting utilities
└── public/                # Static assets
```

## 🏁 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/nexboard.git
cd nexboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 License
This project is licensed under the MIT License.
