// импорт модулей

// получаем роутер из экспресса
const Router = require('express')

// создаем объект этого роутера 
const router = new Router()

// импорт контроллера
const courseController = require('../controllers/courseController')

// импорт мидлвейра с проверкой роли
const checkRoles = require('../middleware/checkRoleMiddleware')


// .post() создание бренда и т.д
router.post('/', checkRoles('ADMIN'), courseController.create)
// router.delete('/:id', courseController.delete)deleteTask
router.delete('/:id', courseController.deleteTask)
router.put('/:id', courseController.updateCourse)

// .get() получение девайсов
// /:id - для того, чтоб получить отдельно конкретный девайс
router.get('/', courseController.getAll)
router.get('/:id', courseController.getOne)




// экспорт роутера
module.exports = router