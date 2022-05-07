import {$authHost, $host} from "./index";

export const createMessage = async (course) => {
    // ответ, который будет возвращаться от сервера
    // пост запрос базовый url берется из системной переменой, к нему добавляем api/... 
    // как тело запроса мы передайем 
    const {data} = await $authHost.post('api/shat', course);
    // возвращаем данные
    return data
}

export const fetchMessage = async (userId) => {
    // ответ, который будет возвращаться от сервера
    const {data} = await $host.get('api/shat', {params: {
        userId
    }});
    return data
}

// получение одного девайса
export const fetchOneMessage = async (id) => {
    // ответ, который будет возвращаться от сервера
    const {data} = await $host.get('api/shat/' + id);
    return data
}