// импорт модулей

// получаем роутер из экспресса
const Router = require('express')

// создаем объект этого роутера 
const router = new Router()

// импорт контроллера
const messageController = require('../controllers/messageController')

// импорт мидлвейра с проверкой роли
const checkRoles = require('../middleware/checkRoleMiddleware')


// .post() создание бренда и т.д
router.post('/', messageController.create)
// .get() получение девайсов
// /:id - для того, чтоб получить отдельно конкретный девайс
router.get('/', messageController.getAll)
router.get('/:id', messageController.getMessageUser)


// экспорт роутера
module.exports = router