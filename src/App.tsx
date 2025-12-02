import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Booking from './pages/Booking'

// IMPORTANT: For navigation, always use <Link> from react-router-dom, not <a> tags
// This ensures client-side routing works correctly with the preview URL base path
// Example: <Link to="/about">About</Link> instead of <a href="/about">About</a>

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16" aria-hidden="true" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  )
}

export default App
