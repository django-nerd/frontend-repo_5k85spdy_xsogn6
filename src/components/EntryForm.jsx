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
    <form onSubmit={handleSubmit} className="bg-slate-800/60 border border-blue-500/20 rounded-2xl p-6 md:p-8 text-white shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs text-blue-200/80 mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-slate-900/60 border border-blue-500/30 rounded-lg px-3 py-2 text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          />
        </div>
        <div>
          <label className="block text-xs text-blue-200/80 mb-1">Pools</label>
          <input
            type="number"
            min="0"
            step="1"
            placeholder="e.g., 20"
            value={pools}
            onChange={(e) => setPools(e.target.value)}
            className="w-full bg-slate-900/60 border border-blue-500/30 rounded-lg px-3 py-2 text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          />
        </div>
        <div>
          <label className="block text-xs text-blue-200/80 mb-1">Note (optional)</label>
          <input
            type="text"
            placeholder="Workout focus, feel, etc."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full bg-slate-900/60 border border-blue-500/30 rounded-lg px-3 py-2 text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Saving...' : 'Add Entry'}
        </button>
      </div>
    </form>
  )
}
