/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

export default function ToolsExpertise() {
  const tools = [
    {
      name: "Altium",
      logo: "/images/tools/altium.png",
    },
    {
      name: "OrCAD",
      logo: "/images/tools/OrCAD.png",
    },
    {
      name: "Pads",
      logo: "/images/tools/pads_professional.png",
    },
    {
      name: "KiCAD",
      logo: "/images/tools/KiCAD.png",
    },
    {
      name: "Eagle",
      logo: "/images/tools/eagle.png",
    },
    {
      name: "Proteus",
      logo: "/images/tools/proteus.png",
    },
    {
      name: "Solidworks",
      logo: "/images/tools/solidworks.png",
    },
    {
      name: "Fusion 360",
      logo: "/images/tools/fusion360.png",
    },
  ];

  return (
    <section className="py-20 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">
          Tools <span className="text-[#3ac6c5]">Expertise</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-10 justify-center">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="
                group
                rounded-xl
                border
                bg-white
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                p-4
                flex
                flex-col
                items-center
                text-center
                cursor-default
              "
            >
              {/* Icon */}
              <div className="h-10 w-20 flex items-center justify-center mb-4">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="
                    max-h-16
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Text */}
              <p className="text-sm font-semibold text-gray-700">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
