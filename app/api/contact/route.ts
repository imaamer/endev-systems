import { NextResponse } from "next/server";
import { Resend } from "resend";

console.log("ENV CHECK:", {
  hasKey: !!process.env.RESEND_API_KEY,
  nodeEnv: process.env.NODE_ENV,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Incoming payload:", body);

    const { name, email, message, company } = body;
    // Honeypot
    if (company) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "EndevSystems <no-reply@endevsystems.com>", // ✅ REQUIRED
      to: ["jamal@endevsystems.com"],
      subject: `Query from ${name} – ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email, // user's email goes here
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
