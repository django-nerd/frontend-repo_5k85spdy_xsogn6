import { useMemo } from 'react'
import StatCard from './StatCard'

export default function HeaderSummary({ total, fromDate, toDate, onChangeRange }) {
  const rangeLabel = useMemo(() => {
    if (fromDate === toDate) return fromDate
    return `${fromDate} → ${toDate}`
  }, [fromDate, toDate])

  return (
    <div className="relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-teal-500/10" />
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-cyan-50 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-auto">
            <StatCard label="Total Pools" value={total} sub={`Timeframe: ${rangeLabel}`} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-auto">
            <div>
              <label className="block text-xs text-cyan-100/80 mb-1">From</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => onChangeRange({ from: e.target.value, to: toDate })}
                className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-cyan-50 placeholder-cyan-100/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </div>
            <div>
              <label className="block text-xs text-cyan-100/80 mb-1">To</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => onChangeRange({ from: fromDate, to: e.target.value })}
                className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-cyan-50 placeholder-cyan-100/60 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
