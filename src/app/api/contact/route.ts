import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { fullname, email, phoneNumber, subject, message } = await req.json();

  if (!fullname || !email || !subject || !message) {
    return NextResponse.json({
      message: "silakan isi field input dengan benar",
    });
  }
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // email kamu
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email, // ini dari pengunjung
      to: process.env.GMAIL_USER, // kirim ke kamu
      subject: subject,
      text: `Dari: ${fullname} (${phoneNumber}) - ${email}\n\nPesan:\n${message}`,
    });

    return NextResponse.json({
      message: "Email berhasil dikirim",
    });
  } catch (error) {
    return NextResponse.json({ message: "Failed send email", error });
  }
}
