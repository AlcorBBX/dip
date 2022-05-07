import { Avatar, Button } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../index'
import './profile.css'
import ProfileUpdate from './modals/ProfileUpdate'
import { CHAT_ROUTE } from '../../utils/consts'
import { useNavigate } from 'react-router-dom'
// import { fetchOneUsers } from '../../http/userAPI';

const Profile = observer(() => {
  const history = useNavigate()
  const {user} = useContext(Context)
  const [courseVisible, setCourseVisible] = useState(false);

  return (
    <div className='profileMain'>
      <div className="profileContainer">
          <div className="profileInner">
            <div className="profileItem" >
              <Avatar className='profileAvatar' 
              // key={user.user.id}
              // src={"http://localhost:5000/" + first} 
              src="https://blob.sololearn.com/avatars/a78336b1-7cc5-408f-9185-60c7948979fd.jpg" 
              sx={{ width: 128, height: 128 }}
               />   
            </div>
            <div className="profileItem" >
              <p className="profileText" key={user.user.id}>{user.user.email}</p>
              {user.user.role === "ADMIN"?
              <p>ADMIN</p>
              :<p></p>}
              <Button variant="default"
          onClick={() => setCourseVisible(true)}>Изменить профиль</Button>
              <Button to={CHAT_ROUTE}
                      onClick={() => history(CHAT_ROUTE)}>Общий чат</Button>
              <ProfileUpdate show={courseVisible} onHide={() => setCourseVisible(false)}/>
            </div>
            </div>
          </div>
        </div>
  )
})

export default Profile