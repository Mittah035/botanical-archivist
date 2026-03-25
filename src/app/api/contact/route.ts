import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Naam, e-mail en bericht zijn verplicht." },
        { status: 400 }
      )
    }

    // TODO: Resend email integration
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: "noreply@magicmushies.nl",
    //   to: "info@magicmushies.nl",
    //   subject: `Contact: ${subject || "Nieuw bericht"}`,
    //   html: `<p>Van: ${name} (${email})</p><p>${message}</p>`,
    // })

    console.log("Contact form submission:", { name, email, subject, message })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het opnieuw." },
      { status: 500 }
    )
  }
}
