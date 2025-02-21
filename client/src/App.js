import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Estatistica from './components/Estatistica'

function Home() {
  return (
    <div>
      <h1>Bem-vindo à Calculadora Online!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/estatistica">Estatística</Link>
          </li>
          <li>
            <Link to="/regressao">Regressão Linear</Link>
          </li>
          <li>
            <Link to="/probabilidade">Probabilidade</Link>
          </li>
          <li>
            <Link to="/financeiro">Financeiro</Link>
          </li>
          <li>
            <Link to="/unidades">Unidades de Medida</Link>
          </li>
          <li>
            <Link to="/eletrica">Elétrica</Link>
          </li>
          <li>
            <Link to="/quimica">Química</Link>
          </li>
          <li>
            <Link to="/tabela-periodica">Tabela Periódica</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estatistica" element={<Estatistica />} />
        {/* Adicione rotas para os outros componentes */}
      </Routes>
    </Router>
  )
}

export default App
