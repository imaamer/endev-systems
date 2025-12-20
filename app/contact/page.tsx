"use client";

import { useState } from "react";
import PageHeader from "@/components/site/PageHeader";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "", // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        company: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <PageHeader title="Contact Us" />

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: FORM */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Enter Your Details</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot (hidden) */}
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-(--color-brand)"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-(--color-brand)"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-(--color-brand)"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-(--color-brand)"
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  bg-(--color-brand)
                  text-white
                  px-8
                  py-3
                  rounded-lg
                  transition
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Feedback */}
              {success && (
                <p className="text-green-600 text-sm">
                  Thank you! Your message has been sent.
                </p>
              )}

              {error && <p className="text-red-600 text-sm">{error}</p>}
            </form>
          </div>

          {/* RIGHT: INFO + IMAGE */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Get in touch</h2>

            <p className="text-gray-700 leading-relaxed">
              Discuss your project with us today. Request a quote online or call
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
