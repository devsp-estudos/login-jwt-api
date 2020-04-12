// configurando as variaveis de ambiente
require('dotenv').config()
const express = require('express')
const app = express()


// conectando ao banco 
require('./db/connection')


// configurando as rotas
app.use(express.json())

app.use('/user', require('./routes/userRouter'))

app.use('/admin', require('./routes/authRouter'))


// servindo a aplicação 
app.listen(process.env.PORT, () => console.log('> Servidor rodando na porta: ', process.env.PORT))
