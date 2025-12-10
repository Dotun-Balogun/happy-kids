'use client'
import React from "react";
import { motion } from "framer-motion";

type StatCardProps = {
  value: number | string;
  label: string;
  borderColor: string; // e.g. "#ff6b81"
  tagColor: string; // e.g. "#ff6b81"
};

export default function StatCard({ value, label, borderColor, tagColor }: StatCardProps) {
  return (
    <motion.div
      className="w-[274px] h-[183px] rounded-2xl flex flex-col items-center justify-center gap-3 border-2 border-dashed"
      style={{ borderColor }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <span className="text-[48px] font-bold" style={{ color: borderColor }}>
        {value}
      </span>

      <span
        className="px-4 py-1 text-white text-[14px] rounded-full"
        style={{ backgroundColor: tagColor }}
      >
        {label}
      </span>
    </motion.div>
  );
}
