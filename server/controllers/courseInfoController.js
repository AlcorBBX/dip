// импорт модуля, который будет генерировать случайные id
const uuid = require('uuid')
const path = require('path')

const {CourseInfo, Lesson, User, LessonPractic} = require('../models/models')

const ApiError = require('../error/ApiError')


class CourseInfoController {

    // функция для создания
    async create(req, res, next){
        try {
            let {name, subname, courseId} = req.body
            const course = await CourseInfo.create({name, subname, courseId})
            return res.json(course)
              
            
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async createLesson(req, res, next){
        try {
            let {title, text, code, atention, courseInfoId} = req.body
            const course = await Lesson.create({title, text, code, atention, courseInfoId})
            return res.json(course)
              
            
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async updateLessonInfo(req, res) {
        const { id } = req.params;
        const { name, subname} = req.body;
        console.log(req.body)

        const data = await CourseInfo.update(
                {
                    name: name,
                    subname: subname,
                },
                { where: {id}, }
            )
        .then((result) => result)
        .catch((result) => result)
        console.log(data)
        res.send(data);
    }

    async updateLesson(req, res) {
        const { id } = req.params;
        const { title, text, code, atention} = req.body;
        console.log(req.body)

        const data = await Lesson.update(
                {
                    title: title,
                    text: text,
                    code: code,
                    atention: atention,
                },
                { where: {id}, }
            )
        .then((result) => result)
        .catch((result) => result)
        console.log(data)
        res.send(data);
    }

    async updateUserLesson(req, res) {
        const { id } = req.params;
        const { courseInfoId, lessons } = req.body;
        const less = JSON.parse(lessons)
        console.log(req.body)

        const data = await User.update( 
                {
                    courseInfoId: courseInfoId,
                    lessons: less
                },
                { where: {id}, }
            )
        .then((result) => result)
        .catch((result) => result)
        console.log(data)
        console.log(lessons)
        res.send(data);
    }


    async delete(req, res, next){
        try {
            let {id} = req.params
            const course = await CourseInfo.destroy({
                where: {id}
            })
            return res.json(course)
              
            
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async deleteTask(req, res){
        try {
          const { id } = req.params;
          const result = await pool.query("DELETE FROM course WHERE id = $1", [id]);
      
        //   if (result.rowCount === 0)
        //     return res.status(404).json({ message: "Course not found" });
            console.log(result)
          return res.sendStatus(204);
        } catch (error) {
          next(error);
        }
      };


      async updateCourse(req,res){
          try{
              const {id,name,img} = req.params
              const course = await CourseInfo.create({id, name, img})
              return res.json(course)                
            } catch (e) {
                next(ApiError.badRequest(e.message));
            }         
      }


    // функция для получения конкретного девайса
    async getOne(req, res){
        // получаем id из параметров (параметр в роутере)
        const {id} = req.params
        // вызов функции файндВан и передача инфы в девайс
        const course = await CourseInfo.findOne(
            {
                // условие, по которому неоходимо искать девайс
                where: {id},
                // получение массива характеристик
                // модель, которую надо подгрузить и название поля, которое будет в этом объекте
                include:[{model: Lesson, as: 'info'}],
            }
        )
        // возвращаем на клиенsт девайс
        return res.send(course)
    }

    async getOnePractic(req, res){
        // const {id} = req.params

        // console.log({id})
        const practic = await LessonPractic.findAndCountAll()
        // const practic = await LessonPractic.findOne(
        //     {
        //         // where: {lessonId: {id},}

        //         where: {id},

        //     }
        // )

        return res.send(practic)
    }

}


// импорт нового объекта из класса ЮзерКонтроллер
module.exports = new CourseInfoController();