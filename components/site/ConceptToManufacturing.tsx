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
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

const steps = [
  {
    label: "Concept",
    icon: Lightbulb,
    color: hexToRgba("#6BC48F", 0.2),
    items: ["Concept Validation", "MVP Specifications", "System Architecture"],
  },
  {
    label: "Hardware",
    icon: Cpu,
    color: hexToRgba("#6BC48F", 0.3),
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
    color: hexToRgba("#6BC48F", 0.4),
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
    color: hexToRgba("#6BC48F", 0.5),
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
    color: hexToRgba("#6BC48F", 0.7),
    items: [
      "Enclosure Design",
      "Mechanical Design",
      "Proto Enclosure Fabrication",
    ],
  },
  {
    label: "NPI",
    icon: PackageSearch,
    color: hexToRgba("#6BC48F", 0.9),
    items: [
      "Compliance Certification (FCC / UL / CE)",
      "Vendor Audits",
      "Test Jig Development",
    ],
  },
  {
    label: "Manufacturing",
    icon: Factory,
    color: hexToRgba("#6BC48F", 1),
    items: ["Manufacturing Coordination", "Manufacturing Testing"],
  },
];

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function ConceptToManufacturing() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-14">
        Development <span className="text-(--color-brand)">Process</span>
      </h2>

      <div className="flex justify-center">
        <div className="flex items-center">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <HoverCard key={step.label} openDelay={120}>
                <HoverCardTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 220, damping: 14 }}
                    className="arrow-anchor arrow-step"
                    style={{ backgroundColor: step.color, marginRight: "10px" }}
                  >
                    <Icon className="w-7 h-7 mb-2 opacity-90" />
                    <span className="tracking-wide text-sm">
                      {step.label.toUpperCase()}
                    </span>
                  </motion.div>
                </HoverCardTrigger>

                <HoverCardContent
                  side="bottom"
                  align="center"
                  className="w-72 rounded-xl border bg-white shadow-xl"
                >
                  <div
                    className="rounded-t-md px-4 py-2 font-semibold text-black"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.label}
                  </div>

                  <ul className="p-4 space-y-2 text-sm text-gray-700">
                    {step.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
