import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PracticSelection from './PracticSelection'
import PracticInput from './PracticInput'
import { fetchOneCourseLessonPractic } from '../../../http/courseInfoAPI'

const LessonPractic = ({lessonId}) => {
  const [practic, setPractic] = useState()

  useEffect(() => {
    fetchOneCourseLessonPractic().then(data => setPractic(data.rows))
  }, [])

  return (
    <Container maxWidth="sm" className='lessonPractic' style={{paddingTop: '100px'}}>
        	{/* <PracticSelection practic = {practic}/> */}
          <PracticInput practic = {practic} lessonId = {lessonId}/>
    </Container>
  )
}


export default LessonPractic