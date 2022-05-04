import React, {useContext, useState} from 'react';
import { Context } from '../../../index';
import { createCourse } from '../../../http/courseAPI';
import { Box, Button, Input, Modal } from '@mui/material';


const UpdateCourse = ({show, onHide}) => {
  const {course} = useContext(Context)


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
  const addCourse = () => {
    
      const formData = new FormData()
      formData.append("name", title)
      formData.append("img", img)
      createCourse(formData).then(data => onHide())
      console.log(formData)
  }


  
    return (
        
        <div>
            <Modal onClose={onHide} open={show} 
            aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="child-modal-title">Редактирование курса</h2>
                    <Input placeholder='Название курса' id="child-modal-description" value = {title} onChange={e => setTitle(e.target.value)}/>
                    <Input placeholder='Ссылка на картинку' id="child-modal-description" value={img} onChange={e => setImg(e.target.value)}/>
                    <Button variant="default" onClick={addCourse}>Редактировать</Button>
                    </Box>
                    
            </Modal>
        </div>
    )
}


export default UpdateCourse;