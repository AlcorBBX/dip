import axios from 'axios'

// инстанс для запросов, не требующих авторизацию
const $host = axios.create({
    // url на которые будут отправляться запросы
    baseURL: "http://localhost:5000/"
})

// инстанс для запросов, требующих авторизацию
const $authHost = axios.create({
    // url на которые будут отправляться запросы
    baseURL: "http://localhost:5000/"
})

// функция для автоматического подставления токена к каждому запросу
const authInterceptor = config => {
    // получаем токен из локального хранилища по ключу
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

// для инстанса $authHost добавляем интерцептор для запроса
// он будет отрабатывать перед каждым запросом и подставлять токен в хеадер авторизейшен
$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}