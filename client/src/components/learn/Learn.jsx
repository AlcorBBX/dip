import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchOneCourse } from '../../http/courseAPI'
import { LESSON_ROUTE } from '../../utils/consts'
import './learn.css'
import CreateLessonInfo from './modals/CreateLessonInfo'
import LearnLeasson from './learnLesson/LearnLesson'
import { deleteCourseInfo } from '../../http/courseInfoAPI'

const Learn = observer(() => {
  
  const [change, setChange] = useState(false)
  const [courseVisible, setCourseVisible] = useState(false);
  const {id} = useParams()
  const history = useNavigate()
  const [course, setCourse] = useState( {info: []})
  
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


  console.log(course.info.id)
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
                    <div key={info.id} className='sl-group__item_sl-group__item-full'>
                    <span className='sl-lesson-item__index'>{info.name}</span>
                    <span className='sl-lesson-item__title'>{info.subname}</span>
                    {/* <button onClick={() => history(LESSON_ROUTE)}>Открыть</button> */}
                    <button onClick={() => history(LESSON_ROUTE+ '/' + info.id)}>Открыть</button>
                    <button onClick={() => handleDelete(info.id)}>Удалить</button>
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
      <CreateLessonInfo setChange={setChange} show={courseVisible} onHide={() => setCourseVisible(false)}/>
    </div>
  )
})

export default Learn