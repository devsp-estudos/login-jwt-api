const express = require('express')
const router = express.Router()


router.use(express.json())

router.use('/user', require('./userRouter'))

router.use('/admin', require('./authRouter'))


module.exports = router
