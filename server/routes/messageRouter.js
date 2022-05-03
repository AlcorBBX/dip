// импорт модулей

// получаем роутер из экспресса
const Router = require('express')

// создаем объект этого роутера 
const router = new Router()

// импорт контроллера
const courseController = require('../controllers/messageController')

// импорт мидлвейра с проверкой роли
const checkRoles = require('../middleware/checkRoleMiddleware')


// .post() создание бренда и т.д
router.post('/', checkRoles('ADMIN'), messageController.create)
// .get() получение девайсов
// /:id - для того, чтоб получить отдельно конкретный девайс
router.get('/', messageController.getAll)
router.get('/:id', messageController.getOne)


// экспорт роутера
module.exports = router