require('dotenv').config()
const express = require('express')
const app = express()


app.get('/', (req, res) => res.send('Testando...'))

app.listen(process.env.PORT, () => console.log('Servidor rodando na porta: ', process.env.PORT))
