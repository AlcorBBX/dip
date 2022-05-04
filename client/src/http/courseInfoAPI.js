import {$authHost, $host} from "./index";

export const fetchOneCourseInfo = async (id) => {
    // ответ, который будет возвращаться от сервера
    const {data} = await $host.get('api/courseInfo/' + id);
    return data
}


export const createCourseInfo = async (courseInfo) => {
    // ответ, который будет возвращаться от сервера
    // пост запрос базовый url берется из системной переменой, к нему добавляем api/... 
    // как тело запроса мы передайем 
    const {data} = await $authHost.post('api/courseinfo', courseInfo);
    // возвращаем данные
    return data
}