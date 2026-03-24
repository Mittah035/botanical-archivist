import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-surface-low flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-6">🍄</div>
        <h1 className="font-display text-4xl font-extrabold text-primary mb-3">404</h1>
        <p className="text-foreground/60 mb-8">
          Deze pagina is niet gevonden. Misschien is het diep in het archief verdwenen.
        </p>
        <Link href="/">
          <button className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors">
            Terug naar home
          </button>
        </Link>
      </div>
    </main>
  )
}
