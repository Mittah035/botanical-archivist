"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageCircle,
  X,
  Send,
  ChevronDown,
  Phone,
  Accessibility,
  ZoomIn,
  ZoomOut,
  Sun,
  Moon,
  Type,
  Contrast,
  Link2,
  RotateCcw,
  Minus,
  Plus,
  Volume2,
  VolumeX,
  Bot,
  User,
  Loader2,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

type Panel = "main" | "chat" | "whatsapp" | "accessibility"

interface Message {
  id: string
  role: "user" | "assistant"
  text: string
  timestamp: Date
}

interface AccessibilitySettings {
  fontSize: number          // 80–160%
  contrast: "normal" | "high" | "extra"
  theme: "system" | "light" | "dark"
  underlineLinks: boolean
  dyslexiaFont: boolean
  reduceMotion: boolean
  readAloud: boolean
}

// ─── AI Responses ─────────────────────────────────────────────────────────────

const BOT_RESPONSES: Record<string, string> = {
  default:
    "Bedankt voor je vraag! Ik help je graag. Voor persoonlijk advies kun je ook WhatsApp gebruiken of onze FAQ raadplegen.",
  truffels:
    "Onze truffels zijn 100% legaal in Nederland en bevatten psilocybine. We bieden soorten aan van mild (Mexicana, 6g) tot extreem krachtig (Valhalla, 22g). Welke ervaring zoek je?",
  growkit:
    "Onze growkits zijn ideaal voor thuis kweken. Ze bevatten alles wat je nodig hebt – mycelium, substraat en handleiding. De Golden Teacher is een perfecte beginnerkit.",
  microdosering:
    "Microdosering houdt in dat je een sub-perceptuele dosis neemt (0.1–0.3g). Ons Starter Kit bevat een 28-daags protocol en capsule machine. Meer info via de productpagina.",
  betaling:
    "We accepteren iDEAL, creditcard en Bancontact. Alle betalingen zijn beveiligd via Mollie. Betaling wordt verwerkt vóór verzending.",
  levering:
    "We verzenden discreet binnen Nederland via PostNL. Bestelling vóór 15:00 = volgende werkdag in huis. Gratis verzending bij €75+.",
  leeftijd:
    "Ja, onze producten zijn alleen voor 18+. Bij bestelling bevestig je dat je minimaal 18 jaar bent. Wij controleren dit actief.",
  veiligheid:
    "Truffels zijn veilig bij verantwoord gebruik. Combineer nooit met alcohol of medicatie. Lees onze set & setting gids voor optimale voorbereiding.",
  retour:
    "Vanwege de aard van het product (voedingsmiddelen) accepteren wij geen retourzendingen. Neem bij problemen contact op via WhatsApp.",
  kortingscode:
    "Kortingscodes kunnen worden ingevoerd bij het afrekenen. Schrijf je in voor onze nieuwsbrief voor exclusieve aanbiedingen.",
}

function getAIResponse(input: string): string {
  const lower = input.toLowerCase()
  if (lower.includes("truffel") || lower.includes("magic") || lower.includes("psilocyb")) return BOT_RESPONSES.truffels
  if (lower.includes("growkit") || lower.includes("kweken") || lower.includes("grow")) return BOT_RESPONSES.growkit
  if (lower.includes("microdose") || lower.includes("microdoseer") || lower.includes("protocol")) return BOT_RESPONSES.microdosering
  if (lower.includes("betaal") || lower.includes("ideal") || lower.includes("betaling")) return BOT_RESPONSES.betaling
  if (lower.includes("lever") || lower.includes("verzend") || lower.includes("bezorg")) return BOT_RESPONSES.levering
  if (lower.includes("leeftijd") || lower.includes("18") || lower.includes("minderjarig")) return BOT_RESPONSES.leeftijd
  if (lower.includes("veilig") || lower.includes("gevaar") || lower.includes("risico")) return BOT_RESPONSES.veiligheid
  if (lower.includes("retour") || lower.includes("terug") || lower.includes("ruilen")) return BOT_RESPONSES.retour
  if (lower.includes("korting") || lower.includes("discount") || lower.includes("coupon")) return BOT_RESPONSES.kortingscode
  return BOT_RESPONSES.default
}

