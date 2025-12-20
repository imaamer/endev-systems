"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhatWeDoSection() {
  return (
    <section className="w-full bg-[#F3F4F6] py-34">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-44 items-start">
          {/* LEFT – Image Collage */}
          <motion.div
            className="flex justify-center lg:-mt-12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div
              className="relative rounded-xl shadow-lg overflow-hidden max-w-full p-6 md:p-8"
              style={{
                minHeight: "520px",
                minWidth: "550px",
                backgroundColor: "#E6F2FF",
                backgroundImage: `radial-gradient(circle, #3ac6c5 1.5px, transparent 1.5px)`,
                backgroundSize: "24px 24px",
                backgroundPosition: "0 0",
              }}
            >
              {/* Organic Collage Layout */}
              <div
                className="relative w-full h-full z-10"
                style={{ minHeight: "480px" }}
              >
                {/* Image 1 - Top Left, Medium */}
                <div className="absolute top-0 left-0 w-44 md:w-52 h-52 md:h-60 overflow-hidden rounded-lg shadow-md z-10">
                  <img
                    src="/images/what-we-do/1.jpeg"
                    alt="Endev Systems engineering team at work"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Image 2 - Top Right, Larger */}
                <div className="absolute top-6 md:top-8 right-0 md:right-4 w-48 md:w-56 h-56 md:h-64 overflow-hidden rounded-lg shadow-md z-20">
                  <img
                    src="/images/what-we-do/2.jpeg"
                    alt="Endev Systems engineering team at work"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Image 3 - Bottom Left, Smaller */}
                <div className="absolute bottom-4 md:bottom-8 left-6 md:left-8 w-40 md:w-48 h-48 md:h-56 overflow-hidden rounded-lg shadow-md z-30">
                  <img
                    src="/images/what-we-do/3.jpeg"
                    alt="Endev Systems engineering team at work"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Image 4 - Bottom Right, Medium */}
                <div className="absolute bottom-0 right-8 md:right-12 w-44 md:w-52 h-52 md:h-60 overflow-hidden rounded-lg shadow-md z-40">
                  <img
                    src="/images/what-we-do/4.jpeg"
                    alt="Endev Systems engineering team at work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold">
              What <span className="text-(--color-brand)">We</span> Do
            </h2>

            {/* Tagline */}
            <p className="mt-4 text-lg md:text-xl">
              Engineering mission-critical platforms with precision and purpose
            </p>

            {/* Description */}
            <p className="mt-8 text-gray-600 text-sm md:text-base leading-relaxed text-justify">
              At Endev Systems, we design and deliver mission-critical,
              high-performance embedded hardware platforms for demanding
              industrial and data-center applications. Our expertise spans x86
              motherboards, FPGA-based systems, data-center servers, and
              high-speed networking equipment, engineered with a strong focus on
              reliability, performance, compliance, and manufacturability. We
              develop SBCs, SOMs, and carrier boards for processors, FPGAs,
              SoCs, and ASICs, addressing complex challenges in high-speed
              interfaces, power delivery, EMI/ESD, and thermal constraints. Our
              engineering covers the entire product lifecycle—from architecture
              and schematic design to signal & power integrity, PCB layout,
              mechanical and thermal optimization, firmware, embedded software,
              and system-level integration. With a production-driven mindset and
              deep cross-disciplinary expertise, Endev Systems transforms
              complex engineering ideas into robust, scalable, and
              production-ready solutions.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-md bg-(--color-brand) px-6 py-3 text-white font-medium hover:opacity-90 transition"
              >
                About us
                <span aria-hidden>›</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
