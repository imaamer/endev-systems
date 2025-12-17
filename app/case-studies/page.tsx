/* eslint-disable @next/next/no-img-element */
import PageHeader from "@/components/site/PageHeader";
import Link from "next/link";

type CaseStudy = {
  title: string;
  image: string;
  href: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Security System Controller",
    image: "/images/case-images/case1.jpg",
    href: "/case-studies/security-system-controller",
  },
  {
    title: "Structural Health Monitoring System",
    image: "/images/case-images/case2.jpg",
    href: "/case-studies/structural-health-monitoring",
  },
  {
    title: "Control System with POE Switch",
    image: "/images/case-images/case3.jpg",
    href: "/case-studies/control-system-poe",
  },
  {
    title: "Lithium Titanate Power Bank",
    image: "/images/case-images/case1.jpg",
    href: "/case-studies/lithium-power-bank",
  },
  {
    title: "OBD II Device with LoRa & BLE",
    image: "/images/case-images/case2.jpg",
    href: "/case-studies/obd-lora-ble",
  },
  {
    title: "BLE Tag with Wireless Charging",
    image: "/images/case-images/case3.jpg",
    href: "/case-studies/ble-wireless-charging",
  },
  {
    title: "IoT Module with Wi-Fi / BLE / ZigBee",
    image: "/images/case-images/case2.jpg",
    href: "/case-studies/iot-module",
  },
  {
    title: "IoT Micro Gateway",
    image: "/images/case-images/case2.jpg",
    href: "/case-studies/iot-gateway",
  },
];

export default function CaseStudiesPage() {
  return (
    <div>
      <PageHeader
        title="Case Studies"
        subtitle="Engineering solutions tailored for modern product development."
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block rounded-xl overflow-hidden shadow-lg"
            >
              <div className="group relative h-56">
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  block
                  h-full w-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-110
                  z-0
                "
                />

                {/* OVERLAY (SAFE) */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* TEXT */}
                <div className="pointer-events-none absolute inset-0 flex items-end p-4 z-20">
                  <h3 className="text-white text-sm font-semibold drop-shadow">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
