import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const cases = [
  {
    title: "Industrial IoT Controller",
    desc: "Designed a high-performance control system for heavy equipment automation.",
  },
  {
    title: "Medical Imaging Circuitry",
    desc: "Engineered precision circuitry for next-gen medical devices.",
  },
  {
    title: "Smart Energy Meter",
    desc: "Built scalable embedded solutions for energy monitoring.",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-10">
          Case Studies
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <Card key={c.title} className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>{c.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">{c.desc}</CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/case-studies"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View All Case Studies
          </a>
        </div>

      </div>
    </section>
  );
}
