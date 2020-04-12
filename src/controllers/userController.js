const User = require('../models/User')
const bcrypt = require('bcryptjs')


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

const login = (req, res) => {
    res.send('login')
}


module.exports = { register, login }
