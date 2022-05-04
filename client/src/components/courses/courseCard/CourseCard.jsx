import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from 'react'
import './courseCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LEARN_ROUTE } from "../../../utils/consts";
import { useNavigate } from "react-router-dom";
import { deleteCourse, fetchCourse } from "../../../http/courseAPI";
import { Context } from '../../../index';
import UpdateCourse from '../modals/UpdateCourse'



const CourseCard = observer(() => {
    const [courseVisible, setCourseVisible] = useState(false);
    const {course} = useContext(Context)
    const history = useNavigate()
    const {user} = useContext(Context)

    const [change, setChange] = useState(false)

    const handleDelete = async (id) => {
        try {
          deleteCourse(id).then(data => setChange(true)).finally()
        } catch (error) {
          console.error(error);
        }
      };
    

    useEffect(() => {
      setChange(false)
    fetchCourse().then(data => course.setCourse(data.rows))
  }, [change])

    return(
        <div className="card">
        {course.course.map(course =>  
            <div>
            <Card sx={{ maxWidth: 155, margin: 1}}>
            <CardMedia
                
                component="img"
                height="150"
                image={course.img}
                alt="course"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {course.id},{course.name}
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
                12.4M Learn
            </Typography>
            </CardContent>
            <CardActions>
            {user.user.role === "ADMIN"?
            <div className="btnCard">
                <Button size="small" onClick={() => setCourseVisible(true)}>Редактировать</Button>
                <Button size="small" onClick={() => handleDelete(course.id)}>Удалить</Button>
                <Button onClick={() => history(LEARN_ROUTE+ '/' + course.id)} key={course.id}>Открыть</Button>
                </div>
            :<Button onClick={() => history(LEARN_ROUTE+ '/' + course.id)} key={course.id}>Открыть</Button>}
                
                <UpdateCourse show={courseVisible} onHide={() => setCourseVisible(false)}/>
            </CardActions>
            </Card>
            </div>
            )}
        </div>
    )
})

export default CourseCard