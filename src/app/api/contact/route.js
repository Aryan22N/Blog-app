import { NextResponse } from "next/server";
import connectMongoose from "@/lib/mongoose";
import Contact from "@/models/contact.model";
import { Resend } from "resend";
import React from "react";
import ContactEmail from "@/emails/ContactEmail";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    //checking sare fiels fill hai ya nahi
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    //  Save message in MongoDB
    await connectMongoose();
    await Contact.create({ name, email, message });

    // Send email to your Gmail
    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: ["aryannandanwar4@gmail.com"],
      subject: "New Contact Message",
      react: ContactEmail({ name, email, message }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT ERROR:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
