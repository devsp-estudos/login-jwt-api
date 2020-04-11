const User = require('../models/User')

const register = async (req, res) => {
    const { name, email, password } = req.body

    const user = new User({ name, email, password })

    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

const login = (req, res) => {
    res.send('login')
}


module.exports = { register, login }
