const Router = require('express')

// создаем объект этого роутера 
const router = new Router()

// импорт контроллера
const courseController = require('../controllers/courseInfoController')

// импорт мидлвейра с проверкой роли
const checkRoles = require('../middleware/checkRoleMiddleware')


// .post() создание бренда и т.д
router.post('/', checkRoles('ADMIN'), courseInfoController.create)

module.exports = router