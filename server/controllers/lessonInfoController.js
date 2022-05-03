// импорт модулей

// импорт моделей
const {LessonInfo} = require('../models/models')
const ApiError = require('../error/ApiError')


class LessonInfoController {

    // функция для создания
    async create(req, res){
        // из тела запроса извлекаем нейм
        const {title, description} = req.body
        // с помощью функции .create мы создаем этот тип
        const lessonInfo = await LessonInfo.create({title, description})
        // передаем объект, где указываем нужные поля(тут указали названия типа)
        return res.json(lessonInfo)
    }

    // функция для получения
    async getAll(req, res){
        const lessonInfos = await LessonInfo.findAll()
        return res.json(lessonInfos)
        
    }
}


// импорт нового объекта из класса ЮзерКонтроллер
module.exports = new LessonInfoController();