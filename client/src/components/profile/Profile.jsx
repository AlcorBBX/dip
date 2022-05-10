import { useNavigate, useParams } from 'react-router-dom'
import { Avatar, Button } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../index'
import './profile.css'
import ProfileUpdate from './modals/ProfileUpdate'
import { CHAT_ROUTE } from '../../utils/consts'
import { fetchOneUsers } from '../../http/userAPI'
// import { fetchOneUsers } from '../../http/userAPI';

const Profile = () => {
  const {id} = useParams()
  const history = useNavigate()
  // const {user} = useContext(Context)
  const [users, setUsers] = useState()
  const [courseVisible, setCourseVisible] = useState(false);
  const [first, setfirst] = useState(false)

  const [final, setFinal] = useState(false)
  
  useEffect(() => {
    setfirst(false)
    fetchOneUsers(Number(id)).then(data => setUsers(data)).finally(setFinal(true))
}, [first])
// console.log(final)
//     {users === undefined ?
//       console.log("stop")
//     : console.log(users)}

  return (
    <div className='profileMain'>
      <div className="profileContainer">
          <div className="profileInner">
            <div className="profileItem" >
              <Avatar className='profileAvatar' 
                // key={user.user.id}
                src={users === undefined ? "" : "http://localhost:5000/" + users.img} 
                // src="https://blob.sololearn.com/avatars/a78336b1-7cc5-408f-9185-60c7948979fd.jpg" 
                sx={{ width: 128, height: 128 }}
               />   
            </div>
            <div className="profileItem" >
              <p className="profileText" style={{color: 'white'}} >{users === undefined ? "loading" : users.email}</p>
              {/* {user.user.role === "ADMIN"? */}
              <p style={{color: 'gold'}}>{users === undefined ? "loading" : users.role}</p>
                                        {/* :<p></p>} */}
              <Button variant="outlined" style={{color: 'white', marginBottom: '10px'}}
                      onClick={() => setCourseVisible(true)}>Изменить профиль</Button>
              <Button to={CHAT_ROUTE} variant="contained" color="success"
                      onClick={() => history(CHAT_ROUTE+ '/' + id)}>Общий чат</Button>
              <ProfileUpdate setfirst={setfirst} show={courseVisible} onHide={() => setCourseVisible(false)}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Profile