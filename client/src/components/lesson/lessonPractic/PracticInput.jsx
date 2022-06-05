import { Button, FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchOneCourseLessonPractic } from '../../../http/courseInfoAPI';

const PracticInput = ({practic, lessonId}) => {
  const [name, setName] = useState();
  const [loading, setLoading] = useState(true)
  const [first, setfirst] = useState()
  const [answer, setAnswer] = useState()



  const handleChange = (event) => {
    setName(event.target.value);
  };
  setTimeout(() => {
    // console.log(practic[1].lessonId)
    practic.map((practic) =>
      lessonId == 24 ?
        setfirst(practic): console.log("2")
      )
    setAnswer(first.answer)
    setLoading(false)
  }, 4000);
//fetchOneCourseLessonPractic
  // console.log(name)

  const check = () => {
    answer === name ? console.log('tr') : console.log('false')
  }
  return (
    <div>
    {loading === false ?
    
    <div style={{margin: '0 auto'}}>
        <div style={{marginBottom: '10px'}}>
          <Typography variant="h4" gutterBottom component="div" color={'white'}>
            {first.title}
          </Typography>
          <Typography variant="h5" gutterBottom component="div" color={'white'}>
            {first?.text}
          </Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <FormControl>
            <InputLabel htmlFor="component-outlined" sx={{color: 'white'}}>Ответ:</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={name}
              onChange={handleChange}
              label="Name"
              sx={{color: 'white', marginBottom: '10px'}}
            />
          </FormControl>
        </div>
        <div style={{display: 'flex', justifyContent: 'end'}}>
          <Button onClick={check} variant="contained">Проверить</Button>
        </div>
    </div>
    : 'loading'}
    </div>
  )
}

export default PracticInput