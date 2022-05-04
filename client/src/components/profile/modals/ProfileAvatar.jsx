import React, {useContext, useState} from 'react';
import { Context } from '../../../index';
import { Box, Button, Input, Modal } from '@mui/material';

const ProfileAvatar = ({show, onHide}) => {
  const {user} = useContext(Context)


  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [password, setPassword] = useState('')


  const updateUser = async (id) => {
    try {
      await fetch(`http://localhost:5000/profile/${id}`, {
        method: "UPDATE",
      });
    //   setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
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
 
    return (
        
        <div>
            <Modal onClose={onHide} open={show} 
            aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="child-modal-title">Изменение профиля</h2>
                    <Input placeholder='Никнейм' id="child-modal-description" value = {name} onChange={e => setName(e.target.value)}/>
                    <Input placeholder='Ссылка на картинку' id="child-modal-description" value={img} onChange={e => setImg(e.target.value)}/>
                    <Input placeholder='Пароль' id="child-modal-description" value={password} onChange={e => setPassword(e.target.value)}/>
                    <Button variant="default" onClick={() => updateUser(user.id)}>Изменить</Button>
                    </Box>
                    
            </Modal>
        </div>
    )
}


export default ProfileAvatar;