import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode'

// функция принимает емейл и пароль 
export const regisration = async (email, password) => {
    // ответ, который будет возвращаться от сервера
    // пост запрос базовый url берется из системной переменой, к нему добавляем api/... 
    // как тело запроса мы передайем емейл, пароль и роль (чтоб не было проблем с доступом)
    const {data} = await $host.post('api/user/registration', {email, password, role:'USER'});
    // после того, как запрос прошел, мы в локальное хранилище по ключу token будем помещать токен из тела запроса
    localStorage.setItem('token', data.token)    
    // возвращаем результат декодирования токена, который находится внутри этого тела
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    // ответ, который будет возвращаться от сервера
    const {data} = await $host.post('api/user/login', {email, password});
    // после того, как запрос прошел, мы в локальное хранилище по ключу token будем помещать токен из тела запроса
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
 
export const check = async () => {
    // если пользователь аторизован, при каждом обновлении страницы будет вызываться эта функция
    // и если токен не валидный, то пользователь будет разлогиниваться
    const {data} = await $authHost.get('api/user/auth', {});
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const updateUser = async (id,email, password) => {
    // ответ, который будет возвращаться от сервера
    // пост запрос базовый url берется из системной переменой, к нему добавляем api/... 
    // как тело запроса мы передайем 
    const {data} = await $host.put('api/user/update/' + id);
    // возвращаем данные
    return data
}