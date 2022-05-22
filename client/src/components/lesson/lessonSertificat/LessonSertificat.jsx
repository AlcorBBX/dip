import { Button } from '@mui/material'
import React, { useState } from 'react'
import  './lessonSertificat.css'
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import LessonCertificate from '../modals/LessonCertificate';
// import LessonCertificate from './modals/LessonCertificate'

const LessonSertificat = ({course}) => {
    const [courseVisible, setCourseVisible] = useState(false);
    console.log(course)
  return (
    <div className='sl-certificate__header' >
        <div style={{display: 'flex'}}>
            <div className='sl-certificate__image'>
                <CardMembershipIcon fontSize='large'/>
            </div>
            <div className='sl-certificate__info'>
                <p className='sl-certificate__title sl-certificate__title'>Сертификат</p>
                <p className='sl-certificate__info-text'>
                    Мы рады вручить вам сертификат об окончании этого курса.
                </p>
            </div>
        </div>
        <Button onClick={() => setCourseVisible(true)}>Посмотреть сертификат</Button>
        <LessonCertificate course={course} show={courseVisible} onHide={() => setCourseVisible(false)}/>
        
    </div>
  )
}

export default LessonSertificat