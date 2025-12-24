/* eslint-disable @next/next/no-img-element */
"use client";

export default function ToolsExpertise() {
  const tools = [
    { name: "Altium Designer", logo: "/images/tools/altium.png" },
    { name: "OrCAD", logo: "/images/tools/OrCAD.png" },
    { name: "PADS Professional", logo: "/images/tools/pads_professional.png" },
    { name: "KiCAD", logo: "/images/tools/KiCAD.png" },
    { name: "Eagle", logo: "/images/tools/eagle.png" },
    { name: "Proteus", logo: "/images/tools/proteus.png" },
    { name: "SolidWorks", logo: "/images/tools/solidworks.png" },
    { name: "Fusion 360", logo: "/images/tools/fusion360.png" },
    { name: "Allegro", logo: "/images/tools/Allegro.png" },
    { name: "ANSYS", logo: "/images/tools/Ansys.png" },
    { name: "Blender", logo: "/images/tools/Blender.png" },
    { name: "Mentor Graphics", logo: "/images/tools/Mentor.png" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-400 mx-auto px-6">
        {/* SECTION TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-14">
          Tools <span className="text-(--color-brand)">Expertise</span>
        </h2>

        {/* TOOLS WRAPPER */}
        <div className="flex flex-wrap justify-center gap-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="
                w-[220px]
                h-[150px]
                bg-white
                rounded-2xl
                border
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                flex
                flex-col
                items-center
                justify-center
                text-center
                p-6
              "
            >
              {/* ICON */}
              <img
                src={tool.logo}
                alt={tool.name}
                className="h-12 w-auto object-contain mb-4"
              />

              {/* LABEL */}
              <p className="text-sm font-medium text-gray-700">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
