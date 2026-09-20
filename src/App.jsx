import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Docs from './pages/Docs/Docs'
import FAQ from './pages/FAQ/FAQ'
import Home from './pages/Home/Home'
import Privacy from './pages/Legal/Privacy'
import Terms from './pages/Legal/Terms'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden bg-white text-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
