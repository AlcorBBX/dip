const Router = require('express')

const router = new Router()

const courseRouter = require('./courseRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

// описание роутеров
// router.use('url по которому будет отрабатывать роутер', сам роутер)
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/course', courseRouter)


// экспорт роутера
module.exports = router