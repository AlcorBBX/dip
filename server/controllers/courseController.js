// импорт модуля, который будет генерировать случайные id
const uuid = require('uuid')
const path = require('path')
// импорт моделей
const {Course, CourseInfo} = require('../models/models')
// импорт ошибок
const ApiError = require('../error/ApiError')


class CourseController {

    // функция для создания
    async create(req, res, next){
        try {
            let {name, img} = req.body
            const course = await Course.create({name, img})
            return res.json(course)
              
            
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    


    async delete(req, res, next){
        try {
            let {id} = req.body
            const course = await Course.delete({id})
            return res.json(course)
              
            
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    // функция для получения
    async getAll(req, res){
        // получение инфы из строки запроса
        let {brandId, typeId, limit, page} = req.query

        // дефолтное знаечение страницы, если она не указана, то откроется 1
        page = page || 1
        // деф. значение лимита, если он не указан, то будет выводится по 9 девайсов
        limit = limit || 9
        // отступ девайсов
        //*** например мы перешли на 2 страницу и первые 9 товаров нам надо пропустить
        //*** мы умножаем страницу на лимит и отнимаем лимит
        //*** если у нас в страница, то 2*9=18 18-9=9 - отступ девайсов
        let offset = page * limit - limit

        let course;

        // фильтрация по бренду и типу, а так же по страницам и кол-ву девайсов
        // .findAndCountAll() - предназначена для пагинации, выводит кол-во товара в count
        if(!brandId && !typeId) {
            // поиск всех девайсов без фильтрации и запись их в device
            course = await Course.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            // поиск всех девайсов с фильтром по бренду и запись их в device
            course = await Course.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            // поиск всех девайсов с фильтром по типу и запись их в device
            course = await Course.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            // поиск всех девайсов с фильтром по типу и бренду и запись их в device
            course = await Course.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }

        // возвращаем массив девайсов
        return res.json(course)
    }

    // функция для получения конкретного девайса
    async getOne(req, res){
        // получаем id из параметров (параметр в роутере)
        const {id} = req.params
        // вызов функции файндВан и передача инфы в девайс
        const course = await Course.findOne(
            {
                // условие, по которому неоходимо искать девайс
                where: {id},
                // получение массива характеристик
                // модель, которую надо подгрузить и название поля, которое будет в этом объекте
                include:[{model: CourseInfo, as: 'info'}]
            }
        )
        // возвращаем на клиент девайс
        return res.json(course)
    }
}


// импорт нового объекта из класса ЮзерКонтроллер
module.exports = new CourseController();