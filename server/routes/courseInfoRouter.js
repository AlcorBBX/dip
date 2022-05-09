const Router = require('express')

// создаем объект этого роутера 
const router = new Router()

// импорт контроллера
const courseInfoController = require('../controllers/courseInfoController')

// импорт мидлвейра с проверкой роли
const checkRoles = require('../middleware/checkRoleMiddleware')


// .post() создание бренда и т.д
router.post('/', courseInfoController.create)

router.post('/lesson', courseInfoController.createLesson)
// router.post('/:id', courseInfoController.createLesson)

router.delete('/delete/:id', courseInfoController.delete)

router.get('/:id', courseInfoController.getOne)

module.exports = router