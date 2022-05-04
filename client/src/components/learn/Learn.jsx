import { Divider } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { fetchCourse, fetchOneCourse } from '../../http/courseAPI'
import { Context } from '../../index'
import { LESSON_ROUTE } from '../../utils/consts'
import './learn.css'
import CreateLessonInfo from './modals/CreateLessonInfo'
import LearnLeasson from './learnLesson/LearnLesson'

const Learn = observer(() => {
  // const {courseInfo} = useContext(Context)
  const [courseVisible, setCourseVisible] = useState(false);
  const {id} = useParams()
  const history = useNavigate()
  const [course, setCourse] = useState( {info: []})
  useEffect(() => {
    fetchOneCourse(id).then(data => setCourse(data))
  }, [])



  return (
    <div className='sl-learn-course__main' style={{paddingTop: "100px"}}>
      <div className='sl-learn-course__main__desc-wrapper'>
        <img className='sl-course-desc__icon' src={course.img} alt='React'/>
        <div className='sl-course-desc__texts-wrapper'>
          <h1 className='sl-course-desc__title'>{course.name}</h1>
          <p>{course.rating}</p>
        </div>
      </div>

      <div className='sl-learn-course__main__modules-wrapper'>
      
          {course.info.map((info, index) =>
                    <div key={info.id} onClick={() => history(LESSON_ROUTE)} style={{cursor: 'pointer'}} className='sl-group__item_sl-group__item-full'>
                    <span className='sl-lesson-item__index'>{info.name}</span>
                    <span className='sl-lesson-item__title'>{info.subname}</span>
                    </div>
                )}
          <div className='sl-group__item_sl-group__item-full'>
            <button onClick={() => setCourseVisible(true)}>Добавить</button>
            
          </div>

      {/* {course.infoLesson.map((info, index) =>
                    <div key={info.id}>
                      {info.name}
                      {info.subname}
                    </div>
                )} */}
        
        {/* <LearnLesson/> */}
      </div>
      <CreateLessonInfo show={courseVisible} onHide={() => setCourseVisible(false)}/>
    </div>
  )
})

export default Learn