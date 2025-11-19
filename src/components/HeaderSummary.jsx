import { useMemo } from 'react'

export default function HeaderSummary({ total, fromDate, toDate, onChangeRange }) {
  const rangeLabel = useMemo(() => {
    if (fromDate === toDate) return fromDate
    return `${fromDate} → ${toDate}`
  }, [fromDate, toDate])

  return (
    <div className="bg-slate-800/60 border border-blue-500/20 rounded-2xl p-6 md:p-8 text-white shadow-xl">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <div className="text-blue-300 uppercase tracking-wide text-xs mb-1">Total Pools</div>
          <div className="text-5xl font-bold">{total}</div>
          <div className="text-blue-200/80 mt-2">Timeframe: {rangeLabel}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-auto">
          <div>
            <label className="block text-xs text-blue-200/80 mb-1">From</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => onChangeRange({ from: e.target.value, to: toDate })}
              className="w-full bg-slate-900/60 border border-blue-500/30 rounded-lg px-3 py-2 text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            />
          </div>
          <div>
            <label className="block text-xs text-blue-200/80 mb-1">To</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => onChangeRange({ from: fromDate, to: e.target.value })}
              className="w-full bg-slate-900/60 border border-blue-500/30 rounded-lg px-3 py-2 text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
