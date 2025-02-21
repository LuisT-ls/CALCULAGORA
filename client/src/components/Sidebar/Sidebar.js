import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaHome,
  FaChartBar,
  FaCalculator,
  FaPercentage,
  FaDollarSign,
  FaRuler,
  FaBolt,
  FaFlask,
  FaTable,
  FaBars
} from 'react-icons/fa'
import './Sidebar.css'

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button className="toggle-btn" onClick={() => setIsExpanded(!isExpanded)}>
        <FaBars />
      </button>

      <nav>
        <ul>
          <li className="home-btn">
            <Link to="/">
              <FaHome /> {isExpanded && 'Home'}
            </Link>
          </li>
          <li>
            <Link to="/estatistica">
              <FaChartBar /> {isExpanded && 'Estatística'}
            </Link>
          </li>
          <li>
            <Link to="/regressao">
              <FaCalculator /> {isExpanded && 'Regressão Linear'}
            </Link>
          </li>
          <li>
            <Link to="/probabilidade">
              <FaPercentage /> {isExpanded && 'Probabilidade'}
            </Link>
          </li>
          <li>
            <Link to="/financeiro">
              <FaDollarSign /> {isExpanded && 'Financeiro'}
            </Link>
          </li>
          <li>
            <Link to="/unidades">
              <FaRuler /> {isExpanded && 'Unidades de Medida'}
            </Link>
          </li>
          <li>
            <Link to="/eletrica">
              <FaBolt /> {isExpanded && 'Elétrica'}
            </Link>
          </li>
          <li>
            <Link to="/quimica">
              <FaFlask /> {isExpanded && 'Química'}
            </Link>
          </li>
          <li>
            <Link to="/tabela-periodica">
              <FaTable /> {isExpanded && 'Tabela Periódica'}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
