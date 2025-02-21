import React from 'react'
import './Footer.css'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 CalculAgora. Todos os direitos reservados.</p>
        <div className="social-links">
          <a
            href="https://instagram.com/luis.tei"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/in/luis-tei"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/LuisT-ls"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
