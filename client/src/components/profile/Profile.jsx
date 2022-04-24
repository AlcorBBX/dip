import { Avatar } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../../index'
import './profile.css'
const Profile = observer(() => {

  const {user} = useContext(Context)

  return (
    <div className='profileMain'>
      <div className="profileContainer">
          <div className="profileInner">
            <div className="profileItem" >
              <Avatar className='profileAvatar' 
              src="https://sun9-62.userapi.com/s/v1/if2/rPNAY2OpZuQbdvp2B0N_mN7ArYfMI7zdj6pCoD_aeHH5roK7i0pxBOqJQD0P7XHPAMwLYtCPOeKOYvqC9x0mfMhf.jpg?size=823x1080&quality=96&type=album" 
              sx={{ width: 128, height: 128 }}
               />
            </div>
            <div className="profileItem" >
              <p className="profileText" key={user.user.id}>{user.user.email}</p>
              {/* <NavLink to={SUBSCRIBE_ROUTE} className="navbar__item">
                <Button type="primary">Оформить платную подписку</Button>
              </NavLink> */}
            </div>
            </div>
          </div>
        </div>
  )
})

export default Profile