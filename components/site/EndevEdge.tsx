"use client";

import { motion } from "framer-motion";
import { Award, Zap, Layers, Cpu, Settings, Clock } from "lucide-react";

type EdgeItem = {
  title: string;
  icon: React.ElementType;
  from: "left" | "right" | "bottom";
};

const rows: EdgeItem[][] = [
  [
    { title: "25+ years of hands on experience", icon: Award, from: "left" },
    { title: "Fast & Cost Effective Solutions", icon: Zap, from: "bottom" },
    { title: "FPGA Design Expertise", icon: Cpu, from: "right" },
  ],
  [
    { title: "Cross Domain Expertise", icon: Layers, from: "left" },
    { title: "Concept to Manufacturing", icon: Settings, from: "bottom" },
    { title: "24x7 Design Support", icon: Clock, from: "right" },
  ],
];

export default function EndevSystemEdge() {
  return (
    <section className="py-15 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-20"
        >
          EndevSystem <span className="text-[#3ac6c5]">Edge</span>
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-14">
          {rows.flat().map((item, i) => {
            const Icon = item.icon;

            const initial =
              item.from === "left"
                ? { x: -40, opacity: 0 }
                : item.from === "right"
                ? { x: 40, opacity: 0 }
                : { y: 40, opacity: 0 };

            return (
              <motion.div
                key={i}
                initial={initial}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 justify-center md:justify-start"
              >
                {/* ICON */}
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#3ac6c5] text-white w-16 h-16 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <Icon size={32} />
                </motion.div>

                {/* TEXT */}
                <p className="text-xl font-medium text-black text-left max-w-xs">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
