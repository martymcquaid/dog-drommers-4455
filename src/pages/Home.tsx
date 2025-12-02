import React, { useState } from 'react'\nimport Paw from '../components/Paw'
import { Link } from 'react-router-dom'

export default function Home() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  function subscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email')
    } else {
      setEmailError(null)
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3500)
    }
  }

  const testimonials = [
    { name: 'Alex B.', text: 'Our pup left looking like a show dog and happier than ever!' },
    { name: 'Mia K.', text: 'The staff were gentle and patient with our anxious terrier.' },
    { name: 'Sam T.', text: 'Love the spa vibes and the friendly atmosphere.' },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-rose-500/40 rounded-full filter blur-3xl" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">Weekend Slots</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Pawfect Groomers — Gentle, Spa-Like Care for Every Pup</h1>
            <p className="text-slate-300 text-lg mb-6">From baths to full grooming, we pamper with kindness, safety, and a dash of whimsy. Book in seconds or explore our services.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-rose-500 hover:bg-rose-600 px-6 py-3 rounded-md font-semibold">View Services</Link>
              <Link to="/booking" className="bg-slate-200 text-slate-900 px-6 py-3 rounded-md font-semibold">Book Now</Link>
            </div>
          </div>
          <div className="hidden lg:block rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1200&auto=format&fit=crop" alt="Happy dog" className="w-full h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Why Pawfect Groomers?</h2>
          <p className="text-center text-slate-300 mb-12">We blend luxury spa vibes with safety-first care for every dog, every visit.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { t: 'Gentle Handling', d: 'Calm techniques and soft brushes for all temperaments.' },
              { t: 'Spa Experience', d: 'Hydrating baths, aromatherapy, and premium products.' },
              { t: 'Safety & Trust', d: 'Staff trained in canine comfort and safety.' },
              { t: 'Flexible Hours', d: 'Weekend slots and late days for busy families.' }
            ].map((f) => (
              <div key={f.t} className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 text-center">
                <div className="text-xl font-semibold mb-2">{f.t}</div>
                <div className="text-slate-300 text-sm">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Our 4-Step Grooming Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { s: 'Schedule', d: 'Choose service & date' },
              { s: 'Check-In', d: 'Warm welcome & safety check' },
              { s: 'Grooming', d: 'Spa day with pampering' },
              { s: 'Pickup', d: 'Leash and waggy goodbye' }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-800/60 p-6 rounded-xl text-center border border-slate-700">
                <div className="text-2xl font-semibold mb-2">{step.s}</div>
                <div className="text-sm text-slate-300">{step.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-slate-800/60 p-6 rounded-xl border border-slate-700">
                <p className="text-slate-300 italic">"{t.text}"</p>
                <div className="mt-3 text-sm font-semibold">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-12 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Gallery Preview</h2>
            <Link to="/gallery" className="text-sm text-rose-500 hover:underline">See all</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1560807707-8cc77767d79a?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1516334152599-69d8f0d5a7f0?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop',
            ].map((src) => (
              <img key={src} src={src} alt="Dog" className="w-full h-28 md:h-32 object-cover rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold mb-2">Stay in the loop</h3>
          <p className="text-slate-300 mb-4">Get grooming tips and exclusive weekend slots in your inbox.</p>
          <form onSubmit={subscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-2/3 bg-slate-800 border border-slate-700 rounded px-4 py-2"
            />
            <button type="submit" className="bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded-md font-semibold">Subscribe</button>
          </form>
          {emailError && <div className="text-rose-400 mt-2">{emailError}</div>}
          {subscribed && <div className="mt-2 text-green-300">Thanks for subscribing!</div>}
        </div>
      </section>
    </main>
  )
}
