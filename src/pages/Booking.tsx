import React, { useEffect, useState } from 'react'

type BookingRecord = {
  id: string
  ownerName: string
  dogName: string
  breed: string
  age?: string
  service: string
  date: string
  time?: string
  email?: string
  phone?: string
  notes?: string
  status: 'Pending' | 'Confirmed' | 'Cancelled'
}

const STORAGE_KEY = 'dog_bookings_v1'

function loadBookings(): BookingRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const data = JSON.parse(raw) as BookingRecord[]
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

function saveBookings(list: BookingRecord[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
}

export default function Booking() {
  const [bookings, setBookings] = useState<BookingRecord[]>([])

  const [form, setForm] = useState({
    ownerName: '',
    dogName: '',
    breed: '',
    age: '',
    service: 'Bath & Brush',
    date: '',
    time: '',
    email: '',
    phone: '',
    notes: '',
  })

  const [errors, setErrors] = useState<{ [k: string]: string }>({})
  const [confirmation, setConfirmation] = useState<BookingRecord | null>(null)

  useEffect(() => {
    setBookings(loadBookings())
  }, [])

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function validate() {
    const e: { [k: string]: string } = {}
    if (!form.ownerName) e.ownerName = 'Owner name is required'
    if (!form.dogName) e.dogName = 'Dog name is required'
    if (!form.date) e.date = 'Date is required'
    if (!form.service) e.service = 'Service is required'
    return e
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const ve = validate()
    setErrors(ve)
    if (Object.keys(ve).length === 0) {
      const newBooking: BookingRecord = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        ownerName: form.ownerName,
        dogName: form.dogName,
        breed: form.breed,
        age: form.age,
        service: form.service,
        date: form.date,
        time: form.time,
        email: form.email,
        phone: form.phone,
        notes: form.notes,
        status: 'Pending',
      }
      const updated = [newBooking, ...bookings]
      setBookings(updated)
      saveBookings(updated)
      setConfirmation(newBooking)
      // reset form after a moment
      setForm({ ownerName: '', dogName: '', breed: '', age: '', service: 'Bath & Brush', date: '', time: '', email: '', phone: '', notes: '' })
      setTimeout(() => setConfirmation(null), 3500)
    }
  }

  function updateStatus(id: string, status: BookingRecord['status']) {
    const next = bookings.map((b) => (b.id === id ? { ...b, status } : b))
    setBookings(next)
    saveBookings(next)
  }

  const availableServices = ['Bath & Brush', 'Full Groom', 'Nail Trimming', 'Daycare', 'Walking']

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-slate-800/60 p-6 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Dog Booking Studio</h2>
          <p className="text-slate-300 mb-4">A playful, fully fictional booking experience for pampered pups.</p>
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block mb-1">Owner Name</label>
              <input className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2" value={form.ownerName} onChange={(e)=>update('ownerName', e.target.value)} />
              {errors.ownerName && <span className="text-rose-500 text-sm">{errors.ownerName}</span>}
            </div>
            <div className="col-span-1">
              <label className="block mb-1">Dog's Name</label>
              <input className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2" value={form.dogName} onChange={(e)=>update('dogName', e.target.value)} />
              {errors.dogName && <span className="text-rose-500 text-sm">{errors.dogName}</span>}
            </div>
            <div className="col-span-1">
              <label className="block mb-1">Breed</label>
              <input className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2" value={form.breed} onChange={(e)=>update('breed', e.target.value)} />
            </div>
            <div className="col-span-1">
              <label className="block mb-1">Age</label>
              <input className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2" value={form.age} onChange={(e)=>update('age', e.target.value)} />
            </div>
            <div className="col-span-1">
              <label className="block mb-1">Service</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2" value={form.service} onChange={(e)=>update('service', e.target.value)}>
                {availableServices.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="col-span-1">
              <label className="block mb-1">Date</label>
              <input type="date" className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2" value={form.date} onChange={(e)=>update('date', e.target.value)} />
              {errors.date && <span className="text-rose-500 text-sm">{errors.date}</span>}
            </div>
            <div className="col-span-1">
              <label className="block mb-1">Time</label>
              <input type="time" className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2" value={form.time} onChange={(e)=>update('time', e.target.value)} />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Email</label>
              <input className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2" value={form.email} onChange={(e)=>update('email', e.target.value)} />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Phone</label>
              <input className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2" value={form.phone} onChange={(e)=>update('phone', e.target.value)} />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Notes</label>
              <textarea rows={3} className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2" value={form.notes} onChange={(e)=>update('notes', e.target.value)} />
            </div>
            <div className="col-span-2 flex items-center">
              <button type="submit" className="ml-auto bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded">Submit Booking</button>
            </div>
          </form>
          {confirmation && (
            <div className="mt-4 p-4 bg-teal-500/20 rounded-md text-teal-100">
              Booking received for {confirmation.dogName} (Owner: {confirmation.ownerName}). Reference: {confirmation.id}
            </div>
          )}
        </div>
        <div className="bg-slate-800/60 p-6 rounded-xl shadow-xl overflow-hidden">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Bookings</h2>
          {bookings.length === 0 && <p className="text-slate-300">No bookings yet. Invite dogs for a pamper session!</p>}
          <div className="space-y-3 max-h-[60vh] overflow-auto pr-2">
            {bookings.map((b) => (
              <div key={b.id} className="flex items-center justify-between bg-slate-700/40 rounded p-3">
                <div>
                  <div className="font-semibold text-sm">{b.dogName} ({b.ownerName})</div>
                  <div className="text-xs text-slate-200">{b.service} on {b.date} {b.time ? 'at ' + b.time : ''}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs ${b.status==='Pending'?'bg-yellow-600/80 text-yellow-100':'bg-green-600/80 text-green-100'}`}>{b.status}</span>
                  {b.status !== 'Cancelled' && (
                    <button className="px-2 py-1 bg-green-600 rounded text-white text-xs" onClick={()=>updateStatus(b.id,'Confirmed')}>Confirm</button>
                  )}
                  <button className="px-2 py-1 bg-red-600 rounded text-white text-xs" onClick={()=>updateStatus(b.id,'Cancelled')}>Cancel</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-slate-400">Tip: This is a frontend mock—no backend is required for this demo.</div>
    </section>
  )
}
