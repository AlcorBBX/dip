// импорт модулей 

require('dotenv').config() // конфигурационный файл
const express = require('express') // express
const sequelize = require('./db') // импорт БД
const models = require('./models/models') // модели БД
const cors = require('cors') // для отправки запросов из браузера
const fileUpload = require('express-fileupload') // пакет для загрузки файлов(картинок)
const router = require('./routes/index') // импорт роутеров
const errorHandler = require('./middleware/ErrorHandlingMiddleware') // импорт мидлвейра с основными ошибками
const path = require('path')

//получение порта из конфигупационного файла .env
const PORT = process.env.PORT || 5000

// запуск приложения
const app = express()

//настройка cors для того, что бы отправлять запросы из браузера
app.use(cors())
// для того, чтобы приложение могло парсить json формат
app.use(express.json())
// для раздачи картинок с сервера (__текущая папка, "папка в которой лежат картинки")
app.use(express.static(path.resolve(__dirname, 'static')))
// для возможности загрузки файлов
app.use(fileUpload({}))
// обработка роутеров 
app.use('/api', router)


// обработка ошибок, последний мидлвейр (В КОНЦЕ!!!!)
app.use(errorHandler)


const start = async () => {
    try {
        // подключение к бд
        await sequelize.authenticate()
        // сверяет состояние бд 
        await sequelize.sync() 
        app.listen(PORT, () => {console.log(`сервер запустила на порту: ${PORT}`)})
    } catch (err) {
        console.log(err)
    }
}

start()

