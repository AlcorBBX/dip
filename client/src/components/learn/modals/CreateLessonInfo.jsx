import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../../index';
import { Box, Button, Input, Modal } from '@mui/material';
import { createCourseInfo } from '../../../http/courseInfoAPI';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { fetchOneCourse } from '../../../http/courseAPI';

const CreateLessonInfo = observer(({show, onHide, setChange}) => {
  
  const {id} = useParams()
  const [name, setName] = useState('')
  const [subname, setSubname] = useState('')

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

      formData.append("name", name)
      formData.append("subname", subname)
      formData.append("courseId", id)
    //   formData.append("id", id)
      createCourseInfo(formData).then(data => setChange(true))
      
      onHide()
      console.log(formData.courseId, id)
  }
  return (
        
    <div>
        <Modal onClose={onHide} open={show} 
        aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
            <Box sx={{ ...style, width: 400 }}>
                <h2 id="child-modal-title">Добавление курса</h2>
                <Input placeholder='Название курса' id="child-modal-description" value = {name} onChange={e => setName(e.target.value)}/>
                <Input placeholder='Название' id="child-modal-description" value={subname} onChange={e => setSubname(e.target.value)}/>
                <Button variant="default" onClick={addCourse}>Добавить</Button>
                </Box>
                
        </Modal>
    </div>
)
})


export default CreateLessonInfo;