import Link from "next/link"
import { CheckCircle, Package, Mail, Home } from "lucide-react"

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-surface-low pt-24 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl p-8 shadow-card">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h1 className="font-display text-2xl font-bold text-primary mb-2">
            Bestelling geplaatst!
          </h1>
          <p className="text-foreground/60 text-sm mb-8">
            Dank je voor je bestelling bij Magicmushies. Je ontvangt een
            bevestiging per e-mail met je ordernummer en track & trace code.
          </p>

          <div className="space-y-3 mb-8 text-left">
            {[
              {
                icon: Mail,
                title: "Bevestigingsmail verstuurd",
                desc: "Check je inbox (en spam) voor je ordernummer.",
              },
              {
                icon: Package,
                title: "Discreet verpakt",
                desc: "Je bestelling wordt neutraal en discreet verpakt verstuurd.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3 bg-surface-low rounded-xl p-3">
                <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-primary">{title}</p>
                  <p className="text-xs text-foreground/60">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <Link href="/products">
              <button className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-colors">
                Verder winkelen
              </button>
            </Link>
            <Link href="/">
              <button className="w-full flex items-center justify-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors py-2">
                <Home className="w-4 h-4" />
                Terug naar home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
