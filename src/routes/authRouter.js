const router = require('express').Router()
const authController = require('../controllers/authController')


router.get('/', authController.auth, (req, res) => {

    if (req.user.admin)
        res.send('Conteudo para o admin!')
    else
        res.status(401).send('Acesso negado, vc não é um admin!')
})

router.get('/free', authController.auth, (req, res) => {
    
    res.send('Conteudo para quem esta logado!')
})


module.exports = router
