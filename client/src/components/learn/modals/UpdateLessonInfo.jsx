import React, {useState} from 'react';
import { Box, Button, Input, Modal } from '@mui/material';
import { UpdateOneLessonInfo } from '../../../http/courseInfoAPI';


const UpdateCourse = ({first ,setChange, show, onHide}) => {
  const [name, setName] = useState('')
  const [subname, setSubname] = useState('')
  console.log(first)
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

  const upd = () => {
    
    const formData = new FormData()
    formData.append('name', name)
    formData.append('subname', subname)
    UpdateOneLessonInfo(formData, first).then(data => setChange(true), onHide())
  }  
    return (
        
        <div>
            <Modal onClose={onHide} open={show} 
            aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="child-modal-title">Редактирование урока</h2>
                    <Input placeholder='Заголовок урока' id="child-modal-description" value = {name} onChange={e => setName(e.target.value)}/>
                    <Input placeholder='Подзаголовок урока' id="child-modal-description" value={subname} onChange={e => setSubname(e.target.value)}/>
                    <Button variant="default" onClick={() => upd()}>Редактировать</Button>
                    </Box>
                    
            </Modal>
        </div>
    )
}


export default UpdateCourse;