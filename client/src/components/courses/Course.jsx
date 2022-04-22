import { observer } from "mobx-react-lite";
import React from 'react'
import './course.css'
import CourseCard from './courseCard/CourseCard'

const Course = observer(() => {

    return(
        <div className="course">
    {/* <TypeBar/> */}
      <div className="containerCourse">
        <div className="courseInner">
        <div className="courseItem">
          <h1 className="courseTitle" style={{color: "#eee", fontWeight: '200', fontSize: '1.6em'}}>Что ты хочешь выучить?</h1>
        </div>
        <div className="courseCard">
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          </div>
        </div>
      </div>
    </div>
    )
})

export default Course