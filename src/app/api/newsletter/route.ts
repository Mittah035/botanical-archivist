import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Ongeldig e-mailadres." }, { status: 400 })
    }

    const ip = req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? "unknown"

    if (resend) {
      // Bevestigingsmail naar subscriber
      await resend.emails.send({
        from: process.env.EMAIL_FROM || "Magicmushies <info@magicmushies.nl>",
        to: email,
        subject: "Welkom bij Magicmushies 🍄",
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
            <h2 style="color: #2d6a4f;">Welkom bij Magicmushies!</h2>
            <p>Je staat nu op de nieuwsbrief. Je ontvangt maximaal 2 e-mails per maand met:</p>
            <ul>
              <li>Nieuwe producten en seizoensaanbiedingen</li>
              <li>Educatieve guides over veilig gebruik</li>
              <li>Exclusieve kortingen voor vaste klanten</li>
            </ul>
            <p style="color: #666; font-size: 13px; margin-top: 32px;">
              Afmelden? Klik <a href="${process.env.NEXT_PUBLIC_SITE_URL}/unsubscribe?email=${encodeURIComponent(email)}">hier</a>.
            </p>
          </div>
        `,
      })

      // Interne notificatie
      await resend.emails.send({
        from: process.env.EMAIL_FROM || "Magicmushies <info@magicmushies.nl>",
        to: "info@magicmushies.nl",
        subject: `Nieuwe nieuwsbrief aanmelding: ${email}`,
        html: `<p>Nieuw: <strong>${email}</strong> (IP: ${ip})</p>`,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Newsletter error:", err)
    return NextResponse.json({ error: "Er ging iets mis." }, { status: 500 })
  }
}
