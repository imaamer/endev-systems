export default function WhatWeDoSection() {
  return (
    <section className="w-full bg-[#F3F4F6] py-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* HEADING */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">
          What <span className="text-[#3ac6c5]">We</span> Do
        </h2>

        {/* DESCRIPTION */}
        <p className="max-w-6xl mt-6 text-gray-600 text-lg leading-relaxed">
          We design high-performance x86 Motherboards, FPGA-based platforms,
          Data-Center Server and Networking Hardware Equipment. SBCs, SOMs,
          Carrier Boards for Processors, FPGAs, ASICs and SOCs, with strong
          attention to reliability, performance, and manufacturability. Our work
          covers the complete development cycle, including Hardware Design,
          Signal and Power integrity, Mechanical and Thermal optimization,
          Firmware, Embedded software, and system integration. At Endev Systems,
          we help companies turn challenging engineering ideas into
          production-ready systems.
        </p>
      </div>
    </section>
  );
}
