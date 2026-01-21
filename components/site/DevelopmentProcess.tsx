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

/* ---------------------------------- */
/* Helpers                            */
/* ---------------------------------- */

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/* ---------------------------------- */
/* Data                               */
/* ---------------------------------- */

const palette = [
  "#6BC48F",
  "#5FB3D9",
  "#7A9EFF",
  "#8E7CC3",
  "#F4B266",
  "#E57373",
  "#9FB8AE",
];

const steps = [
  {
    label: "Concept",
    icon: Lightbulb,
    color: hexToRgba(palette[0], 0.4),
    items: ["Concept Validation", "MVP Specifications", "System Architecture"],
    cardPosition: { top: 300, left: 0 },
  },
  {
    label: "Hardware",
    icon: Cpu,
    color: hexToRgba(palette[1], 0.5),
    items: [
      "High Level Design",
      "Low Level Design",
      "Component Engineering",
      "Board Bring Up",
      "Testing",
    ],
    cardPosition: { top: -200, left: 200 },
  },
  {
    label: "PCB",
    icon: CircuitBoard,
    color: hexToRgba(palette[2], 0.6),
    items: [
      "PCB Layout Design",
      "Signal / Power / Thermal Integrity",
      "PCB Fabrication",
      "PCB Assembly",
    ],
    cardPosition: { top: 300, left: 440 },
  },
  {
    label: "Software",
    icon: Code,
    color: hexToRgba(palette[3], 0.7),
    items: [
      "Firmware Development",
      "Driver & BSP Development",
      "Linux / RTOS / Android / Web Apps",
      "Cloud Application Development",
    ],
    cardPosition: { top: -230, left: 645 },
  },
  {
    label: "ID",
    icon: Box,
    color: hexToRgba(palette[4], 0.8),
    items: [
      "Enclosure Design",
      "Mechanical Design",
      "Proto Enclosure Fabrication",
    ],
    cardPosition: { top: 300, left: 860 },
  },
  {
    label: "NPI",
    icon: PackageSearch,
    color: hexToRgba(palette[5], 0.9),
    items: [
      "Compliance Certification (FCC / UL / CE)",
      "Vendor Audits",
      "Test Jig Development",
    ],
    cardPosition: { top: -170, left: 1070 },
  },
  {
    label: "Manufacturing",
    icon: Factory,
    color: hexToRgba(palette[6], 1),
    items: ["Manufacturing Coordination", "Manufacturing Testing"],
    cardPosition: { top: 300, left: 1300 },
  },
];

/* ---------------------------------- */
/* Component                          */
/* ---------------------------------- */

export default function DevelopmentProcess() {
  return (
    <section className="py-24">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-74">
        Development <span className="text-(--color-brand)">Process</span>
      </h2>

      <div className="relative mx-auto w-[1500px] min-h-[500px]">
        {/* ARROWS */}
        <div className="relative z-20 flex justify-between">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.label}
                whileHover={{ scale: 1.05 }}
                className="arrow-anchor arrow-step"
                style={{
                  backgroundColor: step.color,
                  width: 200,
                }}
              >
                <div className="flex flex-col items-center justify-center py-6">
                  <Icon className="w-10 h-10 mb-2 opacity-90" />
                  <span className="tracking-wide text-[16px]">
                    {step.label.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CARDS */}
        {steps.map((step) => (
          <div
            key={step.label}
            className="absolute z-30 w-[205px] rounded-lg shadow-lg"
            style={{
              backgroundColor: step.color,
              top: step.cardPosition.top,
              left: step.cardPosition.left,
            }}
          >
            <ul className="p-4 space-y-2 text-sm text-gray-700">
              {step.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
