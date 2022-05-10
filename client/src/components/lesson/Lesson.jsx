import { Button } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  fetchOneCourseLesson } from '../../http/courseInfoAPI'
import { Context } from '../../index'
import './lesson.css'
import LessonCreate from './modals/LessonCreate'

const Lesson = () => {
    const {user} = useContext(Context)
    const [courseVisible, setCourseVisible] = useState(false);
    const [i, setI] = useState()
    const {id} = useParams()
    const [change, setChange] = useState(false)

    console.log(user.user.role)
    const [courseInfo, setCourseInfo] = useState( )
    
    useEffect(() => {
        setChange(false)
        fetchOneCourseLesson(id).then(data => setCourseInfo(data)).finally()
      }, [change])
    //   console.log(courseInfo)
    if(!courseInfo){
        return ''
    }
    console.log(courseInfo)
    {courseInfo.info[0] === undefined? console.log("u"): console.log("n")}
  return (
    <div className='sl-lesson__content-container'>
        <p className='sl-lesson__content-comments' style={{color: 'white'}}>125 Комментария</p>
        <div className='sl-description'>
            <div>                  
                <div>
                    <span className='sl-description-title'>{courseInfo.info[0] === undefined? "": courseInfo.info[0].title}</span><br/>
                    <span className='sl-description-subtitle'> {courseInfo.info[0] === undefined? "": courseInfo.info[0].text} </span><br/>
                    <div className='sl-description-code '>
                        <span className='sl-description-text'></span>{courseInfo.info[0] === undefined? "": courseInfo.info[0].code}<br/>
                    </div>
                    <div className='sl-description-note'>
                        <span className='sl-description-note__content'>{courseInfo.info[0] === undefined? "": courseInfo.info[0].atention}</span>
                    </div>
                </div>
                {user.user.role === "ADMIN"?
                <Button onClick={() => setCourseVisible(true)}>Добавить</Button>
                :''}  
                <LessonCreate id={id} setChange={setChange} show={courseVisible} onHide={() => setCourseVisible(false)}/>                 
            </div>                
        </div>
    </div>
  )
}

export default Lesson