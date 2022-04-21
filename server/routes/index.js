const Router = require('express')

const router = new Router()

const deviceRouter = require('./deviceRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

// описание роутеров
// router.use('url по которому будет отрабатывать роутер', сам роутер)
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)


// экспорт роутера
module.exports = router