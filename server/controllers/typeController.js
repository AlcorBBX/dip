// импорт модулей

// импорт моделей
const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {

    // функция для создания
    async create(req, res){
        // из тела запроса извлекаем нейм
        const {name} = req.body
        // с помощью функции .create мы создаем этот тип
        const type = await Type.create({name})
        // передаем объект, где указываем нужные поля(тут указали названия типа)
        return res.json(type)
    }

    // функция для получения
    async getAll(req, res){
        // возвращает в тайпс все записи
        const types = await Type.findAll()
        // возвращает записи на клиент
        return res.json(types)
    }
}


// импорт нового объекта из класса ЮзерКонтроллер
module.exports = new TypeController();