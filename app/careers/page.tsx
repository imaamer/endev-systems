/* eslint-disable react/no-unescaped-entities */
import PageHeader from "@/components/site/PageHeader";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function CareerPage() {
  return (
    <div>
      <PageHeader
        title="Careers at EndevSystems"
        subtitle="Engineering solutions tailored for modern product development."
      />
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {/* ACCORDION JOB LISTINGS */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {/* JOB 1 */}
          <AccordionItem value="job-1" className="border rounded-lg px-4">
            <AccordionTrigger className="text-lg font-medium py-4">
              Embedded Systems Engineer
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3 pb-4">
              <p>
                We are looking for an experienced Embedded Systems Engineer to
                design, develop, and optimize embedded hardware and firmware
                solutions.
              </p>

              <h4 className="font-semibold">Responsibilities:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Design and develop embedded hardware and firmware.</li>
                <li>
                  Work with microcontrollers, RTOS, and communication protocols.
                </li>
                <li>Perform debugging, testing, and system validation.</li>
                <li>Collaborate with cross-functional engineering teams.</li>
              </ul>

              <h4 className="font-semibold">Requirements:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  Bachelor's in Electrical/Electronics/Computer Engineering.
                </li>
                <li>2+ years of embedded development experience.</li>
                <li>
                  Experience with C/C++, ARM, Embedded Linux, UART/SPI/I2C.
                </li>
                <li>Strong debugging and hardware understanding.</li>
              </ul>
              {/* RESUME LINK */}
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

          {/* JOB 2 */}
          <AccordionItem value="job-2" className="border rounded-lg px-4">
            <AccordionTrigger className="text-lg font-medium py-4">
              PCB Design Engineer
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3 pb-6">
              <p>
                We are seeking a PCB Design Engineer with expertise in
                multilayer board design, high-speed routing, and DFM/DFT best
                practices.
              </p>

              <h4 className="font-semibold">Responsibilities:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Perform schematic capture and multilayer PCB layout.</li>
                <li>
                  Work with high-speed interfaces and impedance-controlled
                  routing.
                </li>
                <li>
                  Coordinate with fabrication vendors and review manufacturing
                  constraints.
                </li>
                <li>Prepare fabrication documents and BOMs.</li>
              </ul>

              <h4 className="font-semibold">Requirements:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Experience with Altium Designer or Cadence Allegro.</li>
                <li>
                  Strong understanding of stack-up, signal integrity, and
                  EMI/EMC.
                </li>
                <li>Previous experience with multilayer and HDI designs.</li>
                <li>Knowledge of IPC standards is a plus.</li>
              </ul>
              {/* RESUME LINK */}
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
          <div className="h-1"></div>
        </Accordion>
      </div>
    </div>
  );
}
