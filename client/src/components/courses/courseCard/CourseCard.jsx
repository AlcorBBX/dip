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
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';



const CourseCard = observer(() => {
    const [courseVisible, setCourseVisible] = useState(false);
    const {course} = useContext(Context)
    const history = useNavigate()
    const {user} = useContext(Context)
    const [first, setfirst] = useState()

    const [change, setChange] = useState(false)

    const click = (id) => {
      setfirst(id)
      setCourseVisible(true)
    }

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
                image={"http://localhost:5000/" + course.img}
                alt="course"
            />
            
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {course.name}
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
                {/* 12.4M Learn */}
            </Typography>
            </CardContent>
            <CardActions>
            {user.user.role === "ADMIN"?
            <div className="btnCard">
                <Button style={{marginBottom: '5px'}} 
                    variant="outlined" color="warning" 
                    size="small"
                    onClick={() => click(course.id)}>Редактировать</Button>
                <Button variant="outlined" 
                    color="error" size="small" 
                    onClick={() => handleDelete(course.id)}>Удалить</Button>
                <Button endIcon={<SendIcon />} 
                    onClick={() => history(LEARN_ROUTE+ '/' + course.id)} 
                    key={course.id}>Открыть</Button>

                
                </div>
            :<Button endIcon={<SendIcon />} style={{margin: '0 auto'}} onClick={() => history(LEARN_ROUTE+ '/' + course.id)} key={course.id}>Открыть</Button>}
                
            <UpdateCourse show={courseVisible} first={first} setChange={setChange} onHide={() => setCourseVisible(false)}/>
            </CardActions>
            </Card>
            </div>
            )}
        </div>
    )
})

export default CourseCard