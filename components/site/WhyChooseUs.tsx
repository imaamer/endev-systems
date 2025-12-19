"use client";

import { motion } from "framer-motion";
import {
  Award,
  Headset,
  Wallet,
  Target,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Award,
    title: "Industry Specialists",
    desc: "Our team brings decades of hands-on experience and deep domain expertise in complex hardware and embedded systems.",
  },
  {
    icon: Headset,
    title: "Reliable Collaboration",
    desc: "We work closely with clients throughout the development lifecycle, ensuring clarity, responsiveness, and trust.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    desc: "Clear project scoping and predictable costs from the start — no hidden charges or unexpected changes.",
  },
  {
    icon: Target,
    title: "Customer-Focused Approach",
    desc: "Every engineering decision is driven by your requirements, timelines, and long-term product success.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Accountability",
    desc: "We stand behind our work with rigorous validation, first-time-right execution, and engineering accountability.",
  },
  {
    icon: SlidersHorizontal,
    title: "Tailored Solutions",
    desc: "Custom-designed solutions aligned precisely with your technical, regulatory, and business needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#111] py-24">
      {/* Heading */}
      <div className="text-center px-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Why <span className="text-(--color-brand)">Choose</span> Us
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-400">
          Modern Engineering Approach & Sustainable Results
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.06,
              }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-start gap-4">
                  <Icon className="w-8 h-8 text-(--color-brand) mt-1" />
                  <CardTitle className="text-lg text-gray-900">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 text-gray-600 leading-relaxed">
                  {item.desc}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
