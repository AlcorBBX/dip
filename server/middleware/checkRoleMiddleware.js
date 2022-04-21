// 
const jwt = require('jsonwebtoken')
// const { fn } = require('sequelize/types')

// экспорт функции мидлвейр
module.exports = function (role) {
    return function(req, res, next) {
        // если метод = опшнс, то пропускаем
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            // получаем токен из хеадера и разделяем(сначала идет тип токена, потом сам токен)
            const token = req.headers.authorization.split(' ')[1] // Bearer(тип токена) токен
            // если токена нет, возвращаем ошибку
            if (!token){
                return res.status(401).json({message: 'Не авторизован'})
            }
            // декодировка токена, .verify(токен, секретный ключ) - проверяет токен на валидность
            const decode = jwt.verify(token, process.env.SECRET_KEY)
            // сравнение роли из токена с импортированной ролью, если не совпадают, то
            if(decode.role !== role){
                // возвращаем ошибку 403 с сообщением
                return res.status(403).json({message: 'Нет доступа'})
            }
            // к реквесту в поле юзер добавляем данные, которые мы вытащили
            req.user = decode
            next()
        } catch (e) {
            // если ошибка, от возвращаем статус 401 и сообщение
            res.status(401).json({message: 'Не авторизован'})
        }
    }
}


// fn('ADMIN')







