export default function WaterBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Local keyframes for ultra-subtle motion */}
      <style>{`
        @keyframes drift {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(0,-10px,0) scale(1.01); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        @keyframes driftX {
          0% { transform: translate3d(0,0,0) }
          50% { transform: translate3d(12px,0,0) }
          100% { transform: translate3d(0,0,0) }
        }
        @keyframes sway {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: .28; }
          100% { transform: translateY(-40px); opacity: .06; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wb-anim { animation: none !important; }
        }
      `}</style>

      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-cyan-900 to-slate-900" />

      {/* Soft light beams with gentle drift */}
      <div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl wb-anim"
        style={{ animation: 'drift 10s ease-in-out infinite' }}
      />
      <div
        className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl wb-anim"
        style={{ animation: 'drift 12s ease-in-out infinite', animationDelay: '200ms' }}
      />

      {/* Large ambient glows that glide sideways */}
      <div
        className="absolute bottom-10 left-1/4 h-[26rem] w-[26rem] rounded-full bg-teal-400/10 blur-3xl wb-anim"
        style={{ animation: 'driftX 22s ease-in-out infinite' }}
      />

      {/* Bubbles (very subtle rise) */}
      <div
        className="absolute bottom-8 left-10 h-3 w-3 rounded-full bg-cyan-200/40 wb-anim"
        style={{ animation: 'floatUp 9s linear infinite' }}
      />
      <div
        className="absolute bottom-16 left-24 h-2 w-2 rounded-full bg-sky-200/40 wb-anim"
        style={{ animation: 'floatUp 11s linear infinite', animationDelay: '400ms' }}
      />
      <div
        className="absolute bottom-24 left-36 h-1.5 w-1.5 rounded-full bg-teal-200/40 wb-anim"
        style={{ animation: 'floatUp 13s linear infinite', animationDelay: '900ms' }}
      />

      {/* Gentle wave overlays with slow sway */}
      <svg
        className="absolute inset-x-0 -top-1 rotate-180 text-cyan-300/10 wb-anim"
        viewBox="0 0 1440 120"
        fill="currentColor"
        preserveAspectRatio="none"
        style={{ animation: 'sway 14s ease-in-out infinite' }}
      >
        <path d="M0,0 C240,60 480,60 720,30 C960,0 1200,0 1440,30 L1440,120 L0,120 Z" />
      </svg>
      <svg
        className="absolute inset-x-0 bottom-0 text-sky-300/10 wb-anim"
        viewBox="0 0 1440 120"
        fill="currentColor"
        preserveAspectRatio="none"
        style={{ animation: 'sway 16s ease-in-out infinite', animationDelay: '300ms' }}
      >
        <path d="M0,30 C240,0 480,0 720,30 C960,60 1200,60 1440,30 L1440,120 L0,120 Z" />
      </svg>
    </div>
  )
}
