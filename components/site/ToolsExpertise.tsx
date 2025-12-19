/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function ToolsExpertise() {
  const tools = [
    { name: "Altium", logo: "/images/tools/altium.png" },
    { name: "OrCAD", logo: "/images/tools/OrCAD.png" },
    { name: "Pads", logo: "/images/tools/pads_professional.png" },
    { name: "KiCAD", logo: "/images/tools/KiCAD.png" },
    { name: "Eagle", logo: "/images/tools/eagle.png" },
    { name: "Proteus", logo: "/images/tools/proteus.png" },
    { name: "Solidworks", logo: "/images/tools/solidworks.png" },
    { name: "Fusion 360", logo: "/images/tools/fusion360.png" },
  ];

  // duplicate 3x for large screens
  const marqueeTools = [...tools, ...tools, ...tools];

  const controls = useAnimation();
  const x = useMotionValue(0);

  const startMarquee = () => {
    const currentX = x.get();

    controls.start({
      x: [currentX, "-33.333%"],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startMarquee();
  }, []);

  return (
    <section className="py-20 bg-[#F3F4F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-14">
          Tools <span className="text-(--color-brand)">Expertise</span>
        </h2>
      </div>

      {/* Marquee */}
      <motion.div
        className="flex gap-10 w-max"
        style={{ x }}
        animate={controls}
      >
        {marqueeTools.map((tool, index) => (
          <div
            key={`${tool.name}-${index}`}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={startMarquee}
            className="
              min-w-[180px]
              rounded-xl
              border
              bg-white
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-300
              p-6
              flex
              flex-col
              items-center
              text-center
              cursor-default
            "
          >
            <div className="h-12 flex items-center justify-center mb-4">
              <img
                src={tool.logo}
                alt={tool.name}
                className="max-h-14 object-contain"
              />
            </div>

            <p className="text-sm font-semibold text-gray-700">{tool.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
