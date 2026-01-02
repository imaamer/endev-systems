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

const palette = [
  "#6BC48F", // green
  "#6BC48F", // blue
  "#6BC48F", // orange
  "#6BC48F", // red
  "#6BC48F", // purple
  "#6BC48F", // teal
  "#6BC48F", // amber
];

const steps = [
  {
    label: "Concept",
    icon: Lightbulb,
    color: hexToRgba(palette[0], 0.4),
    items: ["Concept Validation", "MVP Specifications", "System Architecture"],
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
  },
  {
    label: "Manufacturing",
    icon: Factory,
    color: hexToRgba(palette[6], 1),
    items: ["Manufacturing Coordination", "Manufacturing Testing"],
  },
];

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function DevelopmentProcess() {
  return (
    <section className="py-20 bg-[#F3F4F6]">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
        Development <span className="text-(--color-brand)">Process</span>
      </h2>

      <div className="flex justify-center overflow-x-auto">
        <div className="flex items-start">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.label} className="flex flex-col items-start">
                {/* Arrow / Step */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  className="arrow-anchor arrow-step mb-1"
                  style={{ backgroundColor: step.color }}
                >
                  <div className="w-full flex flex-col items-center justify-center">
                    <Icon className="w-10 h-10 mb-2 opacity-90" />
                    <span className="tracking-wide text-[16px]">
                      {step.label.toUpperCase()}
                    </span>
                  </div>
                </motion.div>

                {/* Always-visible info card */}
                <div
                  className="w-[205px]"
                  style={{ backgroundColor: step.color }}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
