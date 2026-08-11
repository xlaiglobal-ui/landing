import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendClientWelcomeEmail({
  to,
  name,
  password,
}: {
  to: string
  name: string
  password: string
}) {
  const loginUrl = `${process.env.BETTER_AUTH_URL}/login`

  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to,
    subject: "Your XLAI client dashboard is ready",
    html: `
      <p>Hi ${name},</p>
      <p>Your XLAI client dashboard has been created. Here's how to sign in:</p>
      <p>
        Login: <a href="${loginUrl}">${loginUrl}</a><br />
        Email: ${to}<br />
        Temporary password: <strong>${password}</strong>
      </p>
      <p>We'd recommend changing your password after your first sign-in, from Settings in the dashboard.</p>
    `,
  })

  if (error) {
    throw new Error(`Resend failed to send welcome email: ${error.message}`)
  }
}
