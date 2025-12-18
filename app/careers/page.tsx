/* eslint-disable react/no-unescaped-entities */
import PageHeader from "@/components/site/PageHeader";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type Job = {
  id: string;
  title: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

const jobs: Job[] = [
  {
    id: "job-1",
    title: "Senior Firmware Engineer",
    description:
      "We are looking for an experienced Firmware Engineer to design, develop, and maintain embedded software for microcontroller- and processor-based systems.",
    responsibilities: [
      "Design, develop, and maintain embedded firmware using C/C++.",
      "Work with microcontrollers, RTOS, and low-level drivers.",
      "Implement and debug communication protocols (UART, SPI, I2C, CAN).",
      "Collaborate with hardware teams during bring-up and testing.",
      "Perform debugging, testing, and system validation.",
    ],
    requirements: [
      "Bachelor’s degree in Electrical, Electronics, or Computer Engineering.",
      "2+ years of hands-on embedded firmware development experience.",
      "Strong proficiency in C/C++ and ARM-based platforms.",
      "Experience with RTOS and embedded Linux is a plus.",
      "Strong debugging and hardware-level understanding.",
    ],
  },
  {
    id: "job-2",
    title: "Senior Hardware Engineer",
    description:
      "We are seeking a Hardware Engineer with strong experience in schematic design, PCB layout, and hardware validation for complex electronic systems.",
    responsibilities: [
      "Perform schematic capture and multilayer PCB design.",
      "Design and review high-speed and mixed-signal circuits.",
      "Ensure signal integrity, power integrity, and EMI/EMC compliance.",
      "Coordinate with PCB fabrication and assembly vendors.",
      "Prepare BOMs, fabrication files, and manufacturing documentation.",
    ],
    requirements: [
      "Strong experience with Altium Designer or Cadence Allegro.",
      "Solid understanding of signal integrity, stack-ups, and EMI/EMC.",
      "Experience with multilayer and HDI PCB designs.",
      "Knowledge of IPC standards and DFM/DFT best practices.",
    ],
  },
  {
    id: "job-3",
    title: "Mechanical Design Engineer",
    description:
      "We are looking for a Mechanical Design Engineer to design enclosures, mechanical components, and assemblies for electronic and industrial products.",
    responsibilities: [
      "Design mechanical parts, enclosures, and assemblies for products.",
      "Create 3D models, drawings, and manufacturing documentation.",
      "Work closely with hardware and manufacturing teams.",
      "Perform tolerance analysis and material selection.",
      "Support prototyping and product validation activities.",
    ],
    requirements: [
      "Bachelor’s degree in Mechanical Engineering or related field.",
      "Proficiency in CAD tools such as SolidWorks or Fusion 360.",
      "Experience with sheet metal, plastic, and machined parts.",
      "Understanding of manufacturing processes and tolerances.",
      "Experience in electronics enclosure design is a plus.",
    ],
  },
  {
    id: "job-4",
    title: "UI/UX Designer",
    description:
      "We are seeking a creative UI/UX Designer to design intuitive user interfaces and seamless user experiences for web-based and embedded products.",
    responsibilities: [
      "Design user flows, wireframes, and high-fidelity UI designs.",
      "Collaborate with engineers and product teams to translate ideas into designs.",
      "Create and maintain design systems and reusable components.",
      "Conduct usability testing and iterate based on feedback.",
      "Ensure consistency across products and platforms.",
    ],
    requirements: [
      "Proven experience as a UI/UX Designer with a strong portfolio.",
      "Proficiency in Figma, Adobe XD, or similar design tools.",
      "Strong understanding of user-centered design principles.",
      "Experience designing web dashboards or industrial interfaces is a plus.",
      "Ability to collaborate closely with developers.",
    ],
  },
];

export default function CareerPage() {
  return (
    <div>
      <PageHeader
        title="Careers at EndevSystems"
        subtitle="Engineering solutions tailored for modern product development."
      />

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {jobs.map((job) => (
            <AccordionItem
              key={job.id}
              value={job.id}
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-lg font-medium py-4">
                {job.title}
              </AccordionTrigger>

              <AccordionContent className="text-gray-700 space-y-3 pb-4">
                <p>{job.description}</p>

                <h4 className="font-semibold">Responsibilities:</h4>
                <ul className="list-disc ml-6 space-y-1">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold">Requirements:</h4>
                <ul className="list-disc ml-6 space-y-1">
                  {job.requirements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="pt-4 border-t">
                  <p className="text-sm">
                    Send your resume to{" "}
                    <a
                      href="mailto:careers@endevsystems.com"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      careers@endevsystems.com
                    </a>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
          <AccordionItem value=""></AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
