import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  fetchOneCourseLesson } from '../../http/courseInfoAPI'
import { Context } from '../../index'
import './lesson.css'

const Lesson = () => {
    
    const [i, setI] = useState()
    const {id} = useParams()
    const [first, setfirst] = useState(true)


    const [courseInfo, setCourseInfo] = useState( )
    console.log(id)
    useEffect(() => {
        // setChange(false)
        fetchOneCourseLesson(id).then(data => setCourseInfo(data)).finally()
      }, [])
    //   console.log(courseInfo)
    if(!courseInfo){
        return ''
    }
    console.log(courseInfo)
    {courseInfo.info[0] === undefined? console.log("u"): console.log("n")}
    // {courseInfo.info.title === undefined? "": courseInfo.info[0].title}  text code atention
  return (
    <div className='sl-lesson__content-container'>
        <p className='sl-lesson__content-comments'>125 Комментария</p>
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
                        <button>Добавить</button>                   
                    </div>                
        </div>
    </div>
  )
}

export default Lesson