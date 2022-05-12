import {$authHost, $host} from "./index";

export const fetchOneCourseInfo = async (id) => {
    // ответ, который будет возвращаться от сервера
    const {data} = await $host.get('api/courseInfo/' + id);
    return data
}

export const deleteCourseInfo = async (id) => {
    // ответ, который будет возвращаться от сервера
    // пост запрос базовый url берется из системной переменой, к нему добавляем api/... 
    // как тело запроса мы передайем 
    const {data} = await $host.delete('api/courseinfo/delete/' + id);
    // возвращаем данные
    return data
}

export const createCourseInfo = async (courseinfo) => {
    // ответ, который будет возвращаться от сервера
    // пост запрос базовый url берется из системной переменой, к нему добавляем api/... 
    // как тело запроса мы передайем 
    const {data} = await $authHost.post('api/courseinfo', courseinfo);
    // возвращаем данные
    return data
}

export const createCourseLesson = async (courseinfo) => {
    // ответ, который будет возвращаться от сервера
    // пост запрос базовый url берется из системной переменой, к нему добавляем api/... 
    // как тело запроса мы передайем 
    const {data} = await $authHost.post('api/courseinfo/lesson', courseinfo);
    // возвращаем данные
    return data
}
// export const createCourseLesson = async (id) => {
//     // ответ, который будет возвращаться от сервера
//     // пост запрос базовый url берется из системной переменой, к нему добавляем api/... 
//     // как тело запроса мы передайем 
//     const {data} = await $authHost.post('api/courseinfo/' + id);
//     // возвращаем данные
//     return data
// }

export const fetchOneCourse = async (id) => {
    // ответ, который будет возвращаться от сервера
    const {data} = await $host.get('api/course/' + id);
    return data
}

export const fetchOneCourseLesson = async (id) => {
    // ответ, который будет возвращаться от сервера
    const {data} = await $host.get('api/courseinfo/' + id);
    return data
}

export const UpdateOneLessonInfo = async (formData, first) => {
    // ответ, который будет возвращаться от сервера
    const {data} = await $host.put('api/courseinfo/' + first, formData);
    return data
}

export const UpdateOneLesson = async (formData, id) => {
    // ответ, который будет возвращаться от сервера
    const {data} = await $host.put('api/courseinfo/update/' + id, formData);
    return data
}