// импорт модуля, который будет генерировать случайные id
const uuid = require('uuid')
const path = require('path')
// импорт моделей
const {CourseInfo, Lesson} = require('../models/models')
// импорт ошибок
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
                include:[{model: Lesson, as: 'infoCourse'}],
            }
        )
        // возвращаем на клиенsт девайс
        return res.json(course)
    }

    // async updateCourse(req, res) {
    //     const { id, name, img } = req.body
    //     console.log(req.body)

    //     const data = await Course.findOne
    //         .update(
    //             {
    //                 name: name,
    //                 img: img,
    //             },
    //             { where: {id}, }
    //         )
    //     .then((result) => result)
    //     .catch((result) => result)
    //     console.log(data)
    //     res.send(data);
    // }
}


// импорт нового объекта из класса ЮзерКонтроллер
module.exports = new CourseInfoController();