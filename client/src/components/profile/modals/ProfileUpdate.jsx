import React, {useContext, useState} from 'react';
import { Context } from '../../../index';
import { Box, Button, Input, Modal } from '@mui/material';
import {updateUser} from '../../../http/userAPI'

const ProfileUpdate = ({show, onHide}) => {
  const {user} = useContext(Context)
  const [email, setEmail] = useState('')
  const [img, setImg] = useState('')
  const [password, setPassword] = useState('')

  const [task, setTask] = useState({
    email: "qwertyy",
    // password: "rr",
  });
  // const [change, setChange] = useState(false)

  const update = async (id, email, password) => {
    console.log(id, email, password)
    try {
    //   const users = [{
    //     "id": id,
    //     "email": email,
    //     "password": password
    //   }]
    //   updateUser(id, email, password).then(data => console.log(data)).finally()
    // } 
    const response = await fetch(
      "http://localhost:5000/api/user/update/" + user.user.id,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      }
    );
    await response.json();}
    catch (error) {
      console.error(error);
    }
  };
  

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });
 
    return (
        
        <div>
            <Modal onClose={onHide} open={show} 
            aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="child-modal-title">Изменение профиля</h2>
                    <Input placeholder='Никнейм' id="child-modal-description" value = {email} onChange={e => setEmail(e.target.value)}/>
                    <Input placeholder='Ссылка на картинку' id="child-modal-description" value={img} onChange={e => setImg(e.target.value)}/>
                    <Input placeholder='Пароль' id="child-modal-description" value={password} onChange={e => setPassword(e.target.value)}/>
                    <Button variant="default" onClick={() => update(user.user.id, email, password)}>Изменить</Button>
                    </Box>
                    
            </Modal>
        </div>
    )
}


export default ProfileUpdate;