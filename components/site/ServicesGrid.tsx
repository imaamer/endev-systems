import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Embedded Engineering",
    desc: "Firmware development, microcontroller systems, IoT devices.",
  },
  {
    title: "PCB Design",
    desc: "High-speed multilayer PCB layout ready for manufacturing.",
  },
  {
    title: "Product Engineering",
    desc: "End-to-end electronic product design and development.",
  },
  {
    title: "Testing & Validation",
    desc: "Compliance, QA, testing, and performance certification.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="shadow-sm hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">{s.desc}</CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
