import { ALLINFORMATION } from "@/constant";
import {
  generateAdminEmailHTML,
  generateUserEmailHTML,
} from "@/utils/email-templates";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Inquiry from ${data.name}`,
      html: generateAdminEmailHTML(data),
    });

    // User confirmation email
    await transporter.sendMail({
      from: `${ALLINFORMATION.OWNER_NAME} <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "We received your inquiry!",
      html: generateUserEmailHTML(data),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}
