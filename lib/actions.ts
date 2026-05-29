"use server";

import { Resend } from 'resend';

const contactEmail = process.env.CONTACT_EMAIL || '';

export async function sendEmail(formData: FormData) {
  const resendApiKey = process.env.RESEND_API_KEY;
  let resend: Resend | null = null;
  if (resendApiKey) {
    try {
      resend = new Resend(resendApiKey);
    } catch (err) {
      console.error('Failed to initialize Resend:', err);
      resend = null;
    }
  }
  const name = formData.get('identifier') as string;
  const subject = formData.get('subject') as string;
  const email = formData.get('commlink') as string;
  const message = formData.get('data') as string;

  if (!name || !email || !message) {
    return { error: 'Missing required fields' };
  }

  if (!resend) {
    // Resend is not configured; return a clear message so the caller can fallback to mailto or show UI.
    return { error: 'Resend API key not configured. Please contact via mailto.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Kraken Contact <onboarding@resend.dev>', // Resend default from address for testing
      to: [contactEmail],
      subject: `New Inquiry: ${subject || 'General Contact'}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error(error);
      return { error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error(err);
    return { error: err.message || 'Failed to send email' };
  }
}
