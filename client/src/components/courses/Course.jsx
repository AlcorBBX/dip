import { Button, Input } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useState } from 'react'
import './course.css'
import CourseCard from './courseCard/CourseCard'
import CreateCourse from './modals/CreateCourse'

const Course = observer(() => {
  const [courseVisible, setCourseVisible] = useState(false);

    return (
        <div className="course">
    {/* <TypeBar/> */}
      <div className="containerCourse">
        <div className="courseInner">
        <div className="courseItem">
          <h1 className="courseTitle" style={{color: "#eee", fontWeight: '200', fontSize: '1.6em'}}>Что ты хочешь выучить?</h1>
          <Button variant="default"
          onClick={() => setCourseVisible(true)}>
            Добавить курс
          </Button>
          <Input/>
          <Button size="small">Удалить</Button>
          <CreateCourse show={courseVisible} onHide={() => setCourseVisible(false)}/>
        </div>
        <div className="courseCard">
          <CourseCard/>
          </div>
        </div>
      </div>
    </div>
    )
})

export default Course