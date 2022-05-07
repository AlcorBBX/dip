const {Chat} = require('../models/models')

// const {Chat} = require('../models/models')

const ApiError = require('../error/ApiError')

class MessageController{
    async create(req, res, next){
        try {
            let {text, userId} = req.body
            const course = await Chat.create({text, userId})
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
        let {text, userId} = req.query

        let course;

        course = await Chat.findAndCountAll({text, userId})

        // возвращаем массив девайсов
        return res.json(course)
    }


    async getMessageUser(req, res){
        // получение инфы из строки запроса
        let {userId} = req.query

        let course;

        course = await Chat.findAndCountAll({userId})

        // возвращаем массив девайсов
        return res.json(course)
    }
}

module.exports = new MessageController();
