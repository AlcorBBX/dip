import { Avatar, Button } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { Context } from '../../index'
import './profile.css'
import ProfileAvatar from './modals/ProfileAvatar'


const Profile = observer(() => {
  const {user} = useContext(Context)
  const [courseVisible, setCourseVisible] = useState(false);

  return (
    <div className='profileMain'>
      <div className="profileContainer">
          <div className="profileInner">
            <div className="profileItem" >
              <Avatar className='profileAvatar' 
              key={user.user.id}
              src={user.user.img} 
              sx={{ width: 128, height: 128 }}
               />
            </div>
            <div className="profileItem" >
              <p className="profileText" key={user.user.id}>{user.user.email}</p>
              <Button variant="default"
          onClick={() => setCourseVisible(true)}>Изменить профиль</Button>
              <ProfileAvatar show={courseVisible} onHide={() => setCourseVisible(false)}/>
            </div>
            </div>
          </div>
        </div>
  )
})

export default Profile