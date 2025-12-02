export default function Services() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-slate-300 mb-8">Professional dog grooming services tailored to your dog's needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: 'Bath & Brush', d: 'Gentle wash and brush-out for silky coats.' },
            { t: 'Full Groom', d: 'Complete grooming package with haircut.' },
            { t: 'Nail Trimming', d: 'Safe and gentle nail trimming.' }
          ].map((s) => (
            <div key={s.t} className="bg-slate-800/60 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{s.t}</h3>
              <p className="text-slate-300 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
