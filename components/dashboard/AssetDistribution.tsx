"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface AssetDistributionProps {
  data: { name: string; value: number; color: string }[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { name: string; value: number; color?: string; [key: string]: unknown }[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-dark p-3 rounded-lg border border-white/10 shadow-xl">
        <p className="text-xs font-bold text-white font-sans">
          {payload[0].name}: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export function AssetDistribution({ data }: AssetDistributionProps) {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="glass p-6 rounded-2xl h-[400px] flex flex-col gap-4">
      <h3 className="text-lg font-bold text-white font-sans">Asset Distribution</h3>
      <div className="flex-1 w-full">
        {mounted && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                animationDuration={1500}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                content={({ payload }) => (
                  <div className="flex justify-center gap-4 mt-4">
                    {payload?.map((entry: { value?: string | number; color?: string }, index: number) => (
                      <div key={`legend-${index}`} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                        <span className="text-xs text-muted-foreground font-sans">{entry.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
