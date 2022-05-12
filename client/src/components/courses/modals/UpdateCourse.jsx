import React, {useContext, useState} from 'react';
import { Context } from '../../../index';
import { createCourse, UpdateOneCourse } from '../../../http/courseAPI';
import { Box, Button, Input, Modal } from '@mui/material';


const UpdateCourse = ({first ,setChange, show, onHide}) => {
  // const {course} = useContext(Context)
  const [name, setName] = useState('')
  console.log(first)
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [file, setFile] = useState()
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

  const selectFile = e => {
    // сохраняем файл в состояниях по 0 индексу!!!
    setFile(e.target.files[0])
    console.log(file)
  }
  if(!setFile){
    return ''
  }

  const upd = () => {
    
    const formData = new FormData()
    formData.append('name', name)
    formData.append('img', file)
    UpdateOneCourse(formData, first).then(data => setChange(true), onHide())
  }  
    return (
        
        <div>
            <Modal onClose={onHide} open={show} 
            aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="child-modal-title">Редактирование курса</h2>
                    <Input placeholder='Название курса' id="child-modal-description" value = {name} onChange={e => setName(e.target.value)}/>
                    <Input placeholder='Ссылка на картинку' id="child-modal-description" value={img} onChange={e => setImg(e.target.value)}/>
                    
                    <input style={{marginTop: '10px'}} type="file" onChange={selectFile}/>
                    <Button variant="default" onClick={() => upd()}>Редактировать</Button>
                    </Box>
                    
            </Modal>
        </div>
    )
}


export default UpdateCourse;