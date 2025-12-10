import Image from "next/image";

const capabilities = {
  "Services Provided": [
    "Schematic capture",
    "Library Creation",
    "Layout Design",
    "Components Selection",
    "Design Verification",
    "SI/PI and Thermal Analysis",
    "EMI/EMC Analysis",
    "Compliance engineering",
    "3D modelling and Mechanical Analysis",
  ],

  "Our capabilities include": [
    "High speed Digital.",
    "Analog and Mixed Signal.",
    "Ultra-high density Boards.",
    "RF PCBs.",
    "High Current/Frequency Power Supply designs.",
    "Ultra-low EMI designs.",
    "High layer count designs.",
    "Blind Vias, Buried Vias, Via in Pad, Laser Micro Vias.",
    "High Frequency PCBs.",
    "Flex and Rigid-Flex Designs.",
    "High density SMT designs – BGA, Micro BGA, PCI, PCIE, CPCI.",
    "PCB Layer management",
    "Signal integrity and impedance control.",
    "Rigid and Flexible antenna designs.",
    "PCB Designs for space, military, medical and commercial applications.",
    "Comprehensive Professional fabrication documents.",
  ],
};

export default function EmbeddedSystemServicePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      {/* CARD 1 – IMAGE + TEXT */}
      {/* SECTION: Image Left + Content Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT: IMAGE CARD */}
        <div className="bg-white rounded-2xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <Image
            src="/images/hero2.jpg"
            alt="Embedded System Hardware"
            width={1400}
            height={1400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* RIGHT: PLAIN TEXT (NO CARD) */}
        <div className="space-y-6 flex flex-col justify-start">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            PCB Design Services
          </h1>

          <p className="text-gray-700 leading-relaxed">
            Endev Systems provides high-quality embedded systems design and
            development services. For years, we have helped companies convert
            their ideas into working products with robust engineering and
            efficient design methodologies.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We combine multi-domain expertise to develop end-to-end electronic
            solutions across multiple platforms. With a strong foundation in
            embedded hardware, firmware and system architecture, we deliver
            products that exceed expectations in performance, reliability, and
            scalability.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our application engineering experience allows us to anticipate
            challenges early in the product lifecycle. From conceptualization to
            prototyping, we take ownership of the complete development process
            so you can bring your idea to us and receive a production-ready
            solution.
          </p>
        </div>
      </div>

      {/* CARD 2 – CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-6">
        {/* CARD WRAPPER – contains BOTH header and content */}
        <div className="rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
          {/* HEADER — flush with top, part of card */}
          <div className="w-full bg-[#1F2937] text-white text-xl font-semibold px-6 py-4">
            Our Capabilities
          </div>

          {/* CONTENT BELOW HEADER */}
          <div className="bg-white p-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {Object.entries(capabilities).map(([group, items]) => (
                <div key={group} className="space-y-3">
                  {/* CATEGORY STRIP */}
                  <div className="bg-gray-100 px-3 py-2 rounded-md font-medium text-gray-800">
                    {group}
                  </div>

                  {/* ONE-LINE CAPABILITY ITEMS */}
                  <ul className="space-y-1">
                    {items.map((it) => (
                      <li key={it} className="text-gray-700 text-sm truncate">
                        • {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
