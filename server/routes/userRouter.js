// импорт модулей

// получаем роутер из экспресса
const Router = require('express')

// создаем объект этого роутера 
const router = new Router()

// импорт контроллера
const userController = require('../controllers/userController')

// импорт мидлвейра
const authMiddleware = require('../middleware/authModdleware')

// .post() создание юзера
// router.post('ссылка', передаем контроллер.функция в нем)
router.post('/registration', userController.registration)
router.post('/login', userController.login)
// проверка авторизован ли пользователь
router.get('/auth', authMiddleware, userController.check)

router.put('/update/:id', userController.updateCourse)
// экспорт роутера
module.exports = router