const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000 // Porta onde o servidor vai rodar

// Middleware
app.use(cors())
app.use(express.json()) // Para receber dados em JSON

// Rota de teste
app.get('/', (req, res) => {
  res.send('Backend da Calculadora está funcionando!')
})

app.post('/api/estatistica', (req, res) => {
  const data = req.body
  // Faça os cálculos aqui
  res.json({ resultado: 'Resultado da Estatística' })
})

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
