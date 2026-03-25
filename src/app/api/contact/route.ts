import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Naam, e-mail en bericht zijn verplicht." }, { status: 400 })
    }

    if (resend) {
      // Mail naar info@magicmushies.nl
      await resend.emails.send({
        from: process.env.EMAIL_FROM || "Magicmushies <info@magicmushies.nl>",
        to: "info@magicmushies.nl",
        replyTo: email,
        subject: `Contact: ${subject || "Nieuw bericht"} — van ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
            <h2>Nieuw contactbericht</h2>
            <table style="width:100%; border-collapse:collapse;">
              <tr><td style="padding:8px; font-weight:bold; width:120px;">Naam</td><td style="padding:8px;">${name}</td></tr>
              <tr><td style="padding:8px; font-weight:bold;">E-mail</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px; font-weight:bold;">Onderwerp</td><td style="padding:8px;">${subject || "—"}</td></tr>
            </table>
            <div style="margin-top:16px; padding:16px; background:#f9f9f8; border-radius:8px; white-space:pre-wrap;">${message}</div>
          </div>
        `,
      })

      // Bevestigingsmail naar klant
      await resend.emails.send({
        from: process.env.EMAIL_FROM || "Magicmushies <info@magicmushies.nl>",
        to: email,
        subject: "We hebben je bericht ontvangen — Magicmushies",
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
            <h2 style="color: #2d6a4f;">Bedankt voor je bericht, ${name}!</h2>
            <p>We reageren binnen 1 werkdag. Je bericht:</p>
            <div style="padding:16px; background:#f9f9f8; border-radius:8px; white-space:pre-wrap; color:#555;">${message}</div>
            <p style="margin-top:24px;">Met vriendelijke groet,<br/><strong>Team Magicmushies</strong></p>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact error:", err)
    return NextResponse.json({ error: "Er ging iets mis. Probeer het opnieuw." }, { status: 500 })
  }
}
