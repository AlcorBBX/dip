import { useNavigate, useParams } from 'react-router-dom'
import { Avatar, Button } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../index'
import './profile.css'
import ProfileUpdate from './modals/ProfileUpdate'
import ListAdmins from './modals/ListAdmins'
import { CHAT_ROUTE } from '../../utils/consts'
import { fetchOneUsers } from '../../http/userAPI'
// import { fetchOneUsers } from '../../http/userAPI';

const Profile = () => {
  const {id} = useParams()
  const history = useNavigate()
  const {user} = useContext(Context)
  const [users, setUsers] = useState()
  const [courseVisible, setCourseVisible] = useState(false);
  const [usersVisible, setUsersVisible] = useState(false);
  const [first, setfirst] = useState(false)

  const [final, setFinal] = useState(false)
  console.log(user.user.id)
  useEffect(() => {
    setfirst(false)
    fetchOneUsers(Number(id)).then(data => setUsers(data)).finally(setFinal(true))
}, [first])
  
{users === undefined ? console.log('n') : console.log(user.user.id)} 
  return (
    <div className='profileMain'>
      <div className="profileContainer">
          <div className="profileInner">
            <div className="profileItem" >
              <Avatar className='profileAvatar' 
                src={users === undefined ? "" : "http://localhost:5000/" + users.img}  
                sx={{ width: 128, height: 128 }}
               />   
            </div>
            <div className="profileItem" >
              <p className="profileText" style={{color: 'white'}} >{users === undefined ? "loading" : users.email}</p>

              <p style={{color: 'gold'}}>{users === undefined ? "loading" :
               <div>
                {users.role}
                
               </div>
               }</p>
               {users === undefined ? '' : 
                <div>
                  {users.id === user.user.id? 
                  <div style={{display: 'flex', flexDirection:'column'}}>
                  {users.role === 'ADMIN'?
                    <Button variant="outlined" style={{color: 'white', marginBottom: '10px'}}
                      onClick={() => setUsersVisible(true)}>Users</Button>: ''}
                    <Button variant="outlined" style={{color: 'white', marginBottom: '10px'}}
                        onClick={() => setCourseVisible(true)}>Изменить профиль</Button>
                    <Button to={CHAT_ROUTE} variant="contained" color="success"
                        onClick={() => history(CHAT_ROUTE+ '/' + id)}>Общий чат</Button>
                  </div>
                  : ''}
                </div> }
              {/* <Button variant="outlined" style={{color: 'white', marginBottom: '10px'}}
                      onClick={() => setCourseVisible(true)}>Изменить профиль</Button>
              <Button to={CHAT_ROUTE} variant="contained" color="success"
                      onClick={() => history(CHAT_ROUTE+ '/' + id)}>Общий чат</Button> */}


              <ProfileUpdate setfirst={setfirst} show={courseVisible} onHide={() => setCourseVisible(false)}/>
              <ListAdmins show={usersVisible} onHide={() => setUsersVisible(false)}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Profile