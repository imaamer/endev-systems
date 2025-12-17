import PageHeader from "@/components/site/PageHeader";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Contact Us" />

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: FORM */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Enter Your Details</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-(--color-brand) text-white px-8 py-3 rounded-lg hover:bg-red-700 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: INFO + IMAGE */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Get in touch</h2>

            <p className="text-gray-700 leading-relaxed">
              Discuss Your Project with us Today. Request a Quote Online or Call
              us at <br />
              <span className="font-medium">+1-412-265-2314</span>.
            </p>

            <div className="rounded-xl overflow-hidden shadow">
              <Image
                src="/images/hero1.jpg"
                alt="Support"
                width={700}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
