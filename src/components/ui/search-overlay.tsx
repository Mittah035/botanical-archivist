"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Search, X } from "lucide-react"

const suggestions = [
  "Atlantis Truffels",
  "Hollandia Truffels",
  "Microdoseer Starter Kit",
  "Golden Teacher Growkit",
  "Psilocybe Tampanensis",
]

interface SearchOverlayProps {
  open: boolean
  onClose: () => void
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      setQuery("")
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/products?search=${encodeURIComponent(query.trim())}`)
    onClose()
  }

  function handleSuggestion(s: string) {
    router.push(`/products?search=${encodeURIComponent(s)}`)
    onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex flex-col">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-white w-full shadow-xl px-4 lg:px-8 py-5">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zoek producten, categorieën..."
              className="flex-1 text-lg text-gray-900 placeholder-gray-400 bg-transparent border-none outline-none"
            />
            <button
              type="button"
              onClick={onClose}
              className="p-1 hover:opacity-70 transition-opacity"
              aria-label="Sluiten"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </form>

          {/* Suggestions */}
          <div className="mt-4 border-t border-gray-100 pt-4">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-medium">
              Populaire zoekopdrachten
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSuggestion(s)}
                  className="text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
