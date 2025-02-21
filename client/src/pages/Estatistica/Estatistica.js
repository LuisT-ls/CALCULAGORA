import React, { useState } from 'react'
import axios from 'axios'
import './Estatistica.css'

function Estatistica() {
  const [resultado, setResultado] = React.useState('')
  const [dados, setDados] = React.useState('')

  const calcular = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/estatistica',
        {
          dados: dados
        }
      )
      setResultado(response.data.resultado)
    } catch (error) {
      console.error('Erro ao calcular estatísticas:', error)
      setResultado(
        'Erro ao calcular estatísticas. Verifique os dados e tente novamente.'
      )
    }
  }

  return (
    <div className="estatistica-container">
      <h1>📊 Calculadora Estatística</h1>
      <p>Digite os números separados por vírgula ou espaço:</p>
      <input
        type="text"
        placeholder="Ex: 5, 8, 12, 15, 20"
        value={dados}
        onChange={e => setDados(e.target.value)}
      />
      <button onClick={calcular}>Calcular</button>

      {resultado && (
        <div className="resultado">
          <h2>📌 Resultados</h2>
          <h3>🔹 ROL (Lista Ordenada)</h3>
          <p>{resultado.rol.join(', ')}</p>

          <h3>📏 Medidas de Posição</h3>
          <ul>
            <li>
              <strong>Amplitude Total:</strong> {resultado.amplitude}
            </li>
            <li>
              <strong>Tamanho da Amostra:</strong> {resultado.tamanho}
            </li>
            <li>
              <strong>Média:</strong> {resultado.media}
            </li>
            <li>
              <strong>Mediana:</strong> {resultado.mediana}
            </li>
            <li>
              <strong>Moda:</strong> {resultado.moda}
            </li>
            <li>
              <strong>Tipo de Moda:</strong> {resultado.tipoModa}
            </li>
          </ul>

          <h3>📊 Medidas de Dispersão</h3>
          <ul>
            <li>
              <strong>Desvio Padrão:</strong> {resultado.desvioPadrao}
            </li>
            <li>
              <strong>Variância:</strong> {resultado.variancia}
            </li>
            <li>
              <strong>Assimetria:</strong> {resultado.assimetria}
            </li>
            <li>
              <strong>Curtose:</strong> {resultado.curtose}
            </li>
            <li>
              <strong>Coeficiente de Variação (CV):</strong> {resultado.cv}
            </li>
          </ul>

          <h3>📌 Quartis</h3>
          <ul>
            <li>
              <strong>Primeiro Quartil (Q1):</strong> {resultado.q1}
            </li>
            <li>
              <strong>Terceiro Quartil (Q3):</strong> {resultado.q3}
            </li>
            <li>
              <strong>Amplitude Interquartil (IQR):</strong> {resultado.iqr}
            </li>
            <li>
              <strong>Média das Juntas:</strong> {resultado.mediaQuartis}
            </li>
          </ul>

          <h3>📊 Tabela de Frequências</h3>
          <table>
            <thead>
              <tr>
                <th>Classe</th>
                <th>Ponto Médio</th>
                <th>h</th>
                <th>fi</th>
                <th>fri</th>
                <th>fri (%)</th>
                <th>Fi</th>
                <th>Fri</th>
              </tr>
            </thead>
            <tbody>
              {resultado.tabela.map((linha, index) => (
                <tr key={index}>
                  <td>{linha.classe}</td>
                  <td>{linha.pontoMedio}</td>
                  <td>{linha.h}</td>
                  <td>{linha.fi}</td>
                  <td>{linha.fri}</td>
                  <td>{linha.friPorcentagem}%</td>
                  <td>{linha.Fi}</td>
                  <td>{linha.Fri}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Estatistica
