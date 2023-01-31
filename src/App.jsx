import './App.css'
// import react router
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
// import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
