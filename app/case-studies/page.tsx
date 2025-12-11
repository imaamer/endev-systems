import PageHeader from "./../../components/site/PageHeader";

export default function CaseStudiesPage() {
  return (
    <div>
      <PageHeader
        title="Our Case Studies"
        subtitle="Engineering solutions tailored for modern product development."
      />

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Embedded Engineering</h2>
          <p className="text-gray-700">
            Firmware development, real-time systems, microcontroller
            programming, IoT device engineering, communication protocols, and
            industrial electronics.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">PCB Design</h2>
          <p className="text-gray-700">
            High-speed, multi-layer PCB design optimized for manufacturability,
            signal integrity, thermal performance, and EMC compliance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Product Engineering</h2>
          <p className="text-gray-700">
            Complete electronic product design from concept to prototype,
            including hardware, firmware, enclosure coordination, and production
            readiness.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Testing & Validation</h2>
          <p className="text-gray-700">
            Functional testing, stress validation, regulatory certification
            support (CE, FCC, UL), protocol debugging, and automated reliability
            measurements.
          </p>
        </section>
      </div>
    </div>
  );
}
