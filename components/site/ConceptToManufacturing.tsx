"use client";

import {
  Lightbulb,
  Cpu,
  CircuitBoard,
  Code,
  Box,
  PackageSearch,
  Factory,
} from "lucide-react";

import { motion } from "framer-motion";

export default function ConceptToManufacturing() {
  const steps = [
    { label: "Concept", color: "#FF6B6B", icon: Lightbulb },
    { label: "Hardware", color: "#10C3A7", icon: Cpu },
    { label: "PCB", color: "#4FA3B6", icon: CircuitBoard },
    { label: "Software", color: "#B1842B", icon: Code },
    { label: "ID", color: "#8D78E3", icon: Box },
    { label: "NPI", color: "#D49A2A", icon: PackageSearch },
    { label: "Manufacturing", color: "#88A946", icon: Factory },
  ];

  return (
    <section className="py-20 w-full">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
        Concept <span className="text-red-600">To</span> Manufacturing
      </h2>

      {/* Center Wrapper */}
      <div className="flex justify-center">
        <div className="relative flex items-center">
          {/* Arrow body */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex shadow-lg bg-gray-300 rounded-l-xl overflow-hidden"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 220, damping: 12 }}
                  className="flex flex-col items-center justify-center px-10 py-6 text-white font-semibold text-lg gap-2 cursor-pointer relative"
                  style={{ backgroundColor: step.color }}
                >
                  {/* Icon */}
                  <Icon className="w-7 h-7 opacity-90" />

                  {/* Label */}
                  <span className="tracking-wide">
                    {step.label.toUpperCase()}
                  </span>

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    whileHover={{
                      boxShadow: `0 0 18px ${step.color}aa`,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Arrowhead */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-0 h-0 border-t-[60px] border-b-[60px] border-l-[80px] border-t-transparent border-b-transparent"
            style={{ borderLeftColor: "#BEBEBE" }}
          />
        </div>
      </div>
    </section>
  );
}
