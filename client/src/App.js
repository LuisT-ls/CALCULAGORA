import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Estatistica from './pages/Estatistica/Estatistica'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estatistica" element={<Estatistica />} />
            {/* Adicione rotas para os outros componentes */}
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  )
}

export default App
