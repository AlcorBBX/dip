// импорт модулей

// получаем роутер из экспресса
const Router = require('express')

// создаем объект этого роутера 
const router = new Router()

// импорт контроллера
const deviceController = require('../controllers/deviceController')

// импорт мидлвейра с проверкой роли
const checkRoles = require('../middleware/checkRoleMiddleware')


// .post() создание бренда и т.д
router.post('/', checkRoles('ADMIN'), deviceController.create)
// .get() получение девайсов
// /:id - для того, чтоб получить отдельно конкретный девайс
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)


// экспорт роутера
module.exports = router