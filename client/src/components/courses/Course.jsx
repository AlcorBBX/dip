import { Button, Input } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from 'react'
import { fetchCourse } from "../../http/courseAPI";
import { Context } from "../../index";
import './course.css'
import CourseCard from './courseCard/CourseCard'
import CreateCourse from './modals/CreateCourse'

const Course = observer(() => {
  const {user} = useContext(Context)
  const [courseVisible, setCourseVisible] = useState(false);

    return (
        <div className="course">
    {/* <TypeBar/> */}
      <div className="containerCourse">
        <div className="courseInner">
        <div className="courseItem">
          <h1 className="courseTitle" style={{color: "#eee", fontWeight: '200', fontSize: '1.6em'}}>Что ты хочешь выучить?</h1>
          {user.user.role === "ADMIN" ?
          <div>
          <Button variant="outlined"
          onClick={() => setCourseVisible(true)}
          style={{color: 'gold', fontWeight: '500'}}>
            Добавить курс
          </Button>
          </div>
          :<p></p>}
          
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