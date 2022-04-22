import React, { useContext, useState } from 'react'
import './header.css';
import { NavLink, useNavigate } from 'react-router-dom'
import { AppBar, Typography, Container, Box, Button, Toolbar, Link, Divider } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { COURSE_ROUTE, LOGIN_ROUTE } from '../../utils/consts';

const Header = observer(() => {
    const{user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }


    return(
        <div className="header_active">
            <div className='containerHeader' >
                <div className='logo_div'>
                    
                    <Typography
                        // component={NavLink}
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
                            to={COURSE_ROUTE}
                            onClick={() => history(COURSE_ROUTE)}
                            // isabled 
                            // endIcon={<KeyboardArrowDownIcon />}
                            >
                                Курсы
                            </Button>
                            <Button 
                            variant="text" 
                            // disabled 
                            // endIcon={<KeyboardArrowDownIcon />}
                            >
                                Профиль
                            </Button>

                            <Divider orientation='vertical' variant='middle' flexItem />
                            <Button 
                            className='btn_exit' 
                            color="inherit" 
                            variant="outlined" 
                            // component={NavLink}
                            // to="/login"
                            onClick={() => logOut()}
                            >
                                Выход
                            </Button>
                            </div>
                        :
                        <Button 
                            color='inherit' 
                            variant="outlined" 
                            // onClick={() => setHeader(true)} 
                            // component={NavLink} 
                            to={LOGIN_ROUTE}
                            onClick={() => history(LOGIN_ROUTE)}
                            >
                                Вход
                            </Button>
                        }
                            
                        </Box>
                    {/* } */}
                    {/* {!isAuth && */}
                        
                    {/* } */}
                    {/* {isAuth && */}
                        
                    {/* } */}
                </div>

            </div>
        </div>
    )
})

export default Header;