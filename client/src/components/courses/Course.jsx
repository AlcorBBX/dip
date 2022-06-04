import { Alert, Button, Fade, Snackbar } from "@mui/material";
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
  const [state, setState] = useState(false)

  useEffect(() => {
    setState(true)
    const timer = setTimeout(() => {
      setState(false)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
    return (
        <div className="course">
      <div className="containerCourse">
        <div className="courseInner">
        <div className="courseItem">
          <h1 className="courseTitle" 
              style={{color: "#eee", fontWeight: '200', fontSize: '1.6em'}}>
                Что ты хочешь выучить?
              </h1>
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
        <Snackbar
            open={state}
            TransitionComponent={Fade}
            // message={user.user.email + ' выберите курс'}
            key={Fade}
        >
          <Alert severity="success" sx={{ width: '100%' }}>
            {/* {user.user.email + ' выберите курс'} */}
            <p><span style={{fontWeight: 'bold'}}>{user.user.email}</span> выберите курс</p>
          </Alert>
        </Snackbar>
    </div>
    )
})

export default Course