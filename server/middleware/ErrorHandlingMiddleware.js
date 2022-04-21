// импорт модулей

const ApiError = require('../error/ApiError')



// function(ошибка, запрос, ответ, при вызове передает упр след мидлвейру)
module.exports = function(err, req, res, next) {
    // если класс ошибки АпиЕррор
    if(err instanceof ApiError) {
        // тогда возвращаем на клиент ответ со статус кодом и сообщением в который мы поместили статус код
        return res.status(err.status).json({message: err.message})
    }
    // иначе вернем 500 ошибку и сообщение
    return res.status(500).json({message: 'непредвиденная ошибка'})
}