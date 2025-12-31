"use client";

import PageHeader from "@/components/site/PageHeader";

type FAQ = {
  question: string;
  answer: string;
  bullets?: string[];
};

const faqs: FAQ[] = [
  {
    question: "How can EndevSystems meet tight project schedules?",
    answer:
      "We reduce turnaround time through structured planning and parallel execution.",
    bullets: [
      "Parallel task execution with multiple engineers",
      "Flexible working hours and extended availability",
      "Clear milestone-based planning",
      "Fast communication and rapid feedback cycles",
    ],
  },
  {
    question: "How do you ensure quality in your deliverables?",
    answer: "Quality is embedded into every stage of our workflow.",
    bullets: [
      "Peer reviews and internal verification",
      "Industry best practices and standards",
      "Client-aligned validation checkpoints",
      "Continuous improvement based on feedback",
    ],
  },
  {
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer:
      "Yes. We routinely sign NDAs to protect client confidentiality and intellectual property.",
  },
  {
    question: "Who owns the intellectual property (IP)?",
    answer:
      "All intellectual property belongs entirely to the client. Full ownership is transferred upon project completion.",
  },
  {
    question: "Can you follow our internal processes and standards?",
    answer:
      "Yes. We follow industry standards by default and fully adapt to client-specific workflows and guidelines.",
  },
  {
    question: "How can I track project progress?",
    answer:
      "We provide regular updates through shared documentation, progress reports, and scheduled meetings.",
  },
  {
    question: "What communication channels do you use?",
    answer: "We communicate through secure and reliable channels.",
    bullets: [
      "Email",
      "Video and voice calls",
      "Secure file-sharing platforms",
    ],
  },
  {
    question: "What engagement models do you offer?",
    answer: "We offer flexible engagement options depending on your needs.",
    bullets: [
      "Time & Materials – Pay for actual hours worked",
      "Dedicated Team – Monthly allocation of resources",
      "Fixed Scope – Clearly defined deliverables",
    ],
  },
  {
    question: "Why should we outsource to Endev Systems?",
    answer:
      "Outsourcing with us helps businesses scale efficiently and focus on core objectives.",
    bullets: [
      "Focus on core business priorities",
      "Reduced operational costs",
      "Access to experienced engineering talent",
      "Faster time-to-market",
    ],
  },
  {
    question: "Can you provide partial or specialized services only?",
    answer:
      "Yes. We can support specific components, modules, or consulting engagements as needed.",
  },
  {
    question: "Is onsite or hybrid collaboration possible?",
    answer:
      "Yes. Onsite or hybrid collaboration can be arranged based on project requirements.",
  },
];

export default function FAQPage() {
  return (
    <div>
      <PageHeader title="Frequently Asked Questions" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-6">
              <h3 className="text-lg font-semibold text-(--color-brand)">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>

              {faq.bullets && (
                <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-700">
                  {faq.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
