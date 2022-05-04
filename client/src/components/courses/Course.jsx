import { Button, Input } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useContext, useState } from 'react'
import { Context } from "../../index";
import './course.css'
import CourseCard from './courseCard/CourseCard'
import CreateCourse from './modals/CreateCourse'

const Course = observer(() => {
  const {user} = useContext(Context)
  const [courseVisible, setCourseVisible] = useState(false);
  const [id, setId] = useState('')
  
  console.log(user.user.role)

    return (
        <div className="course">
    {/* <TypeBar/> */}
      <div className="containerCourse">
        <div className="courseInner">
        <div className="courseItem">
          <h1 className="courseTitle" style={{color: "#eee", fontWeight: '200', fontSize: '1.6em'}}>Что ты хочешь выучить?</h1>
          {user.user.role === "ADMIN" ?
          <div>
          <Button variant="default"
          onClick={() => setCourseVisible(true)}>
            Добавить курс
          </Button>
          <Input value = {id} onChange={e => setId(e.target.value)}/>
          <Button size="small">Удалить</Button>
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