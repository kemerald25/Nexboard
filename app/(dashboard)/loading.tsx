"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface overflow-hidden">
      {/* Background Glow */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.2, 0.8], 
          opacity: [0.1, 0.3, 0.1] 
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute w-[400px] h-[400px] bg-brand-indigo rounded-full blur-[120px] pointer-events-none"
      />

      {/* Brand Logo Pulse */}
      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="w-20 h-20 rounded-2xl bg-brand-indigo flex items-center justify-center shadow-[0_0_30px_rgba(108,99,255,0.5)] z-10"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Zap className="w-10 h-10 text-white fill-white" />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white font-bold tracking-[0.2em] uppercase text-xs font-mono"
            >
              Nexboard
            </motion.p>
            <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                        }}
                        className="w-1 h-1 rounded-full bg-brand-indigo shadow-[0_0_5px_#6C63FF]"
                    />
                ))}
            </div>
        </div>
      </div>

      {/* Noise Texture Over loader */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
    </div>
  );
}
