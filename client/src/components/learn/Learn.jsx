import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchOneCourse } from '../../http/courseAPI'
import { LESSON_ROUTE } from '../../utils/consts'
import './learn.css'
import CreateLessonInfo from './modals/CreateLessonInfo'
import LearnLeasson from './learnLesson/LearnLesson'
import { deleteCourseInfo, UpdateUserLesson } from '../../http/courseInfoAPI'
import { Context } from '../../index'
import { Button, Box, Card, CardContent, Typography, CardActions, Tooltip  } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UpdateLessonInfo from './modals/UpdateLessonInfo'
import LessonSertificat from '../lesson/lessonSertificat/LessonSertificat'
import { fetchOneUsers } from '../../http/userAPI'

const Learn = () => {
  const {user} = useContext(Context)
  const [users, setUsers] = useState()
  // const [infoId, setinfoId] = useState()
  const [indx, setIndx] = useState(true)
  const [change, setChange] = useState(false)
  const [courseVisible, setCourseVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);
  const {id} = useParams()
  const history = useNavigate()
  const [course, setCourse] = useState( {info: []})
  const [first, setfirst] = useState()
  const [counting, setcounting] = useState(0)
  console.log(user.user.id)
  useEffect(() => {
    fetchOneUsers(user.user.id).then(data => setUsers(data)).finally()
}, [])

  console.log(users?.courseInfoId)

  const upd = (courseInfoId, userId) => {
    console.log(users.lessons)
    const formData = new FormData()
    formData.append('courseInfoId', courseInfoId)
    formData.append('lessons', JSON.stringify([
      ...users.lessons, courseInfoId
      ]))
    UpdateUserLesson(formData, userId).then()
    history(LESSON_ROUTE+ '/' + courseInfoId)
}

  const click = (id) => {
    setfirst(id)
    setUpdateVisible(true)
    console.log(first)
  }

  console.log({id})
  console.log(user.user.role)
  const handleDelete = async (id) => {
    try {
      deleteCourseInfo(id).then(data => setChange(true)).finally()
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setChange(false)
    fetchOneCourse(id).then(data => setCourse(data))
  }, [change])

    const cl = () => {
      var uciq = []
      course?.info.map((info, index) => {
        console.log(index)
        index === 0 ? uciq = uciq + info.id :
        uciq = uciq + ',' + info.id 
    })
      console.log(Array.from(uciq))
    }
    
    // console.log(course?.info[2]?.lesson)
  return (
    <div className='sl-learn-course__main' style={{paddingTop: "100px"}}>
      <div className='sl-learn-course__main__desc-wrapper'>
        <img className='sl-course-desc__icon' src={"http://localhost:5000/" + course.img} alt='React'/>
        <div className='sl-course-desc__texts-wrapper'>
          <h1 className='sl-course-desc__title'>{course.name}</h1>
          {user.user.role === "ADMIN"?
            <Button style={{color: 'gold'}}
              variant="outlined" 
              onClick={() => setCourseVisible(true)}>Добавить урок</Button>             
          : ''
          }
        </div>
      </div>

      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {course.info.map((info, index) =>
          <Card key={info.id} sx={{width: 309, margin: 1}}>
          <CardContent >
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {info.name}
              </Typography>
              <div>
              {user.user.role === "ADMIN"?
              <div>
                  <Tooltip title="Редактировать">
                    <IconButton style={{width: '10px', height: '15px'}}
                      onClick={() => click(info.id)} aria-label="delete" size="large" color="secondary">
                      <BorderColorIcon />    
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Удалить">
                    <IconButton style={{width: '10px', height: '15px'}}
                      onClick={() => handleDelete(info.id)} aria-label="delete" size="large" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
              </div>
                  : ''
                  }
              </div>
            </div>
            <Typography variant="h5" component="div">
              {info.subname}
            </Typography>
          </CardContent>
          <CardActions>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}> 
                <div>
                  <Button onClick={() => upd(info.id, user.user.id)}>Открыть</Button>
                </div>
                <div>
                {/* users.lessons.find(info.id) */}
                {users?.lessons.find(e => e === info.id) ?
                  <Tooltip title="Урок прочитан">
                    <CheckCircleIcon color='success' sx={{height: '36.5px', margin: 'auto 0'}}/>  
                  </Tooltip>
                  : indx !== false ? setIndx(false): ''
                }
                  
                </div>
            </div>
          </CardActions>
          </Card>
      )}   
      </div>
      <div className='sl-group__item_sl-group__item-full'>
        <LessonSertificat course={course.name} indx={indx}/>
      </div>
      <CreateLessonInfo setChange={setChange} show={courseVisible} onHide={() => setCourseVisible(false)}/>
      <UpdateLessonInfo first={first} setChange={setChange} show={updateVisible} onHide={() => setUpdateVisible(false)}/>
    </div>
  )
}

export default Learn