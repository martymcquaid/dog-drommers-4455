import { useState } from 'react'

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    dog: '',
    breed: '',
    service: 'Bath & Brush',
    date: '',
    time: '',
    email: '',
    phone: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ [k: string]: string }>({})

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function validate() {
    const e: { [k: string]: string } = {}
    if (!form.name) e.name = 'Name is required'
    if (!form.dog) e.dog = 'Dog name is required'
    if (!form.date) e.date = 'Date is required'
    if (!form.service) e.service = 'Service is required'
    return e
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const ve = validate()
    setErrors(ve)
    if (Object.keys(ve).length === 0) {
      setSubmitted(true)
      // Simulate booking submission
      setTimeout(() => {
        setForm({ name: '', dog: '', breed: '', service: 'Bath & Brush', date: '', time: '', email: '', phone: '', notes: '' })
        setSubmitted(false)
      }, 1500)
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Book a Grooming Session</h2>
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block mb-1">Your Name</label>
            <input className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2" value={form.name} onChange={(e)=>update('name', e.target.value)} />
            {errors.name && <span className="text-rose-500 text-sm">{errors.name}</span>}
          </div>
          <div className="col-span-1">
            <label className="block mb-1">Dog's Name</label>
            <input className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2" value={form.dog} onChange={(e)=>update('dog', e.target.value)} />
            {errors.dog && <span className="text-rose-500 text-sm">{errors.dog}</span>}
          </div>
          <div className="col-span-1 md:col-span-1">
            <label className="block mb-1">Breed</label>
            <input className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2" value={form.breed} onChange={(e)=>update('breed', e.target.value)} />
          </div>
          <div className="col-span-1 md:col-span-1">
            <label className="block mb-1">Service</label>
            <select className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2" value={form.service} onChange={(e)=>update('service', e.target.value)}>
              <option>Bath & Brush</option>
              <option>Full Groom</option>
              <option>Nail Trimming</option>
            </select>
            {errors.service && <span className="text-rose-500 text-sm">{errors.service}</span>}
          </div>
          <div className="col-span-1 md:col-span-1">
            <label className="block mb-1">Date</label>
            <input type="date" className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2" value={form.date} onChange={(e)=>update('date', e.target.value)} />
            {errors.date && <span className="text-rose-500 text-sm">{errors.date}</span>}
          </div>
          <div className="col-span-1 md:col-span-1">
            <label className="block mb-1">Time</label>
            <input type="time" className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2" value={form.time} onChange={(e)=>update('time', e.target.value)} />
          </div>
          <div className="col-span-2">
            <label className="block mb-1">Email</label>
            <input className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2" value={form.email} onChange={(e)=>update('email', e.target.value)} />
          </div>
          <div className="col-span-2">
            <label className="block mb-1">Phone</label>
            <input className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2" value={form.phone} onChange={(e)=>update('phone', e.target.value)} />
          </div>
          <div className="col-span-2">
            <label className="block mb-1">Notes</label>
            <textarea rows={3} className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2" value={form.notes} onChange={(e)=>update('notes', e.target.value)} />
          </div>
          <div className="col-span-2 flex items-center">
            <button type="submit" className="ml-auto bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded">Submit Booking</button>
          </div>
          {submitted && (
            <div className="col-span-2 text-green-400">Booking received! We will contact you shortly.</div>
          )}
        </form>
      </div>
    </section>
  )
}
