import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../../index';
import { createCourse, fetchTypes } from '../../../http/courseAPI';
import { Box, Button, Input, Modal } from '@mui/material';

const CreateCourse = ({show, onHide}) => {
//   const {course} = useContext(Context)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [subname, setSubname] = useState('')
//   const [id, setId] = useState('')
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
      formData.append("title", title)
      formData.append("description", description)

      formData.append("name", name)
      formData.append("subname", subname)
    //   formData.append("id", id)
      createCourse(formData).then(data => onHide())
      console.log(formData)
  }


  
    return (
        
        <div>
            <Modal onClose={onHide} open={show} 
            aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="child-modal-title">Добавление курса</h2>
                    <Input placeholder='Название курса' id="child-modal-description" value = {title} onChange={e => setTitle(e.target.value)}/>
                    <Input placeholder='Ссылка на картинку' id="child-modal-description" value={description} onChange={e => setDescription(e.target.value)}/>

                    <Input placeholder='Ссылка на картинку' id="child-modal-description" value={name} onChange={e => setName(e.target.value)}/>
                    <Input placeholder='Ссылка на картинку' id="child-modal-description" value={subname} onChange={e => setSubname(e.target.value)}/>
                    <Button variant="default" onClick={addCourse}>Добавить</Button>
                    </Box>
                    
            </Modal>
        </div>
    )
}


export default CreateCourse;