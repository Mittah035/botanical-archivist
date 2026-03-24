export default function Loading() {
  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="text-4xl animate-pulse">🍄</div>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
