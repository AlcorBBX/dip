import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from 'react'
import './courseCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LEARN_ROUTE } from "../../../utils/consts";
import { NavLink } from "react-router-dom";
import { fetchCourse } from "../../../http/courseAPI";
import { Context } from '../../../index'
// import { Slide } from "@mui/material";


const CourseCard = observer(() => {

    const {course} = useContext(Context)
    // function TransitionUp(props) {
    //     return <Slide {...props} direction="up" />;
    //   }
    

    useEffect(() => {
    fetchCourse().then(data => course.setCourse(data.rows))
  }, [])

    return(
        <div className="card">
        {course.course.map(course => 
            <NavLink to={LEARN_ROUTE} style={{textDecoration: "none"}}>
            <Card key={course.id} sx={{ maxWidth: 155, margin: 1}} >
            <CardMedia
                
                component="img"
                height="150"
                image={course.img}
                alt="react"
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
                <div className="btnCard">
                <Button size="small" >Редактировать</Button>
                <Button size="small">Удалить</Button>
                </div>
            </CardActions>
            </Card>
            </NavLink>
            )}
        </div>
    )
})

export default CourseCard