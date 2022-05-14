import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchOneCourse } from '../../http/courseAPI'
import { LESSON_ROUTE } from '../../utils/consts'
import './learn.css'
import CreateLessonInfo from './modals/CreateLessonInfo'
import LearnLeasson from './learnLesson/LearnLesson'
import { deleteCourseInfo } from '../../http/courseInfoAPI'
import { Context } from '../../index'
import { Button } from '@mui/material'
import UpdateLessonInfo from './modals/UpdateLessonInfo'
import LessonSertificat from '../lesson/lessonSertificat/LessonSertificat'

const Learn = observer(() => {
  const {user} = useContext(Context)
  const [change, setChange] = useState(false)
  const [courseVisible, setCourseVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);
  const {id} = useParams()
  const history = useNavigate()
  const [course, setCourse] = useState( {info: []})
  const [first, setfirst] = useState()

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

  return (
    <div className='sl-learn-course__main' style={{paddingTop: "100px"}}>
      <div className='sl-learn-course__main__desc-wrapper'>
        <img className='sl-course-desc__icon' src={"http://localhost:5000/" + course.img} alt='React'/>
        <div className='sl-course-desc__texts-wrapper'>
          <h1 className='sl-course-desc__title'>{course.name}</h1>
          <p>{course.rating}</p>
        </div>
      </div>

      <div className='sl-learn-course__main__modules-wrapper'>
      
          {course.info.map((info, index) =>
            <div key={info.id} className='sl-group__item_sl-group__item-full'>
              <span className='sl-lesson-item__index'>{info.name}</span>
              <span className='sl-lesson-item__title'>{info.subname}</span>
              {user.user.role === "ADMIN"?
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <Button variant="outlined" color="error" onClick={() => handleDelete(info.id)}>Удалить</Button>
                <Button onClick={() => click(info.id)}>Редактировать</Button>  
                {/* UpdateOneLessonInfo */}
                <Button onClick={() => history(LESSON_ROUTE+ '/' + info.id)}>Открыть</Button>  
              </div>
              :<Button onClick={() => history(LESSON_ROUTE+ '/' + info.id)}>Открыть</Button>
              }
            </div>
          )}
          <div className='sl-group__item_sl-group__item-full'>
            <LessonSertificat course={course.name}/>
          </div>
          {user.user.role === "ADMIN"?
          <div className='sl-group__item_sl-group__item-full'>
            <Button onClick={() => setCourseVisible(true)}>Добавить</Button>            
          </div>
          : ''
          }
      </div>
      <CreateLessonInfo setChange={setChange} show={courseVisible} onHide={() => setCourseVisible(false)}/>
      <UpdateLessonInfo first={first} setChange={setChange} show={updateVisible} onHide={() => setUpdateVisible(false)}/>
    </div>
  )
})

export default Learn