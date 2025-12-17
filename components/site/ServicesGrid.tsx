import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Embedded Engineering",
    desc: "Firmware development, microcontroller systems, IoT devices.",
    href: "/services/embedded-systems",
  },
  {
    title: "PCB Design",
    desc: "High-speed multilayer PCB layout ready for manufacturing.",
    href: "/services/pcb-design",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">
          Our <span className="text-(--color-brand)">Services</span>
        </h2>

        <div className="flex justify-center gap-10 flex-wrap">
          {services.map((s) => (
            <Link key={s.title} href={s.href} className="group">
              <Card
                className="
                  w-[470px] h-[240px]
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
                {/* HEADER */}
                <div>
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-xl font-semibold">
                      {s.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 text-gray-600 text-[17px] leading-relaxed">
                    {s.desc}
                  </CardContent>
                </div>

                {/* KNOW MORE */}
                <div className="mt-4 pt-3">
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
          ))}
        </div>
      </div>
    </section>
  );
}
