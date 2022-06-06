import { Container } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import PracticSelection from './PracticSelection'
import PracticInput from './PracticInput'
import { fetchOneCourseLessonPractic, UpdateUserLesson } from '../../../http/courseInfoAPI'
import { fetchOneUsers } from '../../../http/userAPI'
import { Context } from '../../../index'
// courseInfoId ЭТО АЙДИ УРОКА!!!!!!
const LessonPractic = ({lessonId, courseInfoId}) => {
  const [practic, setPractic] = useState()
  const {user} = useContext(Context)
  const [users, setUsers] = useState()
  console.log(courseInfoId)
  useEffect(() => {
    fetchOneCourseLessonPractic().then(data => setPractic(data.rows))
    fetchOneUsers(user.user.id).then(data => setUsers(data)).finally()
  }, [])

  console.log(users)

  

  return (
    <Container maxWidth="sm" className='lessonPractic' style={{paddingTop: '100px'}}>
        	{/* <PracticSelection practic = {practic}/> */}
          <PracticInput practic = {practic} lessonId = {courseInfoId} users = {users} userId = {user.user.id} infoId = {lessonId}/>
    </Container>
  )
}


export default LessonPractic