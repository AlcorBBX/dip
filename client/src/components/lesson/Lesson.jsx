import { Button } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  fetchOneCourseLesson } from '../../http/courseInfoAPI'
import { Context } from '../../index'
import './lesson.css'
import LessonPractic from './lessonPractic/LessonPractic'
import LessonCreate from './modals/LessonCreate'
import PracticCreate from './modals/PracticCreate'
import UpdateLesson from './modals/UpdateLesson'

const Lesson = () => {
    const {user} = useContext(Context)
    const [courseVisible, setCourseVisible] = useState(false);
    const [updateVisible, setUpdateVisible] = useState(false);
    const [practicVisible, setPracticVisible] = useState(false);
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

    // setI(courseInfo.info[0].id)
    // console.log(courseInfo.info[0].id)
    {courseInfo.info[0] === undefined? console.log("u"): console.log("n")}
  return (
    <div className='sl-lesson__content-container'>
        {/* <p className='sl-lesson__content-comments' style={{color: 'white'}}>125 Комментария</p> */}
        <div className='sl-description'>
            <div>                  
                <div>
                    <span className='sl-description-title'>{courseInfo.info[0] === undefined? "coming son": courseInfo.info[0].title}</span><br/>
                    <span className='sl-description-subtitle'> {courseInfo.info[0] === undefined? "": courseInfo.info[0].text} </span><br/>
                    <div className='sl-description-code '>
                        <span className='sl-description-text'></span>{courseInfo.info[0] === undefined? "": courseInfo.info[0].code}<br/>
                    </div>
                    <div className='sl-description-note'>
                        <span className='sl-description-note__content'>{courseInfo.info[0] === undefined? "": courseInfo.info[0].atention}</span>
                    </div>
                </div>
                {user.user.role === "ADMIN"?
                    <div>
                        <Button onClick={() => setCourseVisible(true)}>Добавить урок</Button>
                        <Button onClick={() => setPracticVisible(true)}>Добавить практику</Button>
                        {courseInfo.info[0] === undefined? ""
                            :<Button onClick={() => setUpdateVisible(true)}></Button>}
                        
                    </div>
                :''}  
                <LessonPractic lessonId = {id} courseInfoId = {courseInfo.info[0].id}/>
                <PracticCreate id={courseInfo.info[0].id} setChange={setChange} show={practicVisible} onHide={() => setPracticVisible(false)}/>
                <LessonCreate id={id} setChange={setChange} show={courseVisible} onHide={() => setCourseVisible(false)}/>
                <UpdateLesson id={i} setChange={setChange} show={updateVisible} onHide={() => setUpdateVisible(false)}/>                 
            </div>                
        </div>
    </div>
  )
}

export default Lesson