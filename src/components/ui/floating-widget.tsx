"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageCircle, X, Send, Bot, User, Loader2,
  Phone, Accessibility, Type, Contrast, Sun, Moon,
  Link2, ZoomOut, RotateCcw, Minus, Plus, Volume2,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = "chat" | "whatsapp" | "accessibility"

interface Message {
  id: string
  role: "user" | "assistant"
  text: string
  time: Date
}

interface A11y {
  fontSize: number
  contrast: "normal" | "high" | "extra"
  theme: "system" | "light" | "dark"
  underlineLinks: boolean
  dyslexiaFont: boolean
  reduceMotion: boolean
}

// ─── AI ───────────────────────────────────────────────────────────────────────

const REPLIES: Record<string, string> = {
  truffels: "Onze truffels variëren van mild (Mexicana, 6g) tot extreem krachtig (Valhalla, 22g). Welke ervaring zoek je?",
  growkit: "Onze growkits bevatten alles voor thuis kweken. De Golden Teacher is ideaal voor beginners.",
  microdosering: "Microdosering = 0.1–0.3g per dag. Ons Starter Kit bevat een 28-daags protocol.",
  betaling: "We accepteren iDEAL, creditcard en Bancontact via Mollie. Veilig en versleuteld.",
  levering: "Discreet bezorgd via PostNL. Vóór 15:00 besteld = volgende werkdag in huis. Gratis vanaf €75.",
  leeftijd: "Onze producten zijn uitsluitend voor personen van 18 jaar en ouder.",
  retour: "Vanwege de aard van het product accepteren wij geen retourzendingen. Vragen? Neem contact op.",
  default: "Bedankt voor je vraag! Ik help je graag. Bekijk ook onze FAQ of neem contact op via WhatsApp.",
}

function getReply(input: string): string {
  const s = input.toLowerCase()
  if (s.includes("truffel") || s.includes("magic")) return REPLIES.truffels
  if (s.includes("growkit") || s.includes("kweken")) return REPLIES.growkit
  if (s.includes("microdose") || s.includes("protocol")) return REPLIES.microdosering
  if (s.includes("betaal") || s.includes("ideal")) return REPLIES.betaling
  if (s.includes("lever") || s.includes("verzend")) return REPLIES.levering
  if (s.includes("18") || s.includes("leeftijd")) return REPLIES.leeftijd
  if (s.includes("retour") || s.includes("terug")) return REPLIES.retour
  return REPLIES.default
}

const QUICK = ["Welke truffels voor beginners?", "Hoe werkt microdosering?", "Wanneer bezorgd?"]

// ─── Chat Tab ─────────────────────────────────────────────────────────────────

