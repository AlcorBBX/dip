import React, {useContext, useState} from 'react';
import { Context } from '../../../index';
import { Box, Button, Input, Modal } from '@mui/material';
import {updateUser} from '../../../http/userAPI'
import { useParams } from 'react-router-dom';

const ProfileUpdate = ({setfirst, show, onHide}) => {
  const {user} = useContext(Context)
  const {id} = useParams()
  const [email, setEmail] = useState('')
  const [img, setImg] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState()

  const selectFile = e => {
    // сохраняем файл в состояниях по 0 индексу!!!
    setFile(e.target.files[0])
    console.log(file)
  }

  const [task, setTask] = useState({
    email: {email},
    // password: "rr",
  });

  if(!setFile){
    return ''
  }
  const upd = () => {
    
    const formData = new FormData()
    formData.append('id', id)
    formData.append('email', email)
    formData.append('img', file)
    console.log(formData.id)
    updateUser(formData, id).then(data => setfirst(true), onHide())
}
  
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
                      onClick={() => upd()}>Изменить</Button>
                    </Box>
                    
            </Modal>
        </div>
    )
}


export default ProfileUpdate;