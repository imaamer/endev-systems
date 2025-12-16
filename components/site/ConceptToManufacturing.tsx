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
    color: "#1F3A5F",
    items: ["Concept Validation", "MVP Specifications", "System Architecture"],
  },
  {
    label: "Hardware",
    icon: Cpu,
    color: "#3FC7C2",
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
    color: "#6BC48F",
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
    color: "#F4C35A",
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
    color: "#8F7EE6",
    items: [
      "Enclosure Design",
      "Mechanical Design",
      "Proto Enclosure Fabrication",
    ],
  },
  {
    label: "NPI",
    icon: PackageSearch,
    color: "#D6A42D",
    items: [
      "Compliance Certification (FCC / UL / CE)",
      "Vendor Audits",
      "Test Jig Development",
    ],
  },
  {
    label: "Manufacturing",
    icon: Factory,
    color: "#F0673E",
    items: ["Manufacturing Coordination", "Manufacturing Testing"],
  },
];

export default function ConceptToManufacturing() {
  return (
    <section className="py-24 bg-white">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-20">
        Concept <span className="text-[#3ac6c5]">To</span> Manufacturing
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
                    style={{ backgroundColor: step.color, marginRight: "20px" }}
                  >
                    <Icon className="w-7 h-7 mb-2 opacity-90 text-white" />
                    <span className="tracking-wide text-sm text-white">
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
                    className="rounded-t-md px-4 py-2 font-semibold text-white"
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
