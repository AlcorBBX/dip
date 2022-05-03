import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { fetchOneCourse } from '../../../http/courseAPI'
import { LESSON_ROUTE } from '../../../utils/consts'
import './learnLesson.css'


const LearnLesson = () => {
    // const {id} = useParams()
    // const [course, setCourse] = useState( {infoLesson: []})

  return (
    <div className='sl-group__item_sl-group__item-full'>
    
    <NavLink to={LESSON_ROUTE} style={{textDecoration: "none"}}>
        <div className='sl-lesson-item-full'>
            <div className='sl-lesson-item__content'>
                <div className='sl-lesson-item__index'>
                1.1 
                Lesson
                </div>
                <span className='sl-lesson-item__title'>Front-End Development</span>
            </div>

            <div className='sl-lesson-item__info'>
                <div className='sl-lesson-item__comments'>
                    323 Комментария
                </div>
                <div className='sl-group-item-status-completed'>
                    <div className='icon-wrapper-completed'>
                        <div className='icon-wrapper__icon-completed'>
                            {/* <svg style={{width: "100%", height: "100%"}}></svg> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </NavLink>
    </div>
  )
}

export default LearnLesson