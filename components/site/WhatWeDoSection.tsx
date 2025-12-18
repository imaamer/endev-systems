export default function WhatWeDoSection() {
  return (
    <section className="w-full bg-[#F3F4F6] py-20">
      <div className="max-w-8xl mx-40 text-center px-6">
        {/* HEADING */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">
          What <span className="text-(--color-brand)">We</span> Do
        </h2>

        {/* DESCRIPTION */}
        <p className="max-w-8xl mt-6 text-gray-600 text-lg leading-relaxed text-justify">
          At Endev Systems, we design and deliver mission-critical,
          high-performance embedded hardware platforms for demanding industrial
          and data-center applications. Our expertise spans x86 motherboards,
          FPGA-based systems, data-center servers, and high-speed networking
          equipment, engineered with a strong focus on reliability, performance,
          compliance, and manufacturability. We develop SBCs, SOMs, and carrier
          boards for processors, FPGAs, SoCs, and ASICs, addressing complex
          challenges in high-speed interfaces, power delivery, EMI/ESD, and
          thermal constraints. Our engineering covers the entire product
          lifecycle—from architecture and schematic design to signal & power
          integrity, PCB layout, mechanical and thermal optimization, firmware,
          embedded software, and system-level integration. With a
          production-driven mindset and deep cross-disciplinary expertise, Endev
          Systems transforms complex engineering ideas into robust, scalable,
          and production-ready solutions.
        </p>
      </div>
    </section>
  );
}
