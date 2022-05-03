const {Course, CourseInfo} = require('../models/models')

// const {Chat} = require('../models/models')

const ApiError = require('../error/ApiError')

class MessageController{
    async create(req, res, next){
        try {
            let {name, img} = req.body
            const course = await Course.create({name, img})
            return res.json(course)

            // let {name, text} = req.body
            // const message = await Chat.create({})
            // return res.json(message)
              
            
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res){
        // получение инфы из строки запроса
        let {courseId} = req.query

        let course;

        course = await Course.findAndCountAll({courseId})

        // возвращаем массив девайсов
        return res.json(course)
    }
}