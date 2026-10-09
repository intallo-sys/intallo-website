import { Resend } from "resend";

let client: Resend | undefined;
function getClient(): Resend {
  if (!client) client = new Resend(process.env.RESEND_API_KEY);
  return client;
}

const oneLine = (value: string | number) => String(value).replace(/[\r\n]+/g, " ").trim();

export interface SendContactNotificationParams {
  name: string;
  email: string;
  company: string;
  message: string;
}

/** Sends the internal notification. Returns the provider message id. Throws on failure. */
export async function sendContactNotification({
  name,
  email,
  company,
  message,
}: SendContactNotificationParams): Promise<string | null> {
  const { data, error } = await getClient().emails.send({
    from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
    to: process.env.CONTACT_RECIPIENT_EMAIL || "hello@intallo.com",
    replyTo: email, // visitor's address; From stays the verified INTALLO sender
    subject: `New project enquiry from ${oneLine(name)}`,
    // Plain text only: no raw HTML, so user input cannot inject markup.
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nProject:\n${message}`,
  });

  if (error) throw new Error("EMAIL_PROVIDER_ERROR");
  return data?.id ?? null;
}
