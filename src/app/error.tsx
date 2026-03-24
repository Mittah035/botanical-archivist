"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-surface-low flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-6">⚠️</div>
        <h2 className="font-display text-2xl font-bold text-primary mb-3">
          Er ging iets mis
        </h2>
        <p className="text-foreground/60 mb-8 text-sm">
          We konden de pagina niet laden. Probeer het opnieuw of ga terug naar de homepage.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-primary text-white font-bold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-colors text-sm"
          >
            Opnieuw proberen
          </button>
          <a href="/" className="border border-primary/20 text-primary font-medium px-5 py-2.5 rounded-xl hover:bg-primary/5 transition-colors text-sm">
            Naar home
          </a>
        </div>
      </div>
    </main>
  )
}
