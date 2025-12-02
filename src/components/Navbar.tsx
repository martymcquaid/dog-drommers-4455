import { Link } from 'react-router-dom'\nimport { useEffect, useState } from 'react'\nimport Paw from './Paw'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Initialize dark mode state from the document classlist
  useEffect(() => {
    const dark = document.documentElement.classList.contains('dark')
    setIsDark(dark)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/booking', label: 'Booking' },
    { to: '/contact', label: 'Contact' },
  ]

  function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    setIsDark((d) => !d)
  }

  return (
    <nav className="bg-slate-900/80 backdrop-blur fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-white font-semibold text-xl flex items-center">
            <span className="bg-rose-500 text-white px-2 py-0.5 rounded mr-2">🐾</span>
            Pawfect Groomers
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="text-slate-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  {l.label}
                </Link>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-4 p-2 rounded-full bg-slate-700 text-white hover:bg-slate-600 focus:outline-none"
              title="Toggle dark mode"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-slate-800/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="block text-slate-100 px-3 py-2 rounded-md text-base font-medium">
                {l.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="block w-full text-left text-slate-100 px-3 py-2 rounded-md text-base font-medium bg-transparent"
              aria-label="Toggle theme (mobile)"
              title="Toggle dark mode"
            >
              {isDark ? '☀️ Light mode' : '🌙 Dark mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
