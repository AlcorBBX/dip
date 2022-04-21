// импорт модулей

// импорт моделей
const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')


class BrandController {

    // функция для создания
    async create(req, res){
        // из тела запроса извлекаем нейм
        const {name} = req.body
        // с помощью функции .create мы создаем этот тип
        const brand = await Brand.create({name})
        // передаем объект, где указываем нужные поля(тут указали названия типа)
        return res.json(brand)
    }

    // функция для получения
    async getAll(req, res){
        const brands = await Brand.findAll()
        return res.json(brands)
        
    }
}


// импорт нового объекта из класса ЮзерКонтроллер
module.exports = new BrandController();