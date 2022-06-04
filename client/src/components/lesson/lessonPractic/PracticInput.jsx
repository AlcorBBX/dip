import { Button, FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React, { useState } from 'react'

const PracticInput = () => {
  const [name, setName] = useState();
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div style={{margin: '0 auto'}}>
        <div style={{marginBottom: '10px'}}>
          <Typography variant="h4" gutterBottom component="div" color={'white'}>
            Создать React приложения
          </Typography>
          <Typography variant="h5" gutterBottom component="div" color={'white'}>
            Напишите правильный вариант ответа для создания React приложения
          </Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <FormControl>
            <InputLabel htmlFor="component-outlined" sx={{color: 'white'}}>Name</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={name}
              onChange={handleChange}
              label="Name"
              sx={{color: 'white'}}
            />
          </FormControl>
        </div>
        <div style={{display: 'flex', justifyContent: 'end'}}>
          <Button variant="contained">Проверить</Button>
        </div>
    </div>
  )
}

export default PracticInput