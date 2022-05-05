import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchOneCourseInfo, fetchOneCourseLesson } from '../../http/courseInfoAPI'
import { Context } from '../../index'
import './lesson.css'

const Lesson = observer(() => {
    const [courseInfo, setCourseInfo] = useState( {info: []})
    const [i, setI] = useState()
    const {id} = useParams()


    useEffect(() => {
        // setChange(false)
        fetchOneCourseLesson(id).then(data => setCourseInfo(data))

      }, [])

      console.log(courseInfo.info)

  return (
    <div className='sl-lesson__content-container'>
        <p className='sl-lesson__content-comments'>125 Комментария</p>
        <div className='sl-description'>
    {courseInfo.info.map((info) =>
                    <div>
                    {console.log(Number(id), info.id)}
                    {info.id === Number(id) ?
                        <div key={info.id}>
                            <span className='sl-description-title'>{info.title}</span><br/>
                            <span className='sl-description-subtitle'>{info.text}</span><br/>
                            <div className='sl-description-code '>
                                <span className='sl-description-text'>{info.code}</span><br/>
                            </div>
                            <div className='sl-description-note'>
                                <span className='sl-description-note__content'>{info.atention}</span>
                            </div>
                        </div>
                    
                    :<p></p>}
                    </div>
                    
                )}
        
        </div>
    </div>
  )
})

export default Lesson