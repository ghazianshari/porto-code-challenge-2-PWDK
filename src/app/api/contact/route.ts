import { EmailTemplate } from '@/app/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// pake Resend.com baca dokumentasi lagi jika bingung
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // kalo semisal ada yang nggak di isi salah satu, langsung 400
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['ghazi.anshari@gmail.com'],
      subject: `📬 New Message from ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    console.log(`Ini hasil dari data ${data}`);

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }

    console.log(data);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });


  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
};