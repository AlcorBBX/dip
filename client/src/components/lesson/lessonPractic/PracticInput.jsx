import { Alert, Button, Fade, FormControl, InputLabel, OutlinedInput, Snackbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { UpdateUserLesson } from '../../../http/courseInfoAPI';
import CircularProgress from '@mui/material/CircularProgress';

const PracticInput = ({practic, lessonId, userId, users, infoId}) => {
  const [name, setName] = useState();
  const [loading, setLoading] = useState(true)
  const [first, setfirst] = useState()
  const [answer, setAnswer] = useState()
  const [state, setState] = useState(false)

  const [checked, setChecked] = useState('error')
  // const { enqueueSnackbar } = useSnackbar();


  const handleChange = (event) => {
    setName(event.target.value);
  };
  setTimeout(() => {
    // console.log(practic[1].lessonId)
    practic.map((practic) =>
    practic.lessonId == lessonId ?
        setfirst(practic): console.log("2")
      )
    setAnswer(first.answer)
    setLoading(false)
  }, 4000);


  const check = () => {
    answer === name ? upd() : 
      setChecked('error') 
      setState(true)
  }

  const upd = () => {
    console.log(users.lessons)
    const formData = new FormData()
    formData.append('courseInfoId', infoId)
    formData.append('lessons', JSON.stringify([
      ...users.lessons, infoId
      ]))
    UpdateUserLesson(formData, userId).then()
    setChecked('success')
    setState(true)
    // history(LESSON_ROUTE+ '/' + courseInfoId)
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
          {users?.lessons.find(e => e == infoId) ?
            <Button disabled variant="contained">Проверить</Button>
            : <Button onClick={check} variant="contained">Проверить</Button>
          }
        </div>
    </div>
    : <div style={{overflowY: 'hidden', display: 'flex', justifyContent: 'center'}}><CircularProgress color="success"/></div>}
    <Snackbar
            open={state}
            TransitionComponent={Fade}
            // message={user.user.email + ' выберите курс'}
            key={Fade}
        >
          {checked == 'success' ?
          <Alert severity={checked} sx={{ width: '100%' }}>
            {/* {user.user.email + ' выберите курс'} */}
            <p>Готово</p>
          </Alert>
          :
          <Alert severity={checked} sx={{ width: '100%' }}>
            {/* {user.user.email + ' выберите курс'} */}
            <p>Не верно</p>
          </Alert>
          }
          
        </Snackbar>
    </div>
  )
}

export default PracticInput