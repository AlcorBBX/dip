import { Container } from '@mui/material'
import React from 'react'
import PracticSelection from './PracticSelection'
import PracticInput from './PracticInput'

const LessonPractic = () => {
  
  return (
    <Container maxWidth="sm" className='lessonPractic' style={{paddingTop: '100px'}}>
        	<PracticSelection/>
          <PracticInput/>
    </Container>
  )
}


export default LessonPractic