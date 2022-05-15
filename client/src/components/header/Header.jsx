import React, { useContext, useState } from 'react'
import './header.css';
import { NavLink, useNavigate } from 'react-router-dom'
import { AppBar, Typography, Container, Box, Button, Toolbar, Link, Divider } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { COURSE_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from '../../utils/consts';

const Header = observer(() => {
    const{user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        history(LOGIN_ROUTE)
    }
    
    

    return(
        <div className="header_active">
            <div className='containerHeader' >
                <div className='logo_div'>
                    <Typography
                        to={COURSE_ROUTE}
                        onClick={() => history(COURSE_ROUTE)}
                        color={"#fff"}
                        className='logo'
                        sx={{ fontWeight: 'bold', fontSize: '25px', textShadow: '0 0 3px rgba(0,0,0,.5)' }}>
                        <Typography color="secondary" component={'span'} sx={{ fontWeight: 'bold', fontSize: '20px', textShadow: '0 0 1px rgba(0,0,0,.5)' }} >KUSO</Typography>NAGI
                    </Typography>
                    
                </div>

                <div className='header_btns'>
                    {/* {!isAuth && */}
                        <Box mr={3} 
                        // color={header ? 'inherit' : 'white'}
                        color={'inherit'}
                        >
                        {user.isAuth ? 
                            <div className='auth_btns'>

                            <Button 
                                variant="text" d
                                style={{color: 'gold'}}
                                to={COURSE_ROUTE}
                                onClick={() => history(COURSE_ROUTE)}
                            >
                                Курсы
                            </Button>
                            <Button 
                                variant="text" 
                                style={{color: 'beige'}}
                                onClick={() => history(PROFILE_ROUTE + '/' + user.user.id )}
                            >
                                Профиль
                            </Button>

                            <Divider orientation='vertical' variant='middle' flexItem />
                            <Button 
                                className='btn_exit' 
                                style={{fontWeight: '800'}}
                                variant="outlined" 
                                color="error"
                                to={LOGIN_ROUTE}
                                onClick={() => logOut()}
                            >
                                Выход
                            </Button>
                            </div>
                        :
                        <Button 
                            color='inherit' 
                            variant="outlined"  
                            to={LOGIN_ROUTE}
                            onClick={() => history(LOGIN_ROUTE)}
                            style={{color: 'white'}}
                            >
                                Вход
                            </Button>
                        }
                            
                        </Box>
                </div>

            </div>
        </div>
    )
})

export default Header;