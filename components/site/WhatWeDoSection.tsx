export default function WhatWeDoSection() {
  return (
    <section className="w-full bg-[#F3F4F6] py-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          What <span className="text-red-600">We</span> Do
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Endev Systems provides High Quality Hardware Engineering and PCB
          Design Services. We help turn your requirements into products with the
          shortest lead time.
        </p>
      </div>
    </section>
  );
}
