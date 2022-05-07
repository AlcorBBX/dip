const ApiError = require('../error/ApiError')
// импорт библы для кэширования
const bcrypt = require('bcrypt')
// импорт jwt токен
const jwt = require('jsonwebtoken')
// импорт моделей пользователя и корзины(для работы с ними)
const{User, Basket} = require('../models/models')

// генерация jwt токена 
// .sign(обьект, который будет вшиваться в центральную часть токена, секретный ключ, {expiresIn: сколкьо токен будет "жить"})
const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
        )
}


class UserController {

    async registration(req, res, next){
        // получения данных из тела запроса
        const {email, password, role} = req.body
        // если мейл или пароль пустые, тогда
        if (!email || !password) {
            // возвращает ошибку
            return next(ApiError.badRequest('Некорректные email или пароль'))
        }
        // проверка на существования пользователя с таким мейлом
        const candidate = await User.findOne({where: {email}})

        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже зарегестрирован'))
        }
        // если такого юзера не существует, тогда хешируем пароль
        // .hash(пароль, сколько раз надо хешировать)
        const hashPassword = await bcrypt.hash(password, 5)

        // создание юзера
        const user = await User.create({email, role, password: hashPassword})
        // создаем корзину и передает туда id пользователя
        const basket = await Basket.create({userId: user.id})

        // генерация jwt токена, передаем айди, емейл и роль юзера
        const token = generateJwt(user.id, user.email, user.role)


        // возвращаем токен на клиент
        return res.json({token})
    }

    async login(req, res, next){
        // получаем логин и пароль из тела запроса
        const {email, password} = req.body
        // поиск юзера с таким же мейлом в БД
        const user = await User.findOne({where: {email}})
        // проверка на существования пользователя
        if(!user) {
            return next(ApiError.internal('пользователь не найден'))
        }
        // сравниваем пароли .compareSync(пароль, который написал пользователь, пароль, который лежит в БД)
        let comparePassword = bcrypt.compareSync(password, user.password)
        // проверка на пустоту поля
        if (!comparePassword) {
            return next(ApiError.internal('неверный пароль'))
        }
        // генерация токена
        const token = generateJwt(user.id, user.email, user.role)

        // возвращаем на клиент токен
        return res.json({token})

    }

    async check(req, res, next){
        // генерация нового токена
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        // передаем токен на клиент
        return res.json({token})
    }

    async updateUser(req,res){
        try{
            const {id,email,password} = req.params
            const user = await User.update({id,email,password})
            return res.json(user)                
          } catch (e) {
              next(ApiError.badRequest(e.message));
          }         
    }

     async updateTask (req, res) {
        try {
          const { id } = req.params;
          const { email, password } = req.body;
      
          const result = await pool.query(
            "UPDATE user SET email = $1, password = $2 WHERE id = $3 RETURNING *",
            [email, password, id]
          );
      
          if (result.rows.length === 0)
            return res.status(404).json({ message: "Task not found" });
      
          return res.json(result.rows[0]);
        } catch (error) {
          next(error);
        }
      };

      async updateCourse(req, res) {
        const { id } = req.params;
          const { email, password } = req.body;
        console.log(req.body)

        const data = await User.update(
                {
                    email: email,
                    // password: password,
                },
                { where: {id}, }
            )
        .then((result) => result)
        .catch((result) => result)
        console.log(data)
        res.send(data);
    }


    async getAll(req, res){
        // получение инфы из строки запроса
        let {email, role, img} = req.query

        let course;

        course = await User.findAndCountAll({email, role, img})

        // возвращаем массив девайсов
        return res.json(course)
    }


    async getOne(req, res){
        // получаем id из параметров (параметр в роутере)
        const {id} = req.params
        // вызов функции файндВан и передача инфы в девайс
        const course = await User.findOne(
            {
                // условие, по которому неоходимо искать девайс
                where: {id}
            }
        )
        // возвращаем на клиент девайс
        return res.json(course)
    }
}


// импорт нового объекта из класса ЮзерКонтроллер
module.exports = new UserController();