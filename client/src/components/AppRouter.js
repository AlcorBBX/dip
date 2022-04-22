import React, { useContext } from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import {authRoutes, publicRoutes} from '../routes'
import {Context} from '../index'
import { LOGIN_ROUTE } from '../utils/consts';

function AppRouter() {
    // моковая переменная, она будет показывать авторизован ли пользователь
    // const isAuth = false
    const {user} = useContext(Context)
  return (
      // указываем несколько маршрутов, если ни один из нех не отработает, тогда 
      // отработает самый последний маршрут, указанный в Switch
    <Routes>
        {/* импорт массива с роутами, которые доступны авторизованным юзерам, пробегаемся с помощь .map()*/}
        {/* вытаскиваем из объекта путь и компонент */}
        {user.isAuth && authRoutes.map(({path, Component}) =>
            // для каждого элемента массива отрисовываем роут, где указываем путь и компонент
            // exact - означает то, что путь должен точно совпадать
            // таккак мы пробемаемся по масс, то надо указать ключ, передаем патч, потому что он к кажой странице уникален
            <Route key={path} path={path} element={<Component/>} exact/>
        )}

        {publicRoutes.map(({path, Component}) =>
            // для каждого элемента массива отрисовываем роут, где указываем путь и компонент
            // exact - означает то, что путь должен точно совпадать
            // таккак мы пробемаемся по масс, то надо указать ключ, передаем патч, потому что он к кажой странице уникален
            <Route key={path} path={path} element={<Component/>} exact/>
        )}
        {/* Если никакой маршрут не отработал, то нас перекидывает в SHOP */}
        {/* <Route path='*' element={<Navigate to={LOGIN_ROUTE}/>}/> */}
    </Routes>
  )
}

export default AppRouter