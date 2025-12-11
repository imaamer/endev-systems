import Image from "next/image";

const capabilities = {
  "Services Provided": [
    "Hardware Design",
    "Design Verification",
    "Schematic Capture",
    "PCB Design",
    "Firmware Development",
    "Application Development",
    "Driver & BSP Development",
    "Design for Manufacturing (DFM)",
    "Enclosure Design",
    "Prototype Building & Testing",
  ],
  "Domain Expertise": [
    "Automotive",
    "Medical",
    "Aerospace",
    "Industrial",
    "Wireless",
    "Power Systems",
    "Electric Vehicles",
    "Renewable Energy",
  ],
  "Hardware & Technology Expertise": [
    "High-speed Digital",
    "BLE / Zigbee / WiFi chipsets",
    "IoT Electronics",
    "Low-power Battery Devices",
    "Analog & Mixed-signal",
    "High Voltage / High Current Drivers",
    "Motor Drivers",
    "High-frequency / RF Designs",
    "Multiple Interface Expertise",
    "Memory Modules, Storage, Mixed I/O",
  ],
  "Software & Platform Expertise": [
    "x86, ARM, Microcontrollers",
    "Embedded Linux, RTOS",
    "Driver & BSP Development",
    "Application & Kernel Development",
    "Connectivity & Networking",
    "Storage & Host-Bus Drivers",
    "Device Firmware & Bootloaders",
  ],
  "Software Platform Expertise": [
    "x86, ARM, Microcontrollers",
    "Embedded Linux, RTOS",
    "Driver & BSP Development",
    "Application & Kernel Development",
    "Connectivity & Networking",
    "Storage & Host-Bus Drivers",
    "Device Firmware & Bootloaders",
  ],
  "Hardware Technology Expertise": [
    "High-speed Digital",
    "BLE / Zigbee / WiFi chipsets",
    "IoT Electronics",
    "Low-power Battery Devices",
    "Analog & Mixed-signal",
    "High Voltage / High Current Drivers",
    "Motor Drivers",
    "High-frequency / RF Designs",
    "Multiple Interface Expertise",
    "Memory Modules, Storage, Mixed I/O",
  ],
};

export default function EmbeddedSystemCaseStudiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      {/* CARD 1 – IMAGE + TEXT */}
      {/* SECTION: Image Left + Content Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT: IMAGE CARD */}
        <div className="bg-white rounded-2xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <Image
            src="/images/hero1.jpg"
            alt="Embedded System Hardware"
            width={1400}
            height={1400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* RIGHT: PLAIN TEXT (NO CARD) */}
        <div className="space-y-6 flex flex-col justify-start">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Embedded Systems Design & Development
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
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
