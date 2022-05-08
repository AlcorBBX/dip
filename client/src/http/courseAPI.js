import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    // ответ, который будет возвращаться от сервера
    // пост запрос базовый url берется из системной переменой, к нему добавляем api/... 
    // как тело запроса мы передайем 
    const {data} = await $authHost.post('api/type', type);
    // возвращаем данные
    return data
}

// получение типов
export const fetchTypes = async () => {
    // ответ, который будет возвращаться от сервера
    const {data} = await $host.get('api/type');
    return data
}



export const createCourse = async (course) => {
    // ответ, который будет возвращаться от сервера
    // пост запрос базовый url берется из системной переменой, к нему добавляем api/... 
    // как тело запроса мы передайем 
    const {data} = await $authHost.post('api/course', course);
    // возвращаем данные
    return data
}


export const deleteCourse = async (id) => {
    // ответ, который будет возвращаться от сервера
    // пост запрос базовый url берется из системной переменой, к нему добавляем api/... 
    // как тело запроса мы передайем 
    const {data} = await $host.delete('api/course/delete/' + id);
    // возвращаем данные
    return data
}


// получение девайсов
export const fetchCourse = async (typeId) => {
    // ответ, который будет возвращаться от сервера
    const {data} = await $host.get('api/course', {params: {
        typeId
    }});
    return data
}

// получение одного девайса
export const fetchOneCourse = async (id) => {
    // ответ, который будет возвращаться от сервера
    const {data} = await $host.get('api/course/' + id);
    return data
}

export const UpdateCourse = async (id) => {
    // ответ, который будет возвращаться от сервера
    const {data} = await $host.put('api/course/' + id);
    return data
}