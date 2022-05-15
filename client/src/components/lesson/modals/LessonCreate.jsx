import React, {useEffect, useState} from 'react';
import { Box, Button, Input, Modal, TextField } from '@mui/material';
import { createCourseLesson } from '../../../http/courseInfoAPI';


const LessonCreate = ({id, setChange, show, onHide}) => {
//   const {course} = useContext(Context)

  const [changeC, setChangec] = useState(false)
  console.log("id="+id)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [code, setCode] = useState('')
  const [atention, setAtention] = useState('')
  const [courseInfoId, setCourseInfoId] = useState()
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
      formData.append("text", text)
      formData.append("code", code)
      formData.append("atention", atention)
      formData.append("courseInfoId", id)
      createCourseLesson(formData).then(data => setChange(true), onHide())
  }

    // useEffect(() => {
    //     setChangec(false)
    // // fetchCourse().then(data => course.setCourse(data.rows))
    // }, [changeC])
  
    return (
        
        <div>
            <Modal onClose={onHide} open={show} 
            aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="child-modal-title">Добавление урока</h2>
                    <Input style={{marginBottom: '10px'}} placeholder='Заголовок урока' id="child-modal-description" value = {title} onChange={e => setTitle(e.target.value)}/>
                    <TextField multiline
                                maxRows={4}
                                style={{marginBottom: '10px'}}
                                InputLabelProps={{
                                    style: { color: '#f000' },
                                }}
                        placeholder='Текст урока' id="child-modal-description" value={text} onChange={e => setText(e.target.value)}/>
                    
                    <TextField multiline
                                maxRows={4} style={{marginBottom: '10px'}} placeholder='Пример кода' id="child-modal-description" value={code} onChange={e => setCode(e.target.value)}/>
                    <TextField multiline
                                maxRows={4} 
                                InputLabelProps={{
                                    style: { color: 'black' },
                                }}
                                style={{marginBottom: '10px'}} placeholder='Предупреждение' id="child-modal-description" value={atention} onChange={e => setAtention(e.target.value)}/>
                    <Button variant="default" onClick={addCourse}>Добавить</Button>
                    </Box>
                    
            </Modal>
        </div>
    )
}


export default LessonCreate;