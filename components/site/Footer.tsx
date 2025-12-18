"use client";

import { LinkedinIcon, YoutubeIcon, Download } from "lucide-react";
import QuickLinks from "./QuickLinks";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1D] text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
        {/* ABOUT SECTION */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wide">ABOUT US</h3>
          <p className="text-gray-400 leading-relaxed">
            EndevSystems is an Embedded Systems Engineering and R&D Services
            company based in Delaware, United States with a development centre
            in UAE and Pakistan. Established in 2005, EndevSystems focuses on
            designing complex Embedded Systems for High Performance Computing
            serving Defence , Automotive, Industrial, Medical and Consumer
            Market. We are a team 60+ Engineers consisting of Embedded Hardware,
            Electronics, Mechanical, Thermal, Firmware, and Software Engineers
            delivering end-to-end product development—from concept to
            production.
          </p>
        </div>

        {/* QUICK LINKS */}
        <QuickLinks />
        {/* PRESENTATION */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wide">PRESENTATION</h3>
          <p className="text-gray-400 mb-4">
            Click here to download our company presentation.
          </p>

          <button className="flex items-center gap-2 bg-(--color-brand) hover:bg-(--color-brand) text-white px-5 py-2 rounded-md font-medium transition">
            <Download size={18} /> Download
          </button>

          {/* SOCIALS */}
          <h3 className="text-lg font-bold mt-8 mb-4 tracking-wide">
            FOLLOW US
          </h3>

          <div className="flex items-center gap-4">
            <LinkedinIcon className="w-8 h-8 p-2 bg-gray-700 rounded-full hover:bg-(--color-brand) transition cursor-pointer" />
            <YoutubeIcon className="w-8 h-8 p-2 bg-gray-700 rounded-full hover:bg-(--color-brand) transition cursor-pointer" />
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wide">CONTACT US</h3>

          {/* Pakistan */}
          <div className="mb-6">
            <div className="bg-(--color-brand) text-white px-4 py-2 font-semibold rounded-t-md">
              Pakistan
            </div>
            <div className="bg-[#252528] p-4 rounded-b-md text-gray-300 leading-relaxed">
              <p>EndevSystems (SMC Pvt) Ltd.</p>
              <p>208 Global Heights</p>
              <p>Abdul Haq Road, Opp Exp Center</p>
              <p>Lahore, Pakistan</p>
              <p className="mt-2">+92 3164100201</p>
              <p className="text-(--color-brand)">info@endevsystems.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM LINE */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} EndevSystems. All Rights Reserved.
      </div>
    </footer>
  );
}
