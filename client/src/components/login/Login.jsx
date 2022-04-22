import React, { useContext, useState } from 'react'
import { Context } from '../../index'
import { login, regisration } from '../../http/userAPI'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import './index.css';
import { Button, Card, Input, TextField, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
    
    

const Login = observer(() => {

    const {user} = useContext(Context)
    // с помощью useLocation() можно получить маршрут в строке запроса
    const location = useLocation()
    const history = useNavigate()
    // он будет true в том случае, если маршрут совпадает с LOGIN_ROUTE
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async () => {
        try {
            let data;
        if (isLogin) {
            data = await login(email, password)

        } 
        else {
            data = await regisration(email, password)
        }
        // сохраняем данные о пользователи в юзерстор
        user.setUser(user)
        user.setIsAuth(true)
        }catch (e) {
        alert(e.response.data.message)
        }

    }
    return(
        <div className='Login'>
            <Card variant="outlined" className='Log' sx={{ maxWidth: 400, p: 5 }}  style={{backgroundColor:'#f6d365'}}>
                <Typography variant="h6">{ isLogin ? 'Авторизация' : 'Регистрация'}</Typography>
                
                <form className='form'>
                    <TextField style={{marginBottom: "30px", marginTop: "15px"}}
                    value={email} 
                    onChange = {e => setEmail(e.target.value)}
                    type="text" placeholder="" label="Email" />
                    <TextField  
                    value={password} 
                    onChange = {e => setPassword(e.target.value)} 
                    type="password" placeholder="" label="Пароль" />
                    { isLogin ? <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрироваться</NavLink></div>
                    : <div className = "w-auto">Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink></div>}
                    <Button 
                     onClick={click} 
                    variant="contained" sx={{ mt: 3 }}>{isLogin ? 'Войти' : 'Зарегестрироваться'}</Button>

                </form>

            </Card>
        </div>
    );
});

export default Login;