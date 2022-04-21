// импорт модулей

// получаем роутер из экспресса
const Router = require('express')

// создаем объект этого роутера 
const router = new Router()

// импорт контроллера
const brandController = require('../controllers/brandController')

// импорт мидлвейра с проверкой роли
const checkRoles = require('../middleware/checkRoleMiddleware')


// .post() создание бренда и т.д
router.post('/', checkRoles('ADMIN'), brandController.create)
// .get() получение брендов и т.д
router.get('/', brandController.getAll)


// экспорт роутера
module.exports = router