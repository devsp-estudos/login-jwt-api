const mongoose = require('mongoose')
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.MONGO_URL, options, (error) => {
    if (error) console.log('Error: ', error)
    console.log('> Banco conectado :)')
})