function ChatTab() {
  const [messages, setMessages] = useState<Message[]>([{
    id: "0", role: "assistant",
    text: "Hallo! Stel mij een vraag over onze producten, levering of microdosering. 🌿",
    time: new Date(),
  }])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }) }, [messages, typing])

  const send = useCallback((text: string) => {
    if (!text.trim()) return
    setMessages(p => [...p, { id: Date.now().toString(), role: "user", text, time: new Date() }])
    setInput("")
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(p => [...p, { id: (Date.now() + 1).toString(), role: "assistant", text: getReply(text), time: new Date() }])
    }, 800 + Math.random() * 500)
  }, [])

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.map(m => (
          <motion.div key={m.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
            <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ${m.role === "assistant" ? "bg-black text-white" : "bg-gray-200 text-gray-600"}`}>
              {m.role === "assistant" ? <Bot size={11} /> : <User size={11} />}
            </div>
            <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${m.role === "assistant" ? "bg-gray-100 text-gray-800 rounded-tl-none" : "bg-black text-white rounded-tr-none"}`}>
              {m.text}
            </div>
          </motion.div>
        ))}
        {typing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
              <Bot size={11} className="text-white" />
            </div>
            <div className="bg-gray-100 rounded-2xl rounded-tl-none px-3 py-2">
              <Loader2 size={13} className="animate-spin text-gray-400" />
            </div>
          </motion.div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick questions */}
      <div className="px-4 pb-2">
        <div className="flex flex-wrap gap-1">
          {QUICK.map(q => (
            <button key={q} onClick={() => send(q)}
              className="text-[10px] px-2 py-1 rounded-full border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-colors">
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="px-4 pb-4">
        <form onSubmit={e => { e.preventDefault(); send(input) }} className="flex gap-2">
          <input value={input} onChange={e => setInput(e.target.value)}
            placeholder="Stel een vraag…"
            className="flex-1 text-sm bg-gray-100 rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-black/10" />
          <button type="submit" disabled={!input.trim()}
            className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center disabled:opacity-30 hover:bg-gray-800 transition-colors">
            <Send size={13} />
          </button>
        </form>
      </div>
    </div>
  )
}

// ─── WhatsApp Tab ─────────────────────────────────────────────────────────────

function WhatsAppTab() {
  const phone = "31612345678"
  const templates = [
    "Ik heb een vraag over jullie truffels.",
    "Ik wil de status van mijn bestelling weten.",
    "Ik zoek advies over microdosering.",
    "Ik wil een klacht melden.",
  ]

  return (
    <div className="flex flex-col h-full px-4 py-4 gap-4">
      <div className="bg-[#f0fdf4] rounded-2xl p-3">
        <p className="text-sm font-medium text-gray-800">WhatsApp Support</p>
        <p className="text-xs text-gray-500 mt-0.5">Maandag – vrijdag, 9:00 – 17:00</p>
      </div>

      <div className="space-y-2">
        {templates.map(t => (
          <a key={t} href={`https://wa.me/${phone}?text=${encodeURIComponent("Hoi! " + t)}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 rounded-2xl border border-gray-100 hover:border-gray-300 transition-colors group">
            <span className="text-sm text-gray-700">{t}</span>
            <span className="text-xs text-gray-300 group-hover:text-gray-600 transition-colors">→</span>
          </a>
        ))}
      </div>

      <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#25D366] text-white text-sm font-medium hover:bg-[#20bc5a] transition-colors">
        <Phone size={15} />
        Open WhatsApp
      </a>
    </div>
  )
}

// ─── Accessibility Tab ────────────────────────────────────────────────────────

function AccessibilityTab() {
  const [s, setS] = useState<A11y>({ fontSize: 100, contrast: "normal", theme: "system", underlineLinks: false, dyslexiaFont: false, reduceMotion: false })

  const set = (k: keyof A11y, v: A11y[keyof A11y]) => setS(p => ({ ...p, [k]: v }))

  useEffect(() => {
    const r = document.documentElement
    r.style.fontSize = `${s.fontSize}%`
    r.classList.toggle("contrast-high", s.contrast === "high")
    r.classList.toggle("contrast-extra", s.contrast === "extra")
    r.classList.toggle("dark", s.theme === "dark")
    r.classList.toggle("light", s.theme === "light")
  }, [s])

  const Toggle = ({ label, k, icon: Icon }: { label: string; k: keyof A11y; icon: React.ElementType }) => (
    <div className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
      <span className="flex items-center gap-2 text-sm text-gray-600">
        <Icon size={13} className="text-gray-400" />{label}
      </span>
      <button onClick={() => set(k, !s[k])}
        className={`w-9 h-5 rounded-full relative transition-colors ${s[k] ? "bg-black" : "bg-gray-200"}`}>
        <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${s[k] ? "left-4" : "left-0.5"}`} />
      </button>
    </div>
  )

  return (
    <div className="flex flex-col h-full overflow-y-auto px-4 py-4 gap-5">
      {/* Font size */}
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Tekstgrootte — {s.fontSize}%</p>
        <div className="flex items-center gap-3">
          <button onClick={() => set("fontSize", Math.max(80, s.fontSize - 10))}
            className="w-8 h-8 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Minus size={13} />
          </button>
          <div className="flex-1 h-1 bg-gray-100 rounded-full">
            <div className="h-1 bg-black rounded-full transition-all" style={{ width: `${((s.fontSize - 80) / 80) * 100}%` }} />
          </div>
          <button onClick={() => set("fontSize", Math.min(160, s.fontSize + 10))}
            className="w-8 h-8 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Plus size={13} />
          </button>
        </div>
      </div>

      {/* Contrast */}
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Contrast</p>
        <div className="grid grid-cols-3 gap-1.5">
          {(["normal", "high", "extra"] as const).map(c => (
            <button key={c} onClick={() => set("contrast", c)}
              className={`py-1.5 rounded-xl text-xs font-medium transition-all ${s.contrast === c ? "bg-black text-white" : "border border-gray-200 text-gray-500 hover:border-gray-400"}`}>
              {c === "normal" ? "Normaal" : c === "high" ? "Hoog" : "Extra"}
            </button>
          ))}
        </div>
      </div>

      {/* Theme */}
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Thema</p>
        <div className="grid grid-cols-3 gap-1.5">
          {(["system", "light", "dark"] as const).map(t => (
            <button key={t} onClick={() => set("theme", t)}
              className={`py-1.5 rounded-xl text-xs font-medium flex items-center justify-center gap-1 transition-all ${s.theme === t ? "bg-black text-white" : "border border-gray-200 text-gray-500 hover:border-gray-400"}`}>
              {t === "light" && <Sun size={10} />}{t === "dark" && <Moon size={10} />}
              {t === "system" ? "Auto" : t === "light" ? "Licht" : "Donker"}
            </button>
          ))}
        </div>
      </div>

      {/* Toggles */}
      <div>
        <Toggle label="Links onderstrepen" k="underlineLinks" icon={Link2} />
        <Toggle label="Dyslexie lettertype" k="dyslexiaFont" icon={Type} />
        <Toggle label="Minder animaties" k="reduceMotion" icon={ZoomOut} />
      </div>

      {/* Reset */}
      <button onClick={() => { setS({ fontSize: 100, contrast: "normal", theme: "system", underlineLinks: false, dyslexiaFont: false, reduceMotion: false }); document.documentElement.style.fontSize = "100%" }}
        className="flex items-center justify-center gap-2 py-2.5 rounded-2xl border border-gray-200 text-sm text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-colors">
        <RotateCcw size={13} />Resetten
      </button>
    </div>
  )
}

// ─── Main Widget ──────────────────────────────────────────────────────────────

const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "chat", label: "Assistent", icon: MessageCircle },
  { id: "whatsapp", label: "WhatsApp", icon: Phone },
  { id: "accessibility", label: "Toegankelijkheid", icon: Accessibility },
]

export function FloatingWidget() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<Tab>("chat")
  const [notify, setNotify] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => { if (!open) setNotify(true) }, 8000)
    return () => clearTimeout(t)
  }, [open])

  const toggle = () => {
    setOpen(p => !p)
    setNotify(false)
  }

  return (
    <div className="fixed bottom-5 right-4 z-[9999] flex flex-col items-end gap-3">

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            className="w-[340px] bg-white rounded-3xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden"
            style={{ height: 480 }}
          >
            {/* Tab bar */}
            <div className="flex border-b border-gray-100">
              {TABS.map(({ id, label, icon: Icon }) => (
                <button key={id} onClick={() => setTab(id)}
                  className={`flex-1 flex flex-col items-center gap-1 py-3 text-[10px] font-medium transition-colors relative ${tab === id ? "text-black" : "text-gray-400 hover:text-gray-600"}`}>
                  <Icon size={16} />
                  {label}
                  {tab === id && (
                    <motion.div layoutId="tab-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-black rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="h-[calc(100%-56px)]">
              <AnimatePresence mode="wait">
                <motion.div key={tab} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.15 }} className="h-full">
                  {tab === "chat" && <ChatTab />}
                  {tab === "whatsapp" && <WhatsAppTab />}
                  {tab === "accessibility" && <AccessibilityTab />}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="w-14 h-14 rounded-full bg-black text-white shadow-xl flex items-center justify-center relative"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={20} />
            </motion.span>
          ) : (
            <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={20} />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Notification dot */}
        <AnimatePresence>
          {notify && !open && (
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] flex items-center justify-center font-bold">
              1
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
