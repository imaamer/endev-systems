"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const slides = [
  {
    image: "/images/hero1.jpg",
    title: "Engineering Excellence for Modern Systems",
    subtitle:
      "We design embedded platforms, electronics, and robust industrial solutions.",
  },
  {
    image: "/images/hero2.jpg",
    title: "Reliable Product Engineering",
    subtitle:
      "From concept to prototype — we help you build future-ready products.",
  },
  {
    image: "/images/hero3.jpg",
    title: "Embedded Intelligence for Industry",
    subtitle:
      "IoT devices, PCB design, firmware development, and high-performance systems.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false); // NEW

  const current = slides[index];

  // ⭐ AUTOPLAY — PAUSED WHEN VIDEO IS OPEN
  useEffect(() => {
    if (isVideoOpen) return; // STOP autoplay

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isVideoOpen]);

  const goNext = () => {
    if (!isVideoOpen) setIndex((index + 1) % slides.length);
  };

  const goPrev = () => {
    if (!isVideoOpen) setIndex((index - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-black text-white">
      {/* SLIDER */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={current.image}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover opacity-80"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-black/40" />

      {/* TEXT + BUTTONS */}
      <div className="absolute bottom-20 left-10 md:left-20 z-20 max-w-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold">{current.title}</h1>

            <p className="text-lg md:text-xl text-gray-200 mt-2">
              {current.subtitle}
            </p>

            {/* BUTTON ROW */}
            <div className="flex gap-4 pt-4">
              {/* WATCH VIDEO BUTTON */}
              <Dialog
                onOpenChange={(open) => setIsVideoOpen(open)} // ⭐ CONTROL AUTOPLAY
              >
                <DialogTrigger asChild>
                  <button className="flex items-center gap-2 bg-white/20 px-5 py-2 rounded-md hover:bg-white/30 transition">
                    <Play size={20} />
                    Watch Video
                  </button>
                </DialogTrigger>

                <DialogContent className="max-w-3xl p-0 bg-black/90 border-white/20">
                  {/* Required for accessibility */}
                  <DialogTitle className="sr-only">Video</DialogTitle>

                  <div className="relative pt-[56.25%]">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/KboTh74lwzM?autoplay=1"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>

              {/* CONTACT US BUTTON */}
              <a
                href="/contact"
                className="px-6 py-2 bg-[#3ac6c5] rounded-md hover:bg-[#3ac6c5] transition font-semibold"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ARROWS — DISABLED WHILE VIDEO IS OPEN */}
      <button
        onClick={goPrev}
        disabled={isVideoOpen}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 hover:bg-white/40 rounded-full transition disabled:opacity-30"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={goNext}
        disabled={isVideoOpen}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 hover:bg-white/40 rounded-full transition disabled:opacity-30"
      >
        <ChevronRight size={28} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            disabled={isVideoOpen}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              index === i ? "bg-white scale-125" : "bg-white/40"
            } disabled:opacity-40`}
          />
        ))}
      </div>
    </section>
  );
}
