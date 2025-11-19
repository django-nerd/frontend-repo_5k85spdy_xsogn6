export default function EntriesList({ entries }) {
  if (!entries || entries.length === 0) {
    return (
      <div className="text-center text-blue-200/80 bg-slate-800/40 border border-blue-500/10 rounded-xl p-6">
        No entries for this range yet.
      </div>
    )
  }

  return (
    <div className="bg-slate-800/40 border border-blue-500/10 rounded-xl divide-y divide-slate-700/50 overflow-hidden">
      {entries.map((e, idx) => (
        <div key={idx} className="flex items-center justify-between p-4 md:p-5 text-blue-50">
          <div className="flex items-center gap-3">
            <div className="text-sm text-blue-300/80">{e.date}</div>
            <div className="text-xs text-blue-300/60">{e.note}</div>
          </div>
          <div className="text-lg font-semibold">{e.pools}</div>
        </div>
      ))}
    </div>
  )
}
