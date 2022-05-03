import { Divider } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCourse, fetchOneCourse } from '../../http/courseAPI'
import { Context } from '../../index'
import './learn.css'
import LearnLesson from './learnLesson/LearnLesson'

const Learn = observer(() => {
  // const {courseInfo} = useContext(Context)
  const {id} = useParams()
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
          <div>
          {course.info.map((info, index) =>
                    <div key={info.id}>
                    <span className='sl-course-desc__desc'>{info.description}</span>
                    </div>
                )}
          </div>          
        </div>
      </div>

      <div className='sl-learn-course__main__modules-wrapper'>
      {/* {course.infoLesson.map((infoLesson, index) =>
                    <div key={infoLesson.id}>
                      {infoLesson.title}
                    </div>
                )} */}
        
        <LearnLesson/>
      </div>
    </div>
  )
})

export default Learn