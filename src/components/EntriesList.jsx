import { Fragment } from 'react'

export default function EntriesList({ entries }) {
  if (!entries || entries.length === 0) {
    return (
      <div className="text-center text-cyan-100/80 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        No entries for this range yet.
      </div>
    )
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl divide-y divide-white/10 overflow-hidden">
      {entries.map((e, idx) => (
        <div key={idx} className="flex items-center justify-between p-4 md:p-5 text-cyan-50">
          <div className="flex items-center gap-3">
            <div className="text-sm text-cyan-100/90">{e.date}</div>
            {e.note && <div className="text-xs text-cyan-100/70">{e.note}</div>}
          </div>
          <div className="text-lg font-semibold">
            <span className="px-2 py-1 rounded-md bg-gradient-to-r from-cyan-500/20 to-sky-500/20 border border-white/10">{e.pools}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
