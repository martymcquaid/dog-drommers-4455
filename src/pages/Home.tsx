import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Pawfect Groomers</h1>
          <p className="text-slate-200 mb-6">Gentle, stylish grooming for every dog. We pamper from nose to tail.</p>
          <div className="flex space-x-4">
            <Link to="/services" className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-4 py-2 rounded">View Services</Link>
            <Link to="/booking" className="bg-slate-200 text-slate-900 font-semibold px-4 py-2 rounded">Book Now</Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1200&auto=format&fit=crop" alt="Happy dog" className="rounded-2xl shadow-lg w-full h-64 object-cover"/>
        </div>
      </div>
    </section>
  )
}
