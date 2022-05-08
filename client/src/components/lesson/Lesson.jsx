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
    const [first, setfirst] = useState(true)
    useEffect(() => {
        {courseInfo.length > 1 ? setfirst(false): setfirst(true)}
        console.log(id)
        fetchOneCourseLesson(Number(id)).then(data => setCourseInfo(data)).finally(console.log(courseInfo.info))
        // console.log(courseInfo.id)
      }, [first])

    //   console.log(courseInfo.info[id].title)
    
    
  return (
    <div className='sl-lesson__content-container'>
        <p className='sl-lesson__content-comments'>125 Комментария</p>
        <div className='sl-description'>

        {/* {courseInfo.info.id[1] !== undefined ?
        <p key={courseInfo.info.id[1]}>{courseInfo.info.title}</p>   
        : <p>loading</p>} */}

        {/* {courseInfo.info.map((info) =>
                    <div>                  
                        <div>
                            <span className='sl-description-title' key={info.id[id]}>{info !== undefined ? info.title: "loading"}</span><br/>
                            <span className='sl-description-subtitle'>{info !== undefined ? info.subtitle: "loading"}</span><br/>
                            <div className='sl-description-code '>
                                <span className='sl-description-text'>{info !== undefined ? info.text: "loading"}</span><br/>
                            </div>
                            <div className='sl-description-note'>
                                <span className='sl-description-note__content'>{info !== undefined ? info.atention: "loading"}</span>
                            </div>
                        </div>                   
                    </div>                
                )} */}
        </div>
    </div>
  )
})

export default Lesson