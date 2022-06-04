import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useState } from 'react'

const PracticSelection = () => {
    const [check, setCheck] = useState()
    const [color, setColor] = useState('white')
    const handl = () => {
      check === true ? setColor('blue') : console.log('a')
              
      }
    console.log(color)
  return (
    <div style={{margin: '0 auto'}}>
        <div>
          <Typography variant="h4" gutterBottom component="div" color={'white'}>
            Создать React приложения
          </Typography>
          <Typography variant="h5" gutterBottom component="div" color={'white'}>
            Выберите правильный вариант ответа для создания React приложения
          </Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <FormControlLabel 
              control={<Checkbox onChange={(e) => setCheck(e.target.checked)} sx={{color: 'black'}}/>} 
              label="Label"  
              sx={{
                color: 'black',
                border: '1px solid black',
                background: {color}}}/>
            <FormControlLabel control={<Checkbox/>} label="create react-app" />
            <FormControlLabel control={<Checkbox/>} label="create react-app" />
            <FormControlLabel control={<Checkbox/>} label="create react-app" />
        </div>
        <div style={{display: 'flex', justifyContent: 'end'}}>
          <Button variant="contained">Проверить</Button>
        </div>
    </div>
  )
}

export default PracticSelection