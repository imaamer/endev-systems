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

export default function ConceptToManufacturing() {
  const steps = [
    {
      label: "Concept",
      items: [
        "Concept Validation",
        "MVP Specifications",
        "System Architecture",
      ],
      color: "#FF6B6B",
      icon: Lightbulb,
    },
    {
      label: "Hardware",
      items: [
        "High Level Design",
        "Low Level Design",
        "Component Engineering",
        "Board Bring Up",
        "Testing",
      ],
      color: "#10C3A7",
      icon: Cpu,
    },
    {
      label: "PCB",
      items: [
        "PCB Layout Design",
        "Signal / Power / Thermal Integrity",
        "PCB Fabrication",
        "PCB Assembly",
      ],
      color: "#4FA3B6",
      icon: CircuitBoard,
    },
    {
      label: "Software",
      items: [
        "Firmware Development",
        "Driver & BSP Development",
        "Linux / RTOS / Android / Web Apps",
        "Cloud Application Development",
      ],
      color: "#B1842B",
      icon: Code,
    },
    {
      label: "ID",
      items: [
        "Enclosure Design",
        "Mechanical Design",
        "Proto Enclosure Fabrication",
      ],
      color: "#8D78E3",
      icon: Box,
    },
    {
      label: "NPI",
      items: [
        "Compliance Certification (FCC / UL / CE)",
        "Vendor Audits",
        "Test Jig Development",
      ],
      color: "#D49A2A",
      icon: PackageSearch,
    },
    {
      label: "Manufacturing",
      items: ["Manufacturing Coordination", "Manufacturing Testing"],
      color: "#88A946",
      icon: Factory,
    },
  ];

  return (
    <section className="py-20 w-full bg-white">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
        Concept <span className="text-red-600">To</span> Manufacturing
      </h2>

      {/* Center Wrapper */}
      <div className="flex justify-center">
        <div className="relative flex items-center">
          {/* Arrow Body */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex shadow-lg bg-gray-300 rounded-l-xl overflow-hidden"
          >
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <HoverCard key={step.label} openDelay={150}>
                  <HoverCardTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 12,
                      }}
                      className="relative flex flex-col items-center justify-center px-10 py-6 text-white font-semibold text-lg gap-2 cursor-pointer"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon className="w-7 h-7 opacity-90" />
                      <span className="tracking-wide">
                        {step.label.toUpperCase()}
                      </span>

                      {/* Glow */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        whileHover={{
                          boxShadow: `0 0 20px ${step.color}aa`,
                        }}
                      />
                    </motion.div>
                  </HoverCardTrigger>

                  {/* POPOVER */}
                  <HoverCardContent
                    side="bottom"
                    align="center"
                    className="w-72 rounded-xl border bg-white shadow-xl"
                  >
                    <h4 className="font-semibold text-base mb-3">
                      {step.label}
                    </h4>

                    <ul className="space-y-2 text-sm text-gray-700">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </HoverCardContent>
                </HoverCard>
              );
            })}
          </motion.div>

          {/* Arrow Head */}
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
