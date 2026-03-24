# Skill: Component Bouwen

## Wanneer gebruiken
Wanneer er een nieuw React component aangemaakt moet worden voor de Botanical Archivist webshop.

## Regels
- Altijd TypeScript met expliciete interface voor props
- Framer Motion animaties importeren uit `../animations/` wrappers
- Tailwind classes via `cn()` utility uit `@/lib/utils`
- shadcn/ui als basis voor interactieve elementen
- "use client" directive alleen wanneer nodig (hooks, events)

## Template
```tsx
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ComponentNameProps {
  className?: string
  // ... andere props
}

export function ComponentName({ className }: ComponentNameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn('', className)}
    >
      {/* content */}
    </motion.div>
  )
}
```

## Animatie Patronen
- **Fade in:** `initial={{ opacity: 0 }} animate={{ opacity: 1 }}`
- **Slide up:** `initial={{ y: 20 }} animate={{ y: 0 }}`
- **Stagger kinderen:** gebruik `staggerChildren` in `variants`
- **Hover scale:** `whileHover={{ scale: 1.02 }}`
- **Press:** `whileTap={{ scale: 0.98 }}`
