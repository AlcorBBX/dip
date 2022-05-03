import {$authHost, $host} from "./index";

export const fetchOneCourseInfo = async (id) => {
    // ответ, который будет возвращаться от сервера
    const {data} = await $host.get('api/courseInfo/' + id);
    return data
}