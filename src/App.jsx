import { useEffect, useMemo, useState } from 'react'
import HeaderSummary from './components/HeaderSummary'
import EntryForm from './components/EntryForm'
import EntriesList from './components/EntriesList'

function App() {
  const today = new Date().toISOString().slice(0, 10)
  const [fromDate, setFromDate] = useState(today)
  const [toDate, setToDate] = useState(today)
  const [summary, setSummary] = useState({ total_pools: 0, entries: [], from_date: today, to_date: today })
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchSummary = async (f = fromDate, t = toDate) => {
    setLoading(true)
    try {
      const url = new URL(`${baseUrl}/api/swims`)
      url.searchParams.set('from_date', f)
      url.searchParams.set('to_date', t)
      const res = await fetch(url.toString())
      const data = await res.json()
      setSummary(data)
    } finally {
      setLoading(false)
    }
  }

  const addEntry = async (entry) => {
    const res = await fetch(`${baseUrl}/api/swims`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry)
    })
    if (!res.ok) {
      const t = await res.text()
      throw new Error(t)
    }
    await fetchSummary(entry.date, entry.date)
    setFromDate(entry.date)
    setToDate(entry.date)
  }

  useEffect(() => {
    fetchSummary()
  }, [])

  const onChangeRange = ({ from, to }) => {
    setFromDate(from)
    setToDate(to)
    fetchSummary(from, to)
  }

  const total = summary?.total_pools || 0
  const entries = summary?.entries || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Swim Pools Tracker</h1>
          <p className="text-blue-200/80 mt-2">Log how many pools you swam each day and see totals for any date range.</p>
        </div>

        <HeaderSummary total={total} fromDate={fromDate} toDate={toDate} onChangeRange={onChangeRange} />
        <EntryForm defaultDate={today} onAdd={addEntry} />

        <div className="bg-slate-800/60 border border-blue-500/20 rounded-2xl p-6 md:p-8 text-white shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Entries</h2>
            {loading && <span className="text-sm text-blue-300/70">Loading...</span>}
          </div>
          <EntriesList entries={entries} />
        </div>
      </div>
    </div>
  )
}

export default App
