import React, {useContext, useState} from 'react';
import { Context } from '../../../index';
import { Box, Button, Input, Modal } from '@mui/material';
import {updateUser} from '../../../http/userAPI'

const ProfileUpdate = ({setfirst, show, onHide}) => {
  const {user} = useContext(Context)
  const [email, setEmail] = useState('')
  const [img, setImg] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState()

  const selectFile = e => {
    // сохраняем файл в состояниях по 0 индексу!!!
    setFile(e.target.files[0])
    console.log(file.name)
  }

  const [task, setTask] = useState({
    email: {email},
    // password: "rr",
  });
  // const [change, setChange] = useState(false)

  // if(!file){
  //   return ''
  // }

  const update = async (id, email, password, file) => {
    console.log(id, email, password, file)
    try {
      const users = [{
        "email": email,
        // "img": file.name
      }]
    //   updateUser(id, email, password).then(data => console.log(data)).finally()
    // } 
    const response = await fetch(
      "http://localhost:5000/api/user/update/" + user.user.id,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(users[0]),
      }
    );
    await response.json();}
    catch (error) {
      console.error(error);
    }
    setfirst(true)
    onHide()
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
                    <Input disabled  placeholder='Ссылка на картинку' id="child-modal-description" value={img} onChange={e => setImg(e.target.value)}/>
                    <Input disabled  placeholder='Пароль' id="child-modal-description" value={password} onChange={e => setPassword(e.target.value)}/>

                    <input style={{marginTop: '10px'}} type="file" onChange={selectFile}/>
                    <Button variant="outlined" 
                      style={{width: '200px', marginTop: '10px'}}
                      onClick={() => update(user.user.id, email, password)}>Изменить</Button>
                    </Box>
                    
            </Modal>
        </div>
    )
}


export default ProfileUpdate;