export default function WaterBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-cyan-900 to-slate-900" />

      {/* Soft light beams */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl animate-pulse" />

      {/* Bubbles */}
      <div className="absolute bottom-10 left-10 h-3 w-3 rounded-full bg-cyan-200/50 animate-bounce" />
      <div className="absolute bottom-20 left-24 h-2 w-2 rounded-full bg-sky-200/60 animate-bounce [animation-delay:200ms]" />
      <div className="absolute bottom-28 left-36 h-1.5 w-1.5 rounded-full bg-teal-200/60 animate-bounce [animation-delay:400ms]" />

      {/* Gentle wave overlay */}
      <svg className="absolute inset-x-0 -top-1 rotate-180 text-cyan-300/10" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
        <path d="M0,0 C240,60 480,60 720,30 C960,0 1200,0 1440,30 L1440,120 L0,120 Z" />
      </svg>
      <svg className="absolute inset-x-0 bottom-0 text-sky-300/10" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
        <path d="M0,30 C240,0 480,0 720,30 C960,60 1200,60 1440,30 L1440,120 L0,120 Z" />
      </svg>
    </div>
  )
}
