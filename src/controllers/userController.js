const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = async (req, res) => {

    const { name, email, password } = req.body

    // validando se ja existe o usuario cadastrado
    const selectedUser = await User.findOne({ email })
    if (selectedUser) return res.status(400).send('Email já cadastrado.')

    // gerando novo usuario 
    const user = new User({ name, email, password: bcrypt.hashSync(password) })

    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch (error) {
        res.status(400).send(error)
    }
}

const login = async (req, res) => {

    const { email, password } = req.body

    // validando se existe o usuario cadastrado
    const selectedUser = await User.findOne({ email })
    if (!selectedUser) return res.status(400).send('Email ou senha incorretos.')

    // validando a senha que foi enviada com a do banco
    const passwordMatch = bcrypt.compareSync(password, selectedUser.password)
    if (!passwordMatch) return res.status(400).send('Email ou senha incorretos.')

    // gerando um token
    const dadosDoToken = { _id: selectedUser._id, admin: selectedUser.admin }
    const token = jwt.sign(dadosDoToken, process.env.TOKEN_SECRET)

    // add o token no cabeçalho da resposta
    res.header('auth-token', token)

    res.send('Usuario logado.')
}


module.exports = { register, login }
