import { useState } from 'react'

export default function EntryForm({ defaultDate, onAdd }) {
  const [date, setDate] = useState(defaultDate)
  const [pools, setPools] = useState('')
  const [note, setNote] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!date || pools === '') return

    setLoading(true)
    try {
      await onAdd({ date, pools: parseInt(pools, 10), note: note || undefined })
      setPools('')
      setNote('')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-cyan-400/10 to-teal-500/10" />
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-cyan-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-cyan-100/80 mb-1">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-cyan-50 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
            />
          </div>
          <div>
            <label className="block text-xs text-cyan-100/80 mb-1">Pools</label>
            <input
              type="number"
              min="0"
              step="1"
              placeholder="e.g., 20"
              value={pools}
              onChange={(e) => setPools(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-cyan-50 placeholder-cyan-100/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            />
          </div>
          <div>
            <label className="block text-xs text-cyan-100/80 mb-1">Note (optional)</label>
            <input
              type="text"
              placeholder="Workout focus, feel, etc."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-cyan-50 placeholder-cyan-100/60 focus:outline-none focus:ring-2 focus:ring-teal-400/50"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-lg shadow-cyan-900/30"
          >
            {loading ? 'Saving...' : 'Add Entry'}
          </button>
        </div>
      </div>
    </form>
  )
}
