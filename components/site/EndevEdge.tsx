"use client";

import { motion } from "framer-motion";
import { Award, Zap, Layers, Cpu, Settings, Clock } from "lucide-react";

const col1 = [
  { title: "25+ years of hands on experience", icon: Award },
  { title: "Cross Domain Expertise", icon: Layers },
];

const col2 = [
  { title: "Fast & Cost Effective Solutions", icon: Zap },
  { title: "Concept to Manufacturing", icon: Settings },
];

const col3 = [
  { title: "FPGA Design Expertise", icon: Cpu },
  { title: "24x7 Design Support", icon: Clock },
];

export default function EndevSystemEdge() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16"
        >
          EndevSystem <span className="text-red-600">Edge</span>
        </motion.h2>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* COLUMN 1 */}
          <div className="space-y-24">
            {col1.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-red-600 text-white p-4 rounded-xl shadow-lg w-16 h-16 flex items-center justify-center"
                  >
                    <Icon size={32} />
                  </motion.div>

                  <p className="text-xl font-medium text-black">{item.title}</p>
                </motion.div>
              );
            })}
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-44">
            {col2.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-red-600 text-white p-4 rounded-xl shadow-lg w-16 h-16 flex items-center justify-center"
                  >
                    <Icon size={32} />
                  </motion.div>

                  <p className="text-xl font-medium text-black">{item.title}</p>
                </motion.div>
              );
            })}
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-24">
            {col3.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-red-600 text-white p-4 rounded-xl shadow-lg w-16 h-16 flex items-center justify-center"
                  >
                    <Icon size={32} />
                  </motion.div>

                  <p className="text-xl font-medium text-black">{item.title}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
