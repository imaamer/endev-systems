import {
  Calendar,
  Users,
  Globe,
  BatteryCharging,
  UserCheck,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className=" py-0 w-full  bg-[#F3F4F6]">
      {/* TOP HEADING */}
      <div className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          Why <span className="text-(--color-brand)">Choose</span> Us
        </h2>

        <p className="max-w-5xl mx-auto mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
          EndevSystems has over 20 years of experience in designing complex
          hardware for the most challenging applications.
        </p>

        <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
          We provide quick, cost-effective, and first-time-right solutions for
          your requirements.
        </p>
      </div>

      {/* STATS BAR */}
      <div className="w-full bg-[#111] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 text-center">
          {/* ITEM 1 */}
          <div>
            <Calendar className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <p className="text-4xl font-semibold text-(--color-brand)">20+</p>
            <div className="mx-auto mt-3 mb-3 w-40 border-t border-gray-600" />
            <p className="text-sm tracking-wide uppercase text-gray-400">
              Years in Business
            </p>
          </div>

          {/* ITEM 2 */}
          <div>
            <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <p className="text-4xl font-semibold text-(--color-brand)">45+</p>
            <div className="mx-auto mt-3 mb-3 w-40 border-t border-gray-600" />
            <p className="text-sm tracking-wide uppercase text-gray-400">
              Designers & Engineers
            </p>
          </div>

          {/* ITEM 3 */}
          <div>
            <Globe className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <p className="text-4xl font-semibold text-(--color-brand)">3</p>
            <div className="mx-auto mt-3 mb-3 w-40 border-t border-gray-600" />
            <p className="text-sm tracking-wide uppercase text-gray-400">
              Strategic Locations
            </p>
          </div>

          {/* ITEM 4 */}
          <div>
            <BatteryCharging className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <p className="text-4xl font-semibold text-(--color-brand)">25+</p>
            <div className="mx-auto mt-3 mb-3 w-40 border-t border-gray-600" />
            <p className="text-sm tracking-wide uppercase text-gray-400">
              Years Combined Experience
            </p>
          </div>

          {/* ITEM 5 */}
          <div>
            <UserCheck className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <p className="text-4xl font-semibold text-(--color-brand)">100</p>
            <div className="mx-auto mt-3 mb-3 w-40 border-t border-gray-600" />
            <p className="text-sm tracking-wide uppercase text-gray-400">
              Customer Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
