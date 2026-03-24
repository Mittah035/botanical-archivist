import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()
    const params = new URLSearchParams(body)
    const paymentId = params.get("id")

    if (!paymentId) {
      return NextResponse.json({ error: "Geen payment ID" }, { status: 400 })
    }

    // TODO: Mollie webhook verwerking
    // const mollieClient = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! })
    // const payment = await mollieClient.payments.get(paymentId)
    // if (payment.isPaid()) {
    //   // Update order status in Supabase
    //   // Send confirmation email via Resend
    // }

    console.log("Mollie webhook:", paymentId)
    return NextResponse.json({ received: true })
  } catch {
    return NextResponse.json({ error: "Webhook verwerking mislukt" }, { status: 500 })
  }
}
