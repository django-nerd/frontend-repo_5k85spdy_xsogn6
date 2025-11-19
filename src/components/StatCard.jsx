export default function StatCard({ label, value, sub, accent = "from-cyan-400 to-sky-500" }) {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-20`} />
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-cyan-50">
        <div className="text-xs uppercase tracking-wider text-cyan-200/80">{label}</div>
        <div className="mt-1 text-3xl font-bold">{value}</div>
        {sub && <div className="mt-1 text-cyan-100/70 text-sm">{sub}</div>}
      </div>
    </div>
  )
}
