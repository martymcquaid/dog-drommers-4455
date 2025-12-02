import React from 'react'

export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1560807707-8cc77767d79a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516334152599-69d8f0d5a7f0?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516339737672-7d3e9a5d7e0a?q=80&w=1200&auto=format&fit=crop',
  ]

  const [selected, setSelected] = React.useState<string | null>(null)

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src) => (
            <div key={src} className="relative rounded-lg overflow-hidden cursor-pointer" onClick={() => setSelected(src)}>
              <img src={src} alt="Dog" className="w-full h-48 object-cover" />
              <span className="absolute bottom-1 right-1 bg-black bg-opacity-40 text-white text-xs px-2 py-1 rounded-full" aria-label="paw watermark">🐾</span>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
          <div className="bg-white/10 p-2 rounded" onClick={(e) => e.stopPropagation()}>
            <img src={selected} alt="Selected dog" className="max-w-full max-h-screen" />
          </div>
        </div>
      )}
    </section>
  )
}
