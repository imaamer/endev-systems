/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, company } = await req.json();

    // 1️⃣ Honeypot check (spam bots fill hidden fields)
    if (company) {
      return NextResponse.json({ success: true });
    }

    // 2️⃣ Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 3️⃣ Send email
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["engr.amir081@gmail.com"],
      replyTo: email,
      subject: `New Contact Request — ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
