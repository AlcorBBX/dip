import React, {useState} from 'react';
import { Box, Button, Input, Modal } from '@mui/material';
import { UpdateOneLesson } from '../../../http/courseInfoAPI';


const UpdateCourse = ({i ,setChange, show, onHide}) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [code, setCode] = useState('')
  const [atention, setAtention] = useState('')
  console.log(i)
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
    formData.append('title', title)
    formData.append('text', text)
    formData.append('code', code)
    formData.append('atention', atention)
    UpdateOneLesson(formData, i).then(data => setChange(true), onHide())
  }  
  console.log("id = "+i)
    return (
        
        <div>
            <Modal onClose={onHide} open={show} 
                    aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="child-modal-title">Редактирование урока</h2>
                    <Input placeholder='Заголовок урока' id="child-modal-description" value = {title} onChange={e => setTitle(e.target.value)}/>
                    <Input placeholder='Подзаголовок урока' id="child-modal-description" value={text} onChange={e => setText(e.target.value)}/>
                    <Input placeholder='Заголовок урока' id="child-modal-description" value = {code} onChange={e => setCode(e.target.value)}/>
                    <Input placeholder='Подзаголовок урока' id="child-modal-description" value={atention} onChange={e => setAtention(e.target.value)}/>
                    <Button variant="default" onClick={() => upd()}>Редактировать</Button>
                    </Box>
                    
            </Modal>
        </div>
    )
}


export default UpdateCourse;