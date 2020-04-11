// configurando as variaveis de ambiente
require('dotenv').config()
const express = require('express')
const app = express()


// configurando as rotas
app.use('/user', require('./routes/userRouter'))


// servindo a aplicação 
app.listen(process.env.PORT, () => console.log('Servidor rodando na porta: ', process.env.PORT))
