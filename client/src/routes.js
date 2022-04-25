import { COURSE_ROUTE, LEARN_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, LESSON_ROUTE } from "./utils/consts"
import Login from './components/login/Login'
import Course from './components/courses/Course'
import Profile from './components/profile/Profile'
import Learn from './components/learn/Learn'
import Lesson from './components/lesson/Lesson'
// массив списка маршрутов до тех страниц, к которым имеет доступ только авторизованный юзер
export const authRoutes = [
    
]


// массив списка маршрутов до тех страниц, к которым имеет доступ любой юзер
export const publicRoutes = [
    // {   
    //     // путь
    //     path: SHOP_ROUTE,
    //     // компонент, который будет вызываться
    //     Component: Shop
    // },
    {  
        // путь
        path: LESSON_ROUTE,
        // компонент, который будет вызываться
        Component: Lesson
    },
    {  
        // путь
        path: COURSE_ROUTE,
        // компонент, который будет вызываться
        Component: Course
    },
    {  
        // путь
        path: LEARN_ROUTE,
        // компонент, который будет вызываться
        Component: Learn
    },
    {  
        // путь
        path: PROFILE_ROUTE,
        // компонент, который будет вызываться
        Component: Profile
    },

     {   
        // путь
        path: LOGIN_ROUTE,
        // компонент, который будет вызываться
        Component: Login
    },
    {   
        // путь
        path: REGISTRATION_ROUTE,
        // компонент, который будет вызываться
        Component: Login
    },
    // {   
    //     // путь, так же при просмотре определенного девайса, к нему будет добавляться его айди
    //     path: DEVICE_ROUTE + '/:id',
    //     // компонент, который будет вызываться
    //     Component: DevicePage
    // }
]