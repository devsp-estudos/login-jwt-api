// configurando as variaveis de ambiente
require('dotenv').config()
const app = require('express').express()

// conectando ao banco 
require('./db/connection')

// configurando as rotas
app.use(require('./routes'))

// servindo a aplicação 
app.listen(process.env.PORT, () => console.log('> Servidor rodando na porta: ', process.env.PORT))
