import React, {useContext, useState} from 'react';
import { Context } from '../../../index';
import { createCourse } from '../../../http/courseAPI';
import { Box, Button, Input, Modal } from '@mui/material';


const UpdateCourse = ({show, onHide}) => {
  const {course} = useContext(Context)
  const [name, setName] = useState('')

  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
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

  const [task, setTask] = useState({
    name: {name},
    // password: "rr",
  });
  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const update = async (name) => {
    console.log(name)
    try {
      const users = [{
        "name": name,
      }]
    //   updateUser(id, email, password).then(data => console.log(data)).finally()
    // } 
    const response = await fetch(
      "http://localhost:5000/api/course/" + 33,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(users),
      }
    );
    await response.json();
    onHide()}
    catch (error) {
      console.error(error);
    }
    // setfirst(true)
    
  };

  
    return (
        
        <div>
            <Modal onClose={onHide} open={show} 
            aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="child-modal-title">Редактирование курса</h2>
                    <Input placeholder='Название курса' id="child-modal-description" value = {name} onChange={e => setName(e.target.value)}/>
                    <Input placeholder='Ссылка на картинку' id="child-modal-description" value={img} onChange={e => setImg(e.target.value)}/>
                    <Button variant="default" onClick={update}>Редактировать</Button>
                    </Box>
                    
            </Modal>
        </div>
    )
}


export default UpdateCourse;