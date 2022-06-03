import { Button, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import  './lessonSertificat.css'
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import LessonCertificate from '../modals/LessonCertificate';
// import LessonCertificate from './modals/LessonCertificate'

const LessonSertificat = ({course, indx}) => {
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
                {indx === true ?
                    <p className='sl-certificate__info-text'>
                        Мы рады вручить вам сертификат об окончании этого курса.
                    </p>
                :<Tooltip title="Вы не прочли все уроки!" placement="left">
                    <p className='sl-certificate__info-text'>
                        Мы рады вручить вам сертификат об окончании этого курса.
                    </p>
                </Tooltip>
                }
            </div>
        </div>
        {indx === true ?
            <Button onClick={() => setCourseVisible(true)}>Посмотреть сертификат</Button>
            :<Button disabled onClick={() => setCourseVisible(true)}>Посмотреть сертификат</Button>
        }
        
        <LessonCertificate course={course} show={courseVisible} onHide={() => setCourseVisible(false)}/>
        
    </div>
  )
}

export default LessonSertificat