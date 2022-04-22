import { observer } from "mobx-react-lite";
import React from 'react'
import './courseCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LOGIN_ROUTE } from "../../../utils/consts";
import { NavLink } from "react-router-dom";

const CourseCard = observer(() => {

    return(
        <div className="card">
            <NavLink to={LOGIN_ROUTE} style={{textDecoration: 'none'}}>
            <Card sx={{ maxWidth: 155}} >
            <CardMedia
                component="img"
                height="150"
                image="https://sololearnuploads.azureedge.net/uploads/courses/1097.png"
                alt="react"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                React
            </Typography>
            <Typography variant="body2" color="text.secondary">
                12.4M Learn
            </Typography>
            </CardContent>
            <CardActions>
                <div className="btnCard">
                <Button size="small">Редактировать</Button>
                <Button   Button size="small">Удалить</Button>
                </div>
            </CardActions>
            </Card>
            </NavLink>
        </div>
    )
})

export default CourseCard