const QUICK_QUESTIONS = [
  "Welke truffels zijn voor beginners?",
  "Hoe werkt microdosering?",
  "Wanneer is mijn bestelling er?",
  "Hoe kweek ik met een growkit?",
]

// ─── Accessibility Helpers ────────────────────────────────────────────────────

const DEFAULT_A11Y: AccessibilitySettings = {
  fontSize: 100,
  contrast: "normal",
  theme: "system",
  underlineLinks: false,
  dyslexiaFont: false,
  reduceMotion: false,
  readAloud: false,
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function ChatPanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      text: "Welkom bij Botanical Archivist! 🌿 Ik ben je persoonlijke assistent. Stel mij een vraag over onze producten, levering of microdosering.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return
      const userMsg: Message = {
        id: Date.now().toString(),
        role: "user",
        text: text.trim(),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, userMsg])
      setInput("")
      setIsTyping(true)

      setTimeout(() => {
        const response = getAIResponse(text)
        setIsTyping(false)
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            text: response,
            timestamp: new Date(),
          },
        ])
      }, 900 + Math.random() * 600)
    },
    []
  )

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-primary text-white rounded-t-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Bot size={16} />
          </div>
          <div>
            <p className="text-sm font-semibold">Botanical Assistent</p>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/80">Online</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
          <ChevronDown size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-white">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            <div
              className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs ${
                msg.role === "assistant" ? "bg-primary" : "bg-gray-400"
              }`}
            >
              {msg.role === "assistant" ? <Bot size={12} /> : <User size={12} />}
            </div>
            <div
              className={`max-w-[78%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                msg.role === "assistant"
                  ? "bg-gray-100 text-gray-800 rounded-tl-sm"
                  : "bg-primary text-white rounded-tr-sm"
              }`}
            >
              {msg.text}
              <p className="text-[10px] mt-1 opacity-50">
                {msg.timestamp.toLocaleTimeString("nl", { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <Bot size={12} className="text-white" />
            </div>
            <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3 py-2">
              <Loader2 size={14} className="animate-spin text-primary" />
            </div>
          </motion.div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick Questions */}
      <div className="px-3 py-2 bg-white border-t border-gray-100">
        <p className="text-[10px] text-gray-400 mb-1.5">Snelle vragen:</p>
        <div className="flex flex-wrap gap-1">
          {QUICK_QUESTIONS.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              className="text-[10px] bg-primary/10 text-primary rounded-full px-2 py-0.5 hover:bg-primary/20 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="px-3 py-3 bg-white border-t border-gray-100 rounded-b-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            sendMessage(input)
          }}
          className="flex gap-2"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Stel een vraag..."
            className="flex-1 text-sm bg-gray-100 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-40 hover:bg-primary/90 transition-colors"
          >
            <Send size={14} />
          </button>
        </form>
      </div>
    </div>
  )
}

function WhatsAppPanel({ onClose }: { onClose: () => void }) {
  const phoneNumber = "31612345678"
  const defaultMessage = "Hoi! Ik heb een vraag over jullie producten."
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`

  const templates = [
    { label: "Vraag over truffels", text: "Hoi! Ik heb een vraag over jullie truffels." },
    { label: "Bestelling status", text: "Hoi! Ik wil de status van mijn bestelling weten." },
    { label: "Advies microdosering", text: "Hoi! Ik zoek advies over microdosering." },
    { label: "Retour / klacht", text: "Hoi! Ik wil een retour of klacht melden." },
  ]

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#25D366] text-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Phone size={16} />
          </div>
          <div>
            <p className="text-sm font-semibold">WhatsApp Support</p>
            <p className="text-xs text-white/80">Ma–Vr 9:00–17:00</p>
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
          <ChevronDown size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {/* Info */}
        <div className="bg-[#f0fdf4] rounded-xl p-3 text-sm text-gray-600">
          <p className="font-medium text-gray-800 mb-1">Direct contact via WhatsApp</p>
          <p className="text-xs">Onze medewerkers reageren doorgaans binnen 2 uur op werkdagen.</p>
        </div>

        {/* Templates */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Kies een onderwerp</p>
          <div className="space-y-2">
            {templates.map((t) => (
              <a
                key={t.label}
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(t.text)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-3 py-2.5 bg-gray-50 hover:bg-[#f0fdf4] rounded-xl transition-colors group"
              >
                <span className="text-sm text-gray-700">{t.label}</span>
                <span className="text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium">
                  Open →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Direct open */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-xl font-medium text-sm hover:bg-[#20bc5a] transition-colors"
        >
          <Phone size={16} />
          Open WhatsApp
        </a>

        <p className="text-center text-[10px] text-gray-400">
          Buiten kantooruren? Stuur ons een bericht — we reageren zo snel mogelijk.
        </p>
      </div>
    </div>
  )
}

function AccessibilityPanel({
  settings,
  onChange,
  onReset,
  onClose,
}: {
  settings: AccessibilitySettings
  onChange: (key: keyof AccessibilitySettings, value: AccessibilitySettings[keyof AccessibilitySettings]) => void
  onReset: () => void
  onClose: () => void
}) {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 text-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Accessibility size={16} />
          </div>
          <div>
            <p className="text-sm font-semibold">Toegankelijkheid</p>
            <p className="text-xs text-white/60">Pas de weergave aan</p>
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
          <ChevronDown size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">

        {/* Font Size */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Type size={12} /> Tekstgrootte — {settings.fontSize}%
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onChange("fontSize", Math.max(80, settings.fontSize - 10))}
              className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            >
              <Minus size={14} />
            </button>
            <div className="flex-1 h-2 bg-gray-100 rounded-full relative">
              <div
                className="absolute left-0 top-0 h-2 bg-primary rounded-full transition-all"
                style={{ width: `${((settings.fontSize - 80) / 80) * 100}%` }}
              />
            </div>
            <button
              onClick={() => onChange("fontSize", Math.min(160, settings.fontSize + 10))}
              className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>

        {/* Contrast */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Contrast size={12} /> Contrast
          </p>
          <div className="grid grid-cols-3 gap-2">
            {(["normal", "high", "extra"] as const).map((c) => (
              <button
                key={c}
                onClick={() => onChange("contrast", c)}
                className={`py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  settings.contrast === c
                    ? "border-primary bg-primary text-white"
                    : "border-gray-200 text-gray-600 hover:border-primary/40"
                }`}
              >
                {c === "normal" ? "Normaal" : c === "high" ? "Hoog" : "Extra"}
              </button>
            ))}
          </div>
        </div>

        {/* Theme */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sun size={12} /> Thema
          </p>
          <div className="grid grid-cols-3 gap-2">
            {(["system", "light", "dark"] as const).map((t) => (
              <button
                key={t}
                onClick={() => onChange("theme", t)}
                className={`py-1.5 rounded-lg text-xs font-medium border transition-all flex items-center justify-center gap-1 ${
                  settings.theme === t
                    ? "border-primary bg-primary text-white"
                    : "border-gray-200 text-gray-600 hover:border-primary/40"
                }`}
              >
                {t === "light" ? <Sun size={10} /> : t === "dark" ? <Moon size={10} /> : null}
                {t === "system" ? "Systeem" : t === "light" ? "Licht" : "Donker"}
              </button>
            ))}
          </div>
        </div>

        {/* Toggles */}
        <div className="space-y-2">
          {[
            { key: "underlineLinks" as const, label: "Onderstreep links", icon: Link2 },
            { key: "dyslexiaFont" as const, label: "Dyslexie lettertype", icon: Type },
            { key: "reduceMotion" as const, label: "Minder animaties", icon: ZoomOut },
            { key: "readAloud" as const, label: "Voorlezen (experimenteel)", icon: Volume2 },
          ].map(({ key, label, icon: Icon }) => (
            <div key={key} className="flex items-center justify-between py-2 border-b border-gray-50">
              <span className="text-sm text-gray-700 flex items-center gap-2">
                <Icon size={14} className="text-gray-400" />
                {label}
              </span>
              <button
                onClick={() => onChange(key, !settings[key])}
                className={`w-10 h-5 rounded-full transition-all relative ${
                  settings[key] ? "bg-primary" : "bg-gray-200"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${
                    settings[key] ? "left-5" : "left-0.5"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Reset */}
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 w-full py-2.5 border border-gray-200 text-gray-500 rounded-xl text-sm hover:bg-gray-50 transition-colors"
        >
          <RotateCcw size={14} />
          Instellingen resetten
        </button>
      </div>
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

export function FloatingWidget() {
  const [openPanel, setOpenPanel] = useState<Panel | null>(null)
  const [a11y, setA11y] = useState<AccessibilitySettings>(DEFAULT_A11Y)
  const [hasNewMsg, setHasNewMsg] = useState(false)

  // Show chat notification after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!openPanel) setHasNewMsg(true)
    }, 8000)
    return () => clearTimeout(timer)
  }, [openPanel])

  const clearNotif = useCallback(() => setHasNewMsg(false), [])

  // Apply accessibility settings to <html>
  useEffect(() => {
    const root = document.documentElement

    // Font size
    root.style.fontSize = `${a11y.fontSize}%`

    // Contrast
    root.classList.remove("contrast-high", "contrast-extra")
    if (a11y.contrast === "high") root.classList.add("contrast-high")
    if (a11y.contrast === "extra") root.classList.add("contrast-extra")

    // Theme
    root.classList.remove("light", "dark")
    if (a11y.theme === "light") root.classList.add("light")
    if (a11y.theme === "dark") root.classList.add("dark")

    // Links
    if (a11y.underlineLinks) root.style.setProperty("--underline-links", "underline")
    else root.style.removeProperty("--underline-links")

    // Dyslexia font
    if (a11y.dyslexiaFont) root.style.setProperty("--font-dyslexia", "OpenDyslexic, Comic Sans MS, sans-serif")
    else root.style.removeProperty("--font-dyslexia")

    // Reduce motion
    if (a11y.reduceMotion) root.style.setProperty("--motion-reduce", "reduce")
    else root.style.removeProperty("--motion-reduce")
  }, [a11y])

  const updateA11y = (key: keyof AccessibilitySettings, value: AccessibilitySettings[keyof AccessibilitySettings]) => {
    setA11y((prev) => ({ ...prev, [key]: value }))
  }

  const resetA11y = () => {
    setA11y(DEFAULT_A11Y)
    document.documentElement.style.fontSize = "100%"
    document.documentElement.classList.remove("contrast-high", "contrast-extra", "light", "dark")
  }

  const toggle = (panel: Panel) => {
    setOpenPanel((prev) => (prev === panel ? null : panel))
    if (panel === "chat") clearNotif()
  }

  const panelVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 12, scale: 0.95 },
  }

  return (
    <div className="fixed bottom-5 right-4 z-[9999] flex flex-col items-end gap-3">
      {/* ── Expanded Panel ──────────────────────────────────── */}
      <AnimatePresence>
        {openPanel && (
          <motion.div
            key={openPanel}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-80 h-[480px] rounded-2xl shadow-2xl shadow-black/20 overflow-hidden border border-gray-100"
          >
            {openPanel === "chat" && <ChatPanel onClose={() => setOpenPanel(null)} />}
            {openPanel === "whatsapp" && <WhatsAppPanel onClose={() => setOpenPanel(null)} />}
            {openPanel === "accessibility" && (
              <AccessibilityPanel
                settings={a11y}
                onChange={updateA11y}
                onReset={resetA11y}
                onClose={() => setOpenPanel(null)}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Button Stack ─────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-2">

        {/* Accessibility button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => toggle("accessibility")}
          title="Toegankelijkheidsopties"
          className={`w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-colors ${
            openPanel === "accessibility"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Accessibility size={18} />
        </motion.button>

        {/* WhatsApp button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => toggle("whatsapp")}
          title="WhatsApp support"
          className={`w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-colors ${
            openPanel === "whatsapp"
              ? "bg-[#20bc5a] text-white"
              : "bg-[#25D366] text-white hover:bg-[#20bc5a]"
          }`}
        >
          <Phone size={18} />
        </motion.button>

        {/* Chat button (main, largest) */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => toggle("chat")}
          title="Chat met ons"
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-colors relative ${
            openPanel === "chat"
              ? "bg-primary/90 text-white"
              : "bg-primary text-white hover:bg-primary/90"
          }`}
        >
          <AnimatePresence mode="wait">
            {openPanel === "chat" ? (
              <motion.span key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="chat" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                <MessageCircle size={22} />
              </motion.span>
            )}
          </AnimatePresence>

          {/* Notification dot */}
          <AnimatePresence>
            {hasNewMsg && openPanel !== "chat" && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[9px] text-white font-bold"
              >
                1
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  )
}
