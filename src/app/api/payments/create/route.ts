import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { amount, method, description, redirectUrl, webhookUrl } = body

    if (!amount || !method) {
      return NextResponse.json(
        { error: "Bedrag en betaalmethode zijn verplicht." },
        { status: 400 }
      )
    }

    // TODO: Mollie integration
    // const mollieClient = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! })
    // const payment = await mollieClient.payments.create({
    //   amount: { currency: "EUR", value: (amount / 100).toFixed(2) },
    //   description,
    //   redirectUrl,
    //   webhookUrl,
    //   method,
    // })
    // return NextResponse.json({ checkoutUrl: payment.getCheckoutUrl() })

    // Mock response for development
    return NextResponse.json({
      checkoutUrl: "/order-success",
      paymentId: `mock_${Date.now()}`,
    })
  } catch {
    return NextResponse.json(
      { error: "Betaling kon niet worden aangemaakt." },
      { status: 500 }
    )
  }
}
