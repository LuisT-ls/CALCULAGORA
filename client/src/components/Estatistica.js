import React from 'react'
import axios from 'axios'

function Estatistica() {
  const [resultado, setResultado] = React.useState('')

  const calcular = async () => {
    const response = await axios.post('http://localhost:5000/api/estatistica', {
      dados: 'seus dados'
    })
    setResultado(response.data.resultado)
  }

  return (
    <div>
      <h1>Calculadora de Estatística</h1>
      <button onClick={calcular}>Calcular</button>
      <p>Resultado: {resultado}</p>
    </div>
  )
}

export default Estatistica
