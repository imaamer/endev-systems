import Link from "next/link";
import { Cpu, CircuitBoard, Code, Wifi, ShieldCheck } from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Embedded System Design",
    desc: "End to end Hardware and Software Design for x86 and ARM-based Motherboard. SBC design for Processors and FPGAs, Carrier board and SOM design for microcontrollers, SoCs and ASIC-based systems.",
    href: "/services/embedded-systems",
    icon: Cpu,
  },
  {
    title: "High Speed PCB Layout",
    desc: "Upto 48 Layers HDI board layout. Digital and mixed-signal designs (DDR, PCIe, USB, Ethernet, SERDES). Controlled impedance, length matching, differential pair optimization. Signal Integrity (SI), Power Integrity (PI), EMI/EMC compliance. IPC Class-3 oriented layouts for reliable, production-ready hardware.",
    href: "/services/pcb-design",
    icon: CircuitBoard,
  },
  {
    title: "Firmware Development",
    desc: "Firmware development for microcontrollers, microprocessors and FPGAs. Device driver development services - PCI Express, Ethernet, USB, SATA, SPI, I2C and etc.",
    href: "/services/pcb-design",
    icon: Code,
  },
  {
    title: "IoT Product Design",
    desc: "IoT hardware and firmware design, BLE, Wi-Fi, and Ethernet based products, Embedded software and cloud integration, Web dashboards and mobile applications for Android and iOS, real-world IoT deployments",
    href: "/services/pcb-design",
    icon: Wifi,
  },
  {
    title: "Prototype Testing and Validation",
    desc: "Hardware validation, compliance testing, signal & power integrity checks, thermal analysis, and production readiness verification.",
    href: "/services/pcb-design",
    icon: ShieldCheck,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="max-w-8xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">
          Our <span className="text-(--color-brand)">Services</span>
        </h2>

        <div className="flex justify-center gap-10 flex-wrap">
          {services.map((s) => {
            const Icon = s.icon;

            return (
              <Link key={s.title} href={s.href} className="group">
                <Card
                  className="
                    relative
                    w-[430px] h-[320px]
                    flex flex-col justify-between
                    p-6 cursor-pointer
                    border border-transparent 
                    transition-all duration-300 
                    group-hover:border-gray-300 
                    group-hover:shadow-xl 
                    group-hover:scale-[1.03]
                    rounded-2xl
                  "
                >
                  {/* TOP RIGHT ICON */}
                  <Icon
                    className="
                      absolute top-6 right-6
                      w-8 h-8
                      text-(--color-brand)
                      group-hover:text-(--color-brand)
                      transition-colors
                    "
                  />

                  {/* HEADER + CONTENT */}
                  <div>
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-xl font-semibold">
                        {s.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0 text-gray-600 text-[17px] leading-relaxed">
                      {s.desc}
                    </CardContent>
                  </div>

                  {/* KNOW MORE */}
                  <div>
                    <span
                      className="
                        text-(--color-brand) font-medium text-sm 
                        inline-flex items-center gap-1 
                        group-hover:underline 
                        transition-all 
                        group-hover:gap-2
                      "
                    >
                      Know More →
                    </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
