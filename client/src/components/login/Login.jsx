import React, { useContext, useState } from 'react'
import { Context } from '../../index'
import { login, regisration } from '../../http/userAPI'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { COURSE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import './index.css';
import { Button, Card, TextField, Typography } from '@mui/material';
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
            // user.setIsAdmin(false)
        }
        // сохраняем данные о пользователи в юзерстор
        user.setUser({})
        user.setUser(user)
        // user.setIsAuth(true)
        
        history(COURSE_ROUTE)
        }catch (e) {
        alert(e.response.data.message)
        }

    }

    return(
        <div className='Login'>
            <Card variant="outlined" className='Log' sx={{ maxWidth: 400, p: 5 }}  style={{background:'none', border:'none', textAlign: 'center'}}>
                <Typography variant="h6" 
                style={{color: "#eee", fontWeight: '200', fontSize: '1.6em', margin: '0', pading: '0' }}>{ isLogin ? 'Авторизация' : 'Регистрация'}</Typography>
                <form className='form'>
                    <TextField className="loginInp" 
                    value={email} 
                    onChange = {e => setEmail(e.target.value)}
                    type="text" placeholder="" label="Email" 
                        style={{border: '0px', marginBottom: '20px'}}
                    />
                    <TextField  
                    value={password} 
                    onChange = {e => setPassword(e.target.value)} 
                    type="password" placeholder="" label="Пароль" />
                    { isLogin ? <div>Нет аккаунта? <NavLink style={{color: "#9c27b0", fontWeight: '400px', fontSize: '20px', textDecoration: 'none'}} to={REGISTRATION_ROUTE}>Зарегестрироваться</NavLink></div>
                    : <div className = "w-auto">Есть аккаунт? <NavLink style={{color: "#9c27b0", fontWeight: '400px', fontSize: '20px', textDecoration: 'none'}} to={LOGIN_ROUTE}>Войти</NavLink></div>}
                    <Button 
                     onClick={click} 
                     to={COURSE_ROUTE}
                     
                    variant="outlined" sx={{ mt: 3 }}>{isLogin ? 'Войти' : 'Зарегестрироваться'}</Button>

                </form>

            </Card>
        </div>
    );
});

export default Login;