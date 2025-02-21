import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaChartBar,
  FaCalculator,
  FaPercentage,
  FaDollarSign,
  FaRuler,
  FaBolt,
  FaFlask,
  FaTable
} from 'react-icons/fa'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <h1>🎯 CalculAgora: Sua Calculadora Inteligente!</h1>
      <p>
        Escolha uma categoria e resolva seus cálculos de forma rápida e prática.
      </p>

      <div className="category-grid">
        <Link to="/estatistica" className="category-card">
          <FaChartBar />
          <span>Estatística</span>
        </Link>
        <Link to="/regressao" className="category-card">
          <FaCalculator />
          <span>Regressão Linear</span>
        </Link>
        <Link to="/probabilidade" className="category-card">
          <FaPercentage />
          <span>Probabilidade</span>
        </Link>
        <Link to="/financeiro" className="category-card">
          <FaDollarSign />
          <span>Financeiro</span>
        </Link>
        <Link to="/unidades" className="category-card">
          <FaRuler />
          <span>Unidades de Medida</span>
        </Link>
        <Link to="/eletrica" className="category-card">
          <FaBolt />
          <span>Elétrica</span>
        </Link>
        <Link to="/quimica" className="category-card">
          <FaFlask />
          <span>Química</span>
        </Link>
        <Link to="/tabela-periodica" className="category-card">
          <FaTable />
          <span>Tabela Periódica</span>
        </Link>
      </div>
    </div>
  )
}

export default Home
