// импорт модулей

// получаем роутер из экспресса
const Router = require('express')

// создаем объект этого роутера 
const router = new Router()

// импорт контроллера
const typeController = require('../controllers/typeController')

// импорт мидлвейра с проверкой роли
const checkRoles = require('../middleware/checkRoleMiddleware')

// .post() создание бренда и т.д
// checkRoles('ADMIN') - вызов мидлвейра 
router.post('/', checkRoles('ADMIN'), typeController.create)
// .get() получение брендов и т.д
router.get('/', typeController.getAll)


// экспорт роутера
module.exports = router