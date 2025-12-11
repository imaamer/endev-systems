import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    title: "Embedded Systems Design",
    desc: "EndevSystems provides high-quality embedded systems design and development services",
    href: "/case-studies/embedded-systems",
  },
  {
    title: "PCB Design Services",
    desc: "EndevSystems provides high-quality pcb design and development services. ",
    href: "/case-studies/pcb-design",
  },
];

export default function CaseStudiesGrid() {
  return (
    <section className="w-full bg-[#F4F5F7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10">Case Studies</h2>

        {/* Cards */}
        <div className="flex justify-center gap-10 flex-wrap">
          {caseStudies.map((c) => (
            <Link key={c.title} href={c.href} className="group">
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
                  rounded-2xl bg-white
                "
              >
                <div>
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-xl font-semibold">
                      {c.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 text-gray-600 text-[17px] leading-relaxed">
                    {c.desc}
                  </CardContent>
                </div>

                <div className="mt-4 pt-3">
                  <span
                    className="
                      text-red-600 font-medium text-sm 
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
