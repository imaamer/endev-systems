/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* -------------------- OPTIONS -------------------- */

const TOPIC_OPTIONS = [
  "Application layer & middleware",
  "Cybersecurity",
  "Debugging and profiling",
  "Device Drivers Development",
  "Edge computing, AI and Machine Learning",
  "Firmware development",
  "IoT devices development",
  "OS and bootloaders development",
  "PCB design & manufacturing",
  "Other (please specify below)",
  "Not interested in services",
];

const LOCATION_OPTIONS = ["China", "USA", "Pakistan"];

/* -------------------- SMALL HELPER -------------------- */

function FormField({ label, required, children, fullWidth }: any) {
  return (
    <div className={`space-y-1.5 ${fullWidth ? "md:col-span-2" : ""}`}>
      <label className="text-sm font-medium text-gray-800">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {children}
    </div>
  );
}

/* -------------------- COMPONENT -------------------- */

export default function GetAQuote() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    topic: "",
    location: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (
      !form.firstName ||
      !form.lastName ||
      !form.company ||
      !form.email ||
      !form.topic ||
      !form.comments
    ) {
      setError("Please fill all required fields.");
      return;
    }

    if (!isValidEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      /* const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed"); */

      console.log(form);

      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        topic: "",
        location: "",
        comments: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-(--color-brand) text-white">
          Get a Quote
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 max-w-[1400px] w-[95vw]">
        <div className="flex flex-col lg:flex-row">
          {/* LEFT PANEL */}
          <div className="bg-[#0B1C2D] text-white p-16 w-full lg:w-1/2">
            <DialogHeader>
              <DialogTitle className="text-4xl font-semibold">
                Get a Quote
              </DialogTitle>
            </DialogHeader>

            <p className="mt-6 text-lg text-gray-300">
              Looking for a contract manufacturing partner who gets it right the
              first time? EndevSystems delivers high-quality design and
              manufacturing built for scale and reliability.
            </p>

            <ul className="mt-8 space-y-3 text-gray-300">
              <li>• DFM-optimized PCB design</li>
              <li>• Low to high-volume manufacturing</li>
              <li>• BOM optimization & sourcing</li>
              <li>• Enclosure & final assembly</li>
            </ul>

            <div className="mt-10 text-gray-400">
              info@endevsystems.com <br />
              +92 3164100201
            </div>
          </div>

          {/* RIGHT PANEL – FORM */}
          <div className="bg-white p-16 w-full lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <FormField label="First Name" required>
                <Input
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="Last Name" required>
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="Company name" required>
                <Input
                  name="company"
                  placeholder="Company"
                  value={form.company}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="Email" required>
                <Input
                  name="email"
                  type="email"
                  placeholder="Corporate email"
                  value={form.email}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="Phone">
                <Input
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="Topic of Inquiry" required>
                <Select
                  value={form.topic}
                  onValueChange={(v) => setForm({ ...form, topic: v })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Topic of Inquiry" />
                  </SelectTrigger>
                  <SelectContent>
                    {TOPIC_OPTIONS.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormField>

              <FormField label="Preferred Manufacturing Location" fullWidth>
                <div className="md:col-span-2">
                  <Select
                    value={form.location}
                    onValueChange={(v) => setForm({ ...form, location: v })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      {LOCATION_OPTIONS.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </FormField>

              <FormField label="Additional Comments" required fullWidth>
                <div className="md:col-span-2">
                  <textarea
                    name="comments"
                    className="w-full min-h-[160px] rounded-md border px-4 py-3 text-sm"
                    placeholder="Additional Comments"
                    value={form.comments}
                    onChange={handleChange}
                  />
                </div>
              </FormField>

              {error && (
                <p className="md:col-span-2 text-sm text-red-600">{error}</p>
              )}

              {success && (
                <p className="md:col-span-2 text-sm text-green-600">
                  Request submitted successfully.
                </p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="md:col-span-2 bg-(--color-brand) text-white"
              >
                {loading ? "Submitting..." : "Get Your Quote"}